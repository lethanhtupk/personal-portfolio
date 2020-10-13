import React, { useState } from 'react'
import avatar from '../../assets/avatar.jpg'
import './SideBar.css'

export const SideBar = ({ closeSideBar }) => {
  const [currentItem, setCurrentItem] = useState('home')
  const onClickChangeItem = (e) => {
    setCurrentItem(e.target.name)
  }
  return (
    <section className='shadow-2xl flex flex-col justify-between text-white rounded-2lg bg-blue-1 w-60.625 h-155 p-7.5 sidebar-content'>
      <div className='close-icon' onClick={closeSideBar}>
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
            d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
      </div>
      <div className='avatar'>
        <img src={avatar} alt='anh dai dien' className='object-cover rounded-full w-18 h-18' />
        <div className='mt-4 name'>
          <p className='text-3xl font-bold '>
            Tu Le Thanh
            <span className='dot'></span>
          </p>
          <p className='text-xs uppercase'>Web developer</p>
        </div>
      </div>

      <div className='navigation'>
        <div
          className={`flex items-center home py-2 ${
            currentItem === 'home' ? 'current-item' : 'not-current-item'
          } relative`}
        >
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
              d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
            />
          </svg>
          <a href='/#' className='pl-5 text-sm' name='home' onClick={onClickChangeItem}>
            Home
          </a>
        </div>
        <div
          className={`flex items-center home py-2 ${
            currentItem === 'about' ? 'current-item' : 'not-current-item'
          } relative`}
        >
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
              d='M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z'
            />
          </svg>
          <a href='#about' className='pl-5 text-sm' name='about' onClick={onClickChangeItem}>
            About me
          </a>
        </div>
        <div
          className={`flex items-center home py-2 ${
            currentItem === 'skills' ? 'current-item' : 'not-current-item'
          } relative`}
        >
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
              d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
            />
          </svg>
          <a href='/#' className='pl-5 text-sm' name='skills' onClick={onClickChangeItem}>
            Skills
          </a>
        </div>
        <div
          className={`flex items-center home py-2 ${
            currentItem === 'experience' ? 'current-item' : 'not-current-item'
          } relative`}
        >
          <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M12 14l9-5-9-5-9 5 9 5z' />
            <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
            />
          </svg>
          <a href='/#' className='pl-5 text-sm' name='experience' onClick={onClickChangeItem}>
            Work experience
          </a>
        </div>
        <div
          className={`flex items-center home py-2 ${
            currentItem === 'works' ? 'current-item' : 'not-current-item'
          } relative`}
        >
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
              d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
            />
          </svg>
          <a href='/#' className='pl-5 text-sm' name='works' onClick={onClickChangeItem}>
            My works
          </a>
        </div>
        <div
          className={`flex items-center home py-2 ${
            currentItem === 'blog' ? 'current-item' : 'not-current-item'
          } relative`}
        >
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
              d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
            ></path>
          </svg>
          <a href='/#' className='pl-5 text-sm' name='blog' onClick={onClickChangeItem}>
            Blog
          </a>
        </div>
        <div
          className={`flex items-center home py-2 ${
            currentItem === 'contact' ? 'current-item' : 'not-current-item'
          } relative`}
        >
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
              d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
            />
          </svg>
          <a href='/#' className='pl-5 text-sm' name='contact' onClick={onClickChangeItem}>
            Contact
          </a>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex'>
          <div className='flex items-center justify-center w-8 h-8 rounded-full cursor-pointer facebook bg-red-1 hover:bg-white hover:text-red-1'>
            <i className='fab fa-facebook-f'></i>
          </div>
          <div className='flex items-center justify-center w-8 h-8 ml-2 rounded-full cursor-pointer twitter bg-red-1 hover:bg-white hover:text-red-1'>
            <i className='fab fa-twitter'></i>
          </div>
          <div className='flex items-center justify-center w-8 h-8 ml-2 rounded-full cursor-pointer instagram bg-red-1 hover:bg-white hover:text-red-1'>
            <i className='fab fa-instagram'></i>
          </div>
          <div className='flex items-center justify-center w-8 h-8 ml-2 rounded-full cursor-pointer linked bg-red-1 hover:bg-white hover:text-red-1'>
            <i className='fab fa-linkedin-in'></i>
          </div>
          <div className='flex items-center justify-center w-8 h-8 ml-2 rounded-full cursor-pointer linked bg-red-1 hover:bg-white hover:text-red-1'>
            <i className='fab fa-youtube'></i>
          </div>
        </div>
        <div className='mt-4'>
          <span className='text-sm font-light '> © 2020 TuLT Theme </span>
        </div>
      </div>
    </section>
  )
}
