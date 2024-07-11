import {useEffect, useRef, useState} from 'react'
import {motion} from 'framer-motion'
import iPhone from '../../assets/iPhone-png.png'
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


    return <>
      <div className="heading">
        HEADING
      </div>
      <div className="subHeading">
        DETAILS
      </div>
      <div ref={scrollContainerRef} className="scrollingContainer">
        <div className="element"><img src={iPhone} /></div>
        <div className="element"><img src={iPhone} /></div>
        <div className="element"><img src={iPhone} /></div>
        <div className="element"><img src={iPhone} /></div>
      </div>
    </>

}

export default Features