export const slideInAndVisible = {
    initial: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
}

export const growOutAndVisible = {
    initial: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
}

export const slideOut = {
    initial: { width: 0 , opacity: 0},
    visible: { width: '100%', opacity: 1 }
}

export const slideOutAndVisible = {
    initial: { ...slideOut.initial , opacity: 0},
    visible: { ...slideOut.visible, opacity: 1,  delay: 1.5 }
}

export const slideDownAndStretch = {
    initial: { y: 100, height: 0, opacity: 0 },
    visible: { y: 0, height: '100%', opacity: 1 }
}

export const slideUpAndVisible = {
    initial: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    }
}

export const transition = {
    duration: 1.5,
    ease: "easeInOut"
}

export const visibleNav = {
    initial: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 1.5,
        }
    }
}

export const visibleNavChildren = {
    initial: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
}

export const word = {
    initial: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        },
    },
}

export const letter = {
    initial: { x: -20, opacity: 0 },
    visible: (custom) => ({
        x: 0, opacity: 1,
        transition: {
            duration: .4,
            delay: custom * 0.1,
        }
    })
}