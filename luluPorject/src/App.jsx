import React from 'react'
import Header from './Component/Header.jsx'
import Hero from './Component/Hero.jsx'
import Body from './Component/Body.jsx'
import Footer from './Component/Footer.jsx'
const App = () => {
  return (
    <>
    <div>
      <Header/>
      <div className='flex flex-col justify-center min-h-4 p-5'>
        <Hero/>
        <Body/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App