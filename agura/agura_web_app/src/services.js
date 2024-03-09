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
      <div className='flex space-x-6'>
        <div className='border-b-2'>
          <img src={require('./socialMedia.jpg')} alt="" className='rounded-t-2xl'/>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eligendi eos error nemo ipsam velit, et ratione culpa molestiae repudiandae quae fuga odit, exercitationem similique, suscipit quaerat maxime amet iusto?</p>
        </div>
        <div className='border-b-2'>
          <img src={require('./socialMedia.jpg')} alt="" className='rounded-t-2xl'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aspernatur minus impedit optio asperiores ullam fuga laudantium labore ab hic, totam vero explicabo, et amet veritatis exercitationem, voluptatem cum laboriosam.</p>
        </div>
        <div className='border-b-2'>
          <img src={require('./socialMedia.jpg')} alt="" className='rounded-t-2xl'/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi libero labore enim nobis consequuntur, exercitationem qui dolores sed. Cupiditate aliquam pariatur voluptas aliquid odio, maiores accusamus ipsum voluptatibus dolorum?</p>
        </div>
      </div>
      
    </div>
  )
}

export default Services
