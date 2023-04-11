import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src='/images/green-tree-one.jpg' alt='background'
            className='w-full h-full object-cover brightness-50'
        />
        <div className='max-w-[1140px] m-auto bg'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] flex flex-col text-[var(--white)] p-4'>
                <h1 className='drop-shadow font-bold text-4xl'>Prepare Your Memorial Plan</h1>
                <h2 className='drop-shadow text-4xl py-4 italic'>With Libing Things!</h2>
                <p className='drop-shadow'>
                It is our commitment to provide accessible, affordable, and 
                quality funeral plans that are delivered with compassion and 
                respect towards the families we serve and the environment.
                </p>
            </div>
        </div>
        <div className='absolute h-20 mt-[-5rem] bg-gradient-to-t from-[var(--black)] to-transparent z-10 w-full flex justify-center'>
          <div className='h-full'></div>
        </div>
    </div>
  )
}

export default Hero