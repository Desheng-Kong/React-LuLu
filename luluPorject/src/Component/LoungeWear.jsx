import React from 'react'
import Card from './Card'

const LoungeWear = () => {
  return (
    <div className='flex items-center flex-col bg-purple-800'>
      <h2 className='text-3xl font-bold'>LoungeWear</h2>

      <div className='grid grid-cols-4 gap-6 min-h-[380px]'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

      <div className='grid grid-cols-4 gap-6 min-h-[380px]'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    
    </div>
  )
}


// const LoungeWear = () => {
//   return (
//     <>
//     <div className=' mt-20 flex items-center flex-col bg-purple-800'>
//       <h2 className='text-3xl font-bold'>LoungeWear</h2>
//       <div className='flex flex-col'></div>
//       <div className='flex items-center flex-row justify-between gap-4'>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//       </div>
//       <div className='flex items-center flex-row justify-between gap-4'>
//         <Card/>
//         <Card/>
//         <Card/>
//         <Card/>
//       </div>
//     </div>
//     </>
//   )
// }

export default LoungeWear