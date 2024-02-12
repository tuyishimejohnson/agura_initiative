import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <>
    <div>
        <div className='flex justify-around border fixed top-0 border-color_1 right-0 left-0 items-center'>
            <img src={require('./Untitled (1).png')} alt="" className='w-12'/>
            <div>
                <nav>
                    <ul className='flex space-x-8 font-semibold text-color_2'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contacts</a></li>
                    </ul>
                </nav>
            </div>
            <div className='space-x-6'>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>
        <div className=''>
            <div className='flex space-x-8 pr-8 mt-12 relative'>
                <img src={require('./5e8caed9e3160c5a7fe56547_nesa-by-makers-kwzWjTnDPLk-unsplash-min_40_1_45.jpg')} alt="" className='w-2/4'/> 
                <p className='justify-center items-center flex text-center w-2/4 font-extrabold text-4xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsa quasi eos provident laboriosam. Ex porro corporis voluptatibus </p>
            </div>
                <div className='flex absolute top-3/4 space-x-5 px-4'>
                    <div className='bg-color_4 rounded-md ring-offset-blue-400 shadow-xl'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus non quisquam harum corrupti velit, tempora repellendus alias nihil dolore repellat eveniet autem inventore. Molestiae aliquam commodi doloribus voluptate fuga?</p>
                        <FontAwesomeIcon icon={faLongArrowAltRight}/> Learn more
                    </div>
                    <div className='bg-color_4 rounded-md ring-offset-blue-400 shadow-xl'>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus non quisquam harum corrupti velit, tempora repellendus alias nihil dolore repellat eveniet autem inventore. Molestiae aliquam commodi doloribus voluptate fuga? </p>
                        <FontAwesomeIcon icon={faLongArrowAltRight}/> Learn more
                    </div>
                    <div className='bg-color_4 rounded-md ring-offset-blue-400 shadow-xl'>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus non quisquam harum corrupti velit, tempora repellendus alias nihil dolore repellat eveniet autem inventore. Molestiae aliquam commodi doloribus voluptate fuga?</p>
                        <FontAwesomeIcon icon={faLongArrowAltRight}/> Learn more
                    </div>
                </div>
        </div>
        <div className='mt-36 text-center'>
            <button className='border bg-color_3 px-8 py-5 rounded-sm hover:bg-color_5'>Explore more</button>
        </div>

        <div className='bg-color_6 mt-12'>
        {/* <h2 className='text-center w-1/4'>About</h2> */}
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
                            <input type="text" placeholder='Ex: Nzaramba Innocent' id='names' required className='block w-full p-3'/>
                        
                            <div className='block w-full'><label htmlFor="message">Email<span className='text-red-500'>*</span></label></div>
                            <input type="text" placeholder='Ex: sample@gmail.com' id='email' required className='block w-full p-3'/>
                            <div className='block w-full'><label htmlFor="message">Message<span className='text-red-500'>*</span></label></div>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' className='block w-full p-3'></textarea>
                            <div className='mt-6'>
                                <button type='submit' className='border border-slate-400 px-10 py-4'>Submit</button>
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
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
         </div>
    </div>

        
    

    </>
  )
}

export default Header
