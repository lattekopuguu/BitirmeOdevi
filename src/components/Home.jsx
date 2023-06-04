import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"
import Link from 'react-scroll/modules/components/Link'


const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#8e44ad]'  >

{/* container */}
<div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <p className='text-xl text-[#e74c3c]'>Hi My name is</p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#ecf0f1]'>Fatma</h1>
    <h2 className='text-4xl sm:text-7xl font-bold text-[#bdc3c7]'>I am a Software </h2>
    <p className='text-[#bdc3c7] py-4 max-w-[800px]'>Hello, I'm Fatma Karagöz, this is my graduation project. I will develop this project to advance in the frontend field.I've been able to develop my current project so much, more will come.
 You can scroll down for the things you wonder about me.

</p>
 <div>
{/*     
    <button  className='text-white group border-2 px-6 py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'> 
    
 View Work
 <span className=' group-hover:rotate-90 duration-300'>
 <HiArrowNarrowRight className='ml-3'/>
 </span> 
    </button> */}
    
    </div>
     
</div>

        </div>
  )
}
export default Home