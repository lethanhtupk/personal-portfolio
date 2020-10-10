import React from 'react'
import { AboutMe } from '../components/AboutMe'
import { MainView } from '../components/MainView'
import { SideBar } from '../components/SideBar'
import { MobileHeader } from '../components/MobileHeader'
import './HomePage.css'

export const HomePage = () => {
  return (
    <div className='wrap-content'>
      <header className='fixed sidebar'>
        <SideBar />
      </header>
      <main className='main-content'>
        <MobileHeader />
        <MainView />
        <AboutMe />
      </main>
    </div>
  )
}
