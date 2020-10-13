import React from 'react'
import { AboutMe } from '../components/AboutMe'
import { MainView } from '../components/MainView'
import { SideBar } from '../components/SideBar'
import { MobileHeader } from '../components/MobileHeader'
import './HomePage.css'
import { useState } from 'react'

export const HomePage = () => {
  const [isOpen, setIsOpen] = useState(null)
  const toggle = () => {
    if (isOpen === null) {
      setIsOpen(true)
    } else {
      setIsOpen(!isOpen)
    }
  }
  return (
    <div className='wrap-content'>
      <header className={`${isOpen === null ? 'sidebar' : isOpen === true ? 'sidebar-show' : 'sidebar-hidden'} fixed`}>
        <SideBar />
      </header>
      <main
        className={`${
          isOpen === null ? 'main-content' : isOpen === true ? 'main-content-hidden' : 'main-content-show'
        }`}
      >
        <MobileHeader isOpen={isOpen} toggle={toggle} />
        <MainView />
        <AboutMe />
      </main>
    </div>
  )
}
