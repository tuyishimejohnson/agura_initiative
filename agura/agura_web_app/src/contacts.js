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
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum nemo alias, magni et magnam labore vel consectetur temporibus nesciunt quis maiores quam, ab amet at similique quibusdam commodi aliquid facilis.</p>
    </div>
  )
}
export default Contacts
