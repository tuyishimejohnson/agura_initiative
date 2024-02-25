import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { faThumbTack } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
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
            <div className='' ref={headerRef}>
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
                

            <div className='flex'>
                <div className=' w-2/4'>
                    <h2 className='text-3xl font-semibold p-7'>Reach Us</h2>

                    <div className='flex justify-center my-8'>
                        <form action="" className='space-y-2 w-full mx-8'>
                            
                        <div className='flex items-center'><label htmlFor="names">Full names<span className='text-red-500'>*</span></label></div>
                            <input type="text" placeholder='Ex: Nzaramba Innocent' id='names' required className='block w-full p-3 focus:outline-none focus:ring-1 focus:border-gray-400 rounded-full'/>
                        
                            <div className='block w-full'><label htmlFor="message">Email<span className='text-red-500'>*</span></label></div>
                            <input type="text" placeholder='Ex: sample@gmail.com' id='email' required className='block w-full p-3 focus:outline-none focus:ring-1 focus:border-gray-400 rounded-full'/>
                            <div className='block w-full'><label htmlFor="message">Message<span className='text-red-500'>*</span></label></div>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' className='block w-full p-3 focus:outline-none focus:ring-1 focus:border-gray-400 rounded'></textarea>
                            <div className='mt-6'>
                                <button type='submit' className='border  rounded px-10 py-4 bg-gray-600 text-color_1 hover:border-slate-600 hover:bg-transparent hover:text-gray-600 hover:translate-x-2 transition transform'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='flex items-center'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5535042083015!2d30.150342673212172!3d-1.9306257366661421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca77688d3131f%3A0x3a65f6d29a33c0d3!2sAfrican%20Leadership%20University!5e0!3m2!1sen!2srw!4v1707725171152!5m2!1sen!2srw" 
                    title="goolge MapAlu" 
                    width="600" 
                    height="450" 
                    style={{border:0}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade" 
                    frameborder="0"></iframe>
                </div>
            </div>
            <div className='bg-stone-300 p-6'>
                <nav>
                    <ul className='flex justify-center space-x-8 text-sm'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/contacts'>Contact us</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
  )
}

export default HomePage
