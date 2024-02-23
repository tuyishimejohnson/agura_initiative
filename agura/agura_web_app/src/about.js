import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './Manufacturing-tech-Jan-18-2023-web.png'

const About = () => {
  return (
    <>
        <div className='bg-no-repeat bg-contain' style={{backgroundImage:`url(${backgroundImage})`}}>
        <div>
            <div className='pt-36 w-full text-white'>
                <h1 className='text-center text-3xl font-medium'>This is About us</h1>
                <div className='w-2/4 mx-auto text-center'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi molestias natus et, necessitatibus adipisci. Eveniet explicabo veniam voluptates, voluptatum velit magnam veritatis, aliquid repellat eligendi, nam assumenda suscipit consequuntur?</p>
                </div>
            </div>
            <div className='flex text-white'>
                <div className=' w-2/4'>
                    <h2 className='text-3xl font-semibold p-7'>Reach Us</h2>

                {/* This is the div of the form.*/}
                    <div className='flex justify-center my-8'>
                        <form action="" className='space-y-2 w-full mx-8'>
                            
                        <div className='flex items-center'><label htmlFor="names">Full names<span className='text-red-500'>*</span></label></div>
                            <input type="text" placeholder='Ex: Nzaramba Innocent' id='names' required className='block w-full p-3 bg-transparent border'/>
                        
                            <div className='block w-full'><label htmlFor="message">Email<span className='text-red-500'>*</span></label></div>
                            <input type="text" placeholder='Ex: sample@gmail.com' id='email' required className='block w-full p-3 bg-transparent border'/>
                            <div className='block w-full'><label htmlFor="message">Message<span className='text-red-500'>*</span></label></div>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' className='block w-full p-3'></textarea>
                            <div className='mt-6'>
                                <button type='submit' className='border  rounded-full px-10 py-4 bg-gray-600 text-color_1 hover:border-slate-600 hover:bg-transparent hover:text-gray-600'>Submit</button>
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

            </div>
        <div className='bg-stone-300 p-6'>
            <nav>
                <ul className='flex justify-center space-x-8 text-sm'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/Services'>Services</Link></li>
                    <li><Link to='/contacts'>Contacts</Link></li>
                </ul>
            </nav>
        </div>
        
</div>

    </>
  )
}

export default About
