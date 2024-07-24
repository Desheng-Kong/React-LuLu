import React from 'react'
import Header from './Component/Header.jsx'
import Hero from './Component/Hero.jsx'
import Body from './Component/Body.jsx'
import Footer from './Component/Footer.jsx'
import Inbox from './Component/Inbox.jsx'
import HeaderLuLu from './Component/HeaderLuLu.jsx'
const App = () => {
  return (
    <div className=''>
      <Header/>
      <HeaderLuLu></HeaderLuLu>
      <Hero></Hero>
      <Body></Body>
      <Inbox/>
      <hr className='h-1'></hr>
      <Footer></Footer>
    </div>
  )
}

export default App