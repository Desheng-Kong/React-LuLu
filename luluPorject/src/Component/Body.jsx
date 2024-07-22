import React from 'react'
import LoungeWear from './LoungeWear'
import BigCardSection from './BigCardSection.jsx'
import Inbox from './Inbox.jsx'
import MidSection from './MidSection.jsx'

const Body = () => {
  return (
    <div className='max-w-full m-auto grid grid-cols-1 gap-[10px]'>
      <LoungeWear/>
      <BigCardSection/>
      <MidSection/>
      <LoungeWear/>
      <BigCardSection/>
    </div>
  )
}

export default Body