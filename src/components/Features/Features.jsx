import {useEffect, useRef, useState} from 'react'
import {motion, useInView} from 'framer-motion'
import iPhone from '../../assets/iPhone-png.png'
import './Features.scss'

const Features = () => {
    const scrollContainerRef = useRef(null)


    useEffect(() => {
        const handleWheel = (event) => {
            if(scrollContainerRef.current){
                scrollContainerRef.current.scrollLeft += event.deltaY
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
        <motion.div className="initialText">
            <div className="heading">
              Lorem ipsum
            </div>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, 
            quis nostrud exercitation 
            ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. D
            uis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui 
            officia deserunt mollit anim id est laborum.
        </motion.div>
        <div className="element first"><img src={iPhone} /></div>
        <div className="element"><img src={iPhone} /></div>
        <div className="element"><img src={iPhone} /></div>
        <div  className="element"><img src={iPhone} /></div>
      </div>


    </>

}

export default Features