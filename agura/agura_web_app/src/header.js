import React from 'react'


const Header = () => {
  return (
    <div>
        <div className='flex justify-around border border-color_1 fixed right-0 left-0 items-center'>
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

    </div>
  )
}

export default Header
