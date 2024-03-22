import React from 'react'
import { useRef, useEffect } from 'react';

const Login = () => {
    const headerRef = useRef(null);
    useEffect(() => {
        if(headerRef.current) {
            headerRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [])

  return (
    <>
        <div className='' ref={headerRef} style={{paddingTop: "3.7em"}}>
            <form action="" className=''>
                <div className='flex h-screen justify-center items-center'>
                    <div className='space-x-4'>
                        <input type="text" name='email' id='email' placeholder='Enter your email' className='py-4 px-2 rounded-md focus:outline-none focus:border-green-800 focus:ring-1 focus:bg-transparent'/>
                        <input type="password" name='password' id='password' placeholder='Password' className='py-4 px-2 rounded-md focus:outline-none focus:border-green-800 focus:ring-1 focus:bg-transparent'/>
                    </div>
                </div>
                    
                
                        
            </form>
        </div>
    </>
  )
}

export default Login
