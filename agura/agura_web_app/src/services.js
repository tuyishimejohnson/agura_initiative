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
      <h2 className='mx-40 text-3xl py-4'>Services Offered</h2>
      <div className='grid grid-cols-2 gap-x-6 gap-y-6 mx-32'>
        <div className='shadow-md shadow-gray rounded-2xl'>
          <img src={require('./socialMedia.jpg')} alt="" className='rounded-t-2xl'/>
          <p className='py-4 px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eligendi eos error nemo ipsam velit, et ratione culpa molestiae repudiandae quae fuga odit, exercitationem similique, suscipit quaerat maxime amet iusto?</p>
          <button className='ml-8 mb-6 shadow-lg bg-green-500 p-5 rounded-md hover:bg-green-400 hover:translate-y-2 transition transform'>Read more</button>
        </div>
        <div className='shadow-md shadow-gray rounded-2xl'>
          <img src={require('./socialMedia.jpg')} alt="" className='rounded-t-2xl'/>
          <p className='py-4 px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aspernatur minus impedit optio asperiores ullam fuga laudantium labore ab hic, totam vero explicabo, et amet veritatis exercitationem, voluptatem cum laboriosam.</p>
          <button className='ml-8 mb-6 shadow-lg bg-green-500 p-5 rounded-md hover:bg-green-400 hover:translate-y-2 transition transform'>Read more</button>
        </div>
        <div className='shadow-md shadow-gray rounded-2xl'>
          <img src={require('./socialMedia.jpg')} alt="" className='rounded-t-2xl'/>
          <p className='py-4 px-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eligendi eos error nemo ipsam velit, et ratione culpa molestiae repudiandae quae fuga odit, exercitationem similique, suscipit quaerat maxime amet iusto?</p>
          <button className='ml-8 mb-6 shadow-lg bg-green-500 p-5 rounded-md hover:bg-green-400 hover:translate-y-2 transition transform'>Read more</button>
        </div>
      </div>
      
    </div>
  )
}

export default Services
