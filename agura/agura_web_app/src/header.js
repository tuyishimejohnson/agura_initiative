import React from 'react'


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
                    <div className=''>
                        <p className=' bg-color_4 rounded-md text-center ring-offset-blue-400 shadow-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus non quisquam harum corrupti velit, tempora repellendus alias nihil dolore repellat eveniet autem inventore. Molestiae aliquam commodi doloribus voluptate fuga?</p>
                    </div>
                    <div>
                        <p className='bg-color_4 rounded-md ring-offset-blue-400 shadow-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus non quisquam harum corrupti velit, tempora repellendus alias nihil dolore repellat eveniet autem inventore. Molestiae aliquam commodi doloribus voluptate fuga?</p>
                    </div>
                    <div>
                        <p className='bg-color_4 rounded-md ring-offset-blue-400 shadow-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus non quisquam harum corrupti velit, tempora repellendus alias nihil dolore repellat eveniet autem inventore. Molestiae aliquam commodi doloribus voluptate fuga?</p>
                    </div>
                </div>
        </div>
        <div className='mt-36 text-center'>
            <button className='border bg-color_3 px-8 py-5 rounded-sm hover:bg-color_5'>Explore more</button>
        </div>

        <div className='bg-color_6 mt-12 space-x-3'>
        {/* <h2 className='text-center w-1/4'>About</h2> */}
                <div className='flex'>
                    <p className='flex items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsa aperiam laboriosam voluptas ullam corrupti labore eos expedita libero itaque, ea minus deleniti cumque suscipit aspernatur sed pariatur illo omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora optio eos rem, exercitationem esse est recusandae sed id. Consequuntur rem reiciendis mollitia libero et fugiat ipsam eaque totam? Ratione, natus.</p>
                    <img src={require('./socialMedia.jpg')} alt="" className='w-2/4 rounded-full'/>
                </div>
        </div> 
            

            <div className='flex'>
                <div className='bg-gray-300 w-2/4'>
                    <h2 className='text-3xl font-semibold'>Reach to Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum expedita dicta vero commodi nisi. Voluptas quasi illo recusandae voluptatem necessitatibus sunt expedita debitis dignissimos. Ut totam aspernatur debitis id incidunt.</p>
                </div>
                <div>
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

        
    

    </>
  )
}

export default Header
