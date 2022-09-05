import React from 'react';
import { useFileUpload } from '../../Utils/Hooks';

const FileUpload = () => {
    const {file, handleChange} = useFileUpload;
    
    return (
        <form className="space-y-4">
            <h1 className="text-xl capitalize font-bold">Upload Resume</h1>
            <input type="file" onChange={handleChange} />
            <button type="submit">Upload</button>
        </form>
    );
}

export default FileUpload;
