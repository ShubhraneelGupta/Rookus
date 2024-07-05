import {useEffect, useRef, useState} from 'react'
import {motion} from 'framer-motion'
import './Features.scss'

const Features = () => {
    const scrollContainerRef = useRef(null)


    useEffect(() => {
        const handleWheel = (event) => {
            if(scrollContainerRef.current){
                scrollContainerRef.current.scrollLeft += event.deltaY
                console.log(event.deltaY)
            }
        }

            const scrollContainer = scrollContainerRef.current
            if(scrollContainer){
                scrollContainer.addEventListener('wheel', handleWheel)
            }

            return () => {
                scrollContainer.removeEventListener('wheel', handleWheel)
            }
    }, [])


    return <div ref={scrollContainerRef} className="scrollingContainer">
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
    </div>

}

export default Features