import React from 'react';
// import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import backgroundImage from './Manufacturing-tech-Jan-18-2023-web.png'

const About = () => {
    const headerRef = useRef(null);
    useEffect(() => {
        if(headerRef.current) {
            headerRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [])

  return (

    <>
    <div className='pt-36 bg-no-repeat bg-cover h-screen relative' style={{backgroundImage: `url(${backgroundImage})`,filter: 'brightness(25%)'}} ref={headerRef} >
    </div>

    <div className='absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2'>
        <h2 className='text-center text-5xl pb-5'>This is about us</h2>
        <p className='text-center font-extralight'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo assumenda tempore omnis nemo odio delectus et rem molestias! Corrupti deserunt doloremque sit temporibus reprehenderit ducimus! Quaerat cumque dolores delectus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id velit iste dignissimos aliquam itaque voluptatum quasi tempora, officiis modi harum corporis cumque, illum placeat minus eos quam consequuntur accusamus? Facilis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum esse eum quo, magnam optio at tenetur voluptate minus obcaecati mollitia ipsum officiis adipisci ut voluptas nobis dolorem totam consequuntur sed.
        </p>
    </div>
    </>
    
  )
}

export default About
