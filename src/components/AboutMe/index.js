import React from 'react'
import avatar from '../../assets/avatar.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import './AboutMe.css'

export const AboutMe = () => {
  return (
    <section className='flex flex-col mt-5 bg-white shadow-custom rounded-2lg px-10 pt-16.25 pb-15' id='about'>
      <div className='ml-2.5'>
        <h3 className='text-2xl font-bold text-black capitalize section-title'>About me</h3>
      </div>
      <div className='mt-17.5'>
        <div className='avatar'>
          <img src={avatar2} alt='avatar' className='object-cover w-37.5 h-37.5 rounded-full' />
        </div>
        <div className='information'>
          <div className='introduce'>
            <h1 className='mt-2 text-2xl font-bold text-black'>Hello,</h1>
            <p className='mt-6.25 text-gray-2'>
              I am Tu Le Thanh,a fullstack web developer from Hanoi, Vietnam. I have been working with both backend and
              frontend and familiar with many technologies such as Django, Flask and Nodejs in backend and React or Vue
              for frontend. I also strong at logical thinking and good at solving problems.
            </p>
          </div>

          <div className='mt-4 basic-info'>
            <p className='mb-2 text-gray-2'>
              Name: <span className='text-black'>Tu Le Thanh</span>
            </p>
            <p className='mb-2 text-gray-2'>
              Location: <span className='text-black'>Hanoi, Vietnam</span>
            </p>
            <p className='mb-2 text-gray-2'>
              Birthday: <span className='text-black'>15 May, 1998</span>
            </p>
            <p className='text-gray-2'>
              Email: <span className='text-black'>lethanhtu1551998@gmail.com</span>
            </p>
          </div>

          <div className='mt-6 button'>
            <button className='flex items-center px-4 py-2 rounded-full bg-red-1'>
              <svg
                className='w-4 h-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6h.1a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
                />
              </svg>
              <span className='ml-2'>Download CV</span>
            </button>
            <button className='flex items-center px-4 py-2 mt-2 rounded-full bg-blue-2'>
              <i className='far fa-envelope'></i>
              <span className='ml-2 capitalize'>Hire me</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
