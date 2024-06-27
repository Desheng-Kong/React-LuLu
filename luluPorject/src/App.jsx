import React from 'react'
import Header from './Component/Header.jsx'
import Hero from './Component/Hero.jsx'
import Body from './Component/Body.jsx'
const App = () => {
  return (
    <>
    <div className='flex flex-col justify-center min-h-4 p-5'>
    <Header/>
    <Hero/>
    <Body/>
    </div>
    </>
  )
}

export default App