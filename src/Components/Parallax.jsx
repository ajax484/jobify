import { useState, useRef, useLayoutEffect } from 'react'
import { motion, useTransform, useSpring, useReducedMotion, useScroll } from 'framer-motion'


const Parallax = ({ children, offset = 50, element, ...props }) => {
    const prefersReducedMotion = useReducedMotion()
    const [elementTop, setElementTop] = useState(0)
    const [clientHeight, setClientHeight] = useState(0)
    const ref = useRef(null)

    const { scrollY } = useScroll()

    const initial = elementTop - clientHeight
    const final = elementTop + offset

    const yRange = useTransform(scrollY, [initial, ((initial - final)/4), ((initial - final)/2), ((initial - final)/(4/3)),  final], [0, 1, 1, 1, 0])
    const y = useSpring(yRange, { stiffness: 400, damping: 90 })

    const El = motion[element]

    useLayoutEffect(() => {
        const element = ref.current

        const onResize = () => {
            setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset)
            setClientHeight(window.innerHeight)
        }

        onResize()

        window.addEventListener('resize', onResize)

        return () => window.removeEventListener('resize', onResize)
    }, [ref])

    // Don't parallax if the user has "reduced motion" enabled
    if (prefersReducedMotion) {
        return <>{children}</>
    }

    return (
        <El ref={ref} style={{ opacity: y, scale: y }} {...props}>
            {children}
        </El>
    )
}

export default Parallax