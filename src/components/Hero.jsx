import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
            <p>IT'S TIME TO GET</p>
            <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Nadeem
                <span className='text-blue-400'>normous</span>
            </h1>

        </div>
        <p className='text-sm md:text-base font-light'>I hereby acknowledge the possibility of achieving <span className='text-blue-400 font-medium'>incredible, unstoppable growth</span> and accept all associated risks of transforming into a local <span className='text-blue-400 font-medium'>colossus</span>, stricken with a profound case of mirror admiration syndrome, and encountering logistical challenges like doorway navigation.</p>

        <Button func={() => {
          window.location.href = '#generate'
        }} text={"Accept & Begin"}></Button>
    </div>
  )
}

export default Hero