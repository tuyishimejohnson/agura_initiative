import React from 'react'
import { useRef, useEffect } from 'react';

const Contacts = () => {
  const headerRef = useRef(null);
    useEffect(() => {
        if(headerRef.current) {
            headerRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [])

  return (
    <div className='' ref={headerRef} style={{paddingTop: '4rem'}}>
      <p>For More information just fill out the form below</p>
    </div>
  )
}
export default Contacts
