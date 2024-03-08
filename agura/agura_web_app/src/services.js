import React from 'react'
import { useRef, useEffect } from 'react';

const Services = () => {

    const headerRef = useRef(null);
    useEffect(() => {
        if(headerRef.current) {
            headerRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [])

  return (
    <div className='' ref={headerRef} style={{paddingTop: '3rem'}}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, consequuntur itaque incidunt minus, quo quod amet neque, ipsum numquam eum dolore quidem non ullam. Dolorum architecto excepturi esse doloremque asperiores.</p>

      <div className=''>
        <img src={require('./1700218492637.jpg')} alt="" />
      </div>
    </div>
  )
}

export default Services
