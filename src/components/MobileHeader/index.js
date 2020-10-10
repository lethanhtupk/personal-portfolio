import React from 'react'
import avatar from '../../assets/avatar.jpg'

export const MobileHeader = () => {
  return (
    <div className='flex items-center px-3 py-2 mt-4 mobile-header bg-blue-1 rounded-2lg'>
      <button className='mr-2 menu-icon'>
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      </button>
      <img src={avatar} alt='avatar' className='object-cover w-10 h-10 rounded-full' />
      <span className='ml-2 text-2xl font-bold'>Tu Le Thanh</span>
    </div>
  )
}
