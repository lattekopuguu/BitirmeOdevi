import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-[#2c3e50] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4  border-pink-600  '>About</p>
            </div>
            <div>

            </div>
            </div>
            <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>Welcome to my page. </p>
                </div>
                <div>
                    <p>Hello, I'm Fatma Karaöz, 23 years old, from Cappadocia. I am studying computer engineering at Mersin University, my last year. I want to improve myself in the frontend field. I am also interested in game development with unity. My hobbies include playing the drums, learning Norwegian, kneading raw meatballs and fitness. My biggest dream is to get off work and take the stage with my band and travel the world.
</p>
                </div>
            </div>
        </div>
        </div>
    
  )
}

export default About