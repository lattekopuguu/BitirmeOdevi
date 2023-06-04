import React from 'react'

import Crypto from '../assets/s.png';
import Weather from '../assets/h.png';
import Chat from '../assets/cht.png';
import Lea from '../assets/lea.png';
import Kod from '../assets/aas.png';

import BreakingB from '../assets/ekran.png';
const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#2c3e50]'>
   <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
       <div className='pb-8'>
           <p className='text-4xl font-bold inline border-b-4  text-gray-300 border-pink-600'>Projects</p>
           <p className='py-6'>Check Out  some  of my projects</p>
       </div>
         {/* container */}
       <div 
       className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
           {/* grid item */}
           <div style={{backgroundImage:`url(${Crypto})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex  justify-center items-center mx-auto content-div'>
               {/* hover */}
               <div className='opacity-0 group-hover:opacity-100'> 
                   <span className='text-2xl font-bold text-white  tracking-wider'>
                  React JS Projects
                   </span>
                   <div className='pt-8 text-center'>
                   <a href="https://cryptotracker-9766sk64f-ebraraltunkaynak.vercel.app/" target="blank">
                       <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Demo</button>
                   </a>
                   <a href="https://github.com/ebraraltunkaynak/cryptotracker" target="blank">
                       <button className= 'text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Code</button>
                   </a>
                   </div>
               </div>
           </div>
           <div style={{backgroundImage:`url(${BreakingB})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex  justify-center items-center mx-auto content-div'>
               {/* hover */}
               <div className='opacity-0 group-hover:opacity-100'> 
                   <span className='text-2xl font-bold text-white  tracking-wider'>
                  React JS Projects
                   </span>
                   <div className='pt-8 text-center'>
                   <a href="https://frosty-minsky-3cea76.netlify.app/" target="blank">
                       <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Demo</button>
                   </a>
                   <a href="https://github.com/ebraraltunkaynak/bad-breaking" target="blank">
                       <button className= 'text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Code</button>
                   </a>
                   </div>
               </div>
           </div>
           <div style={{backgroundImage:`url(${Weather})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex  justify-center items-center mx-auto content-div'>
               {/* hover */}
               <div className='opacity-0 group-hover:opacity-100'> 
                   <span className='text-2xl font-bold text-white  tracking-wider'>
                  React JS Projects
                   </span>
                   <div className='pt-8 text-center'>
                   <a href="/">
                       <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Demo</button>
                   </a>
                   <a href="https://github.com/ebraraltunkaynak/weatherapp" target="blank">
                       <button className= 'text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Code</button>
                   </a>
                   </div>
               </div>
           </div>
           <div style={{backgroundImage:`url(${Chat})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex  justify-center items-center mx-auto content-div'>
               {/* hover */}
               <div className='opacity-0 group-hover:opacity-100'> 
                   <span className='text-2xl font-bold text-white  tracking-wider'>
                  React JS Projects
                   </span>
                   <div className='pt-8 text-center'>
                   <a href="/">
                       <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Demo</button>
                   </a>
                   <a href="https://github.com/ebraraltunkaynak/chatapp" target="blank">
                       <button className= 'text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Code</button>
                   </a>
                   </div>
               </div>
           </div>
           <div style={{backgroundImage:`url(${Lea})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex  justify-center items-center mx-auto content-div'>
               {/* hover */}
               <div className='opacity-0 group-hover:opacity-100'> 
                   <span className='text-2xl font-bold text-white  tracking-wider'>
                  React JS Projects
                   </span>
                   <div className='pt-8 text-center'>
                   <a href="https://medium.com/@ebraraltunkynk/react-leaflet-nas%C4%B1l-kullan%C4%B1l%C4%B1r-c7352a5a3e50" target="blank">
                       <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Demo</button>
                   </a>
                   <a href="https://github.com/ebraraltunkaynak/map" target="blank">
                       <button className= 'text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Code</button>
                   </a>
                   </div>
               </div>
           </div>
           <div style={{backgroundImage:`url(${Kod})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex  justify-center items-center mx-auto content-div'>
               {/* hover */}
               <div className='opacity-0 group-hover:opacity-100'> 
                   <span className='text-2xl font-bold text-white  tracking-wider'>
                  React JS Projects
                   </span>
                   <div className='pt-8 text-center'>
                   <a href="https://glowing-druid-0ecf0c.netlify.app/" target="blank">
                       <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Demo</button>
                   </a>
                   <a href="https://github.com/ebraraltunkaynak/moviesapp" target="blank">
                       <button className= 'text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg'>Code</button>
                   </a>
                   </div>
               </div>
           </div>
       </div>
   </div>
    </div>
  )
}

export default Work