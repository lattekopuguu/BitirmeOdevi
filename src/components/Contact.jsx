import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className=' w-full h-screen bg-[#2c3e50] flex justify-center items-center p-4'>
        <form method="POST" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold  inline border-b-4 border-pink-600 text-gray-300'>Contact Me</p>
                 <p  className='text-gray-300 py-4'> Submit form or  send me email </p>
            </div>
            <input className='bg-[#d5dcf5] p-2' type="text" required placeholder="Name" name="name" />
            <input  className="my-4 p-2 bg-[#d5dcf5]" type="email" required placeholder="..@gmail.com" name="email " />
            <textarea className='bg-[#d5dcf5] p-2' name="message"  required rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        </form>
        
        </div>
  )
}

export default Contact