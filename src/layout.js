import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useRef, useEffect } from 'react';
import './styles.css'

const Layout = () => {
    const headerRef = useRef(null);
    useEffect(() => {
        if(headerRef.current) {
            headerRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [])
  return (

    <>
    
        <div className='flex justify-around border top-0 bg-gray-300 right-0 left-0 items-center fixed z-10' ref={headerRef}>
            <img src={require('./Untitled (1).png')} alt="" className='w-14'/>
            <div>
                <nav className='flex space-x-5 '>
                    <ul className='navigation'><li><Link to='/'>Home</Link></li></ul>
                    <ul className='navigation'><li><Link to='/about'>About</Link></li></ul>
                    <ul className='navigation'><li><Link to='/services'>Services</Link></li></ul>
                    <ul className='navigation'><li><Link to='/contacts'>Contact Us</Link></li></ul>
                </nav>
            </div>
            <div className='space-x-6'>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>

        < Outlet />
    </>
    
  )
}

export default Layout
