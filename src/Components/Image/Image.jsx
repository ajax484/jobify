import { getDownloadURL, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { storage } from '../../Utils/Firebase.config';
import { useLocalState } from '../../Utils/Hooks';

import { motion } from "framer-motion";
import { loadingImage, transition } from '../../Utils/anim';

const Image = ({ image, alt, parentRef }) => {
    const [url, setImgUrl] = useLocalState(null, image);
    const [state, setState] = useState({ loading: true, error: false })

    useEffect(() => {
        //check if url is in local storage, if yes, then don't bother to fetch new url 

        if (url) {
            setState({ loading: false, error: false })
            return;
        }

        setState({ loading: true, error: false })
        console.log(image);

        let storageRef = storage;

        if(parentRef) {
            storageRef = ref(storageRef, parentRef)
        }

        const imageRef = ref(storageRef, image)
        // console.log(imageRef);

        getDownloadURL(imageRef)
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'
                // This can be downloaded directly:
                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';

                xhr.onload = (event) => {
                    const blob = xhr.response;
                };

                xhr.open('GET', url);
                xhr.send();

                // Or inserted into an <img> element
                // const img = document.getElementById('myimg');
                // img.setAttribute('src', url);

                // console.log(url);
                setImgUrl(url);
                setState({ loading: false, error: false })
            })
            .catch((error) => {
                // Handle any errors
                console.log(error);
                setState({ loading: false, error: true })
            });
    }, [image]);

    return (
        <div className="h-16 w-16">
            {
                //show image if not loading and url exists
                !state.loading && url ?
                    <img src={url || ''} alt={alt} />
                    :
                    <motion.div
                        variants={loadingImage}
                        initial="init"
                        animate="anim"
                        transition={transition}
                        className=" bg-gray-300 w-full h-full rounded-full"
                    />
            }
        </div>
    );
}

export default Image;
