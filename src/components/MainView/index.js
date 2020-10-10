import React from 'react'
import './MainView.css'

export const MainView = () => {
  return (
    <section className='flex flex-col justify-center mt-5 text-white shadow-custom rounded-2lg bg-blue-1 h-125'>
      <div className='px-5 py-4'>
        <div className='text-left info'>
          <h1 className='text-4xl font-bold leading-h1'>Hi, I'm Tu</h1>
          <p className='mt-5 text-base'>
            I'm a web develope who have experience in web development with both backend and frontend side. I always try
            my best to learn as deep as I can whatever I used to learn in order to become an expert developer.
          </p>
        </div>
        <div className='mt-5 text-base btn'>
          <button className='flex items-center px-4 py-2 rounded-full font:medium hover:shadow-custom bg-red-1 hover:bg-blue-2 view-portfolio'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
              />
            </svg>
            <span className='ml-2'>View Portfolio</span>
          </button>
          <button className='mt-2.5 px-4 py-2 border border-white rounded-full hover:text-black hover:bg-white hover:shadow-custom hire-me'>
            <i className='far fa-envelope'></i>
            <span className='ml-2 capitalize'>Hire me</span>
          </button>
        </div>
      </div>
    </section>
  )
}
