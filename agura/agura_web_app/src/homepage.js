import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { faThumbTack } from '@fortawesome/free-solid-svg-icons'
import { useRef, useEffect } from 'react'


const HomePage = () => {
    const headerRef = useRef(null);
    useEffect(() => {
        if(headerRef.current) {
            headerRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [])
  return (
    <>
        <div>
            <div className='' ref={headerRef} style={{paddingTop: '1px'}}>
                <div className='flex space-x-8 pr-8 mt-12 relative'>
                    <img src={require('./5e8caed9e3160c5a7fe56547_nesa-by-makers-kwzWjTnDPLk-unsplash-min_40_1_45.jpg')} alt="" className='w-2/4'/> 
                    <p className='justify-center items-center flex text-center w-2/4 font-extrabold text-4xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa quasi eos provident laboriosam. Ex porro corporis voluptatibus </p>
                </div>
                    <div className='flex absolute top-3/4 space-x-5 mx-6'>
                        <div className='bg-color_4 rounded-md ring-offset-blue-400 shadow-xl'>
                            < FontAwesomeIcon icon={faThumbTack} className='p-4'/>
                            <p className='text-center px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus non quisquam harum corrupti velit, tempora repellendus alias nihil dolore repellat eveniet autem inventore. Molestiae aliquam commodi doloribus voluptate fuga?</p>
                            <button className='py-4 hover:text-gray-500'><FontAwesomeIcon icon={faLongArrowAltRight}className='px-4'/>Learn more </button>
                        </div>
                        <div className='bg-color_4 rounded-md ring-offset-blue-400 shadow-xl'>
                            < FontAwesomeIcon icon={faThumbTack} className='p-4'/>
                            <p className='text-center px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus non quisquam harum corrupti velit, tempora repellendus alias nihil dolore repellat eveniet autem inventore. Molestiae aliquam commodi doloribus voluptate fuga?</p>
                            <button className='py-4 hover:text-gray-500'><FontAwesomeIcon icon={faLongArrowAltRight} className='px-4'/>Learn more </button>
                        </div>
                        <div className='bg-color_4 rounded-md ring-offset-blue-400 shadow-xl'>
                            < FontAwesomeIcon icon={faThumbTack} className='p-4'/>
                            <p className='text-center px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus non quisquam harum corrupti velit, tempora repellendus alias nihil dolore repellat eveniet autem inventore. Molestiae aliquam commodi doloribus voluptate fuga?</p>
                            <button className='py-4 hover:text-gray-500'><FontAwesomeIcon icon={faLongArrowAltRight} className='px-4'/>Learn more </button>
                        </div>
                        
                    </div>
            </div>
            <div className='mt-64  text-center'>
                <button className='border bg-color_3 px-8 py-5 rounded-lg hover:bg-color_5 hover:translate-y-2 transform transition'>Explore more</button>
            </div>

            <div className='bg-color_6 mt-12'>
                    <div className='flex relative'>
                        <p className='flex items-center p-8 text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsa aperiam laboriosam voluptas ullam corrupti labore eos expedita libero itaque, ea minus deleniti cumque suscipit aspernatur sed pariatur illo omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        
                        <img src={require('./socialMedia.jpg')} alt="" className='w-2/4 h-auto brightness-50'/>
                        <p className='absolute w-2/4 right-0 justify-center text-center top-20 text-white rounded-md font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem velit id asperiores, accusamus laudantium voluptatibus ipsam eum similique ipsum dignissimos error rem labore tempore! Laboriosam voluptates culpa dolore at autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, molestiae qui. Dolorum, quod id vel ratione harum, architecto velit illo sunt porro, numquam laborum fuga molestias pariatur illum doloremque. Id?</p>
                    </div>
            </div> 
        </div>
    </>
  )
}

export default HomePage
