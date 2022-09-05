export const loadingImage = {
    init: {
        opacity: 0.2
    },
    anim: {
        opacity: 0.8
    }
}
export const transition = {
    repeat: Infinity,
    duration: 1,
    repeatType: "reverse"
}

export const slideVerticalAnimation = {
    open: {
        rotateX: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            mass: 0.8,
            type: "spring"
        },
        display: "block"
    },
    close: {
        rotateX: -15,
        y: -30,
        opacity: 0,
        transition: {
            duration: 0.3
        },
        transitionEnd: {
            display: "none"
        }
    }
};