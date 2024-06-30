import React from 'react'
import Header from './Component/Header.jsx'
import Hero from './Component/Hero.jsx'
import Body from './Component/Body.jsx'
import Footer from './Component/Footer.jsx'
import Inbox from './Component/Inbox.jsx'
import HeaderLuLu from './Component/HeaderLuLu.jsx'
const App = () => {
  return (
    <>
    <div className=' relative flex flex-col px-80 '>
      <Header/>
      <HeaderLuLu/>
      <div className='flex flex-col justify-center min-h-4'>
        <Hero/>
        <Body/>
      </div>
      <Inbox/>
      <Footer/>
    </div>
    </>
  )
}

export default App