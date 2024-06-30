import React from 'react'

const Inbox = () => {
  return (
    <>
     <hr className='h-1'/>
     <div className=' flex flex-col justify-center items-center px-8 py-2 space-y-4 mt-8'>
        <p className='text-3xl font-semibold'>Our freshest gear. Straight to your inbox.</p>

        <p className='text-xl font-semibold'>Be first to know about our newest products, limited-time offers, community events, and more.</p>
        <div className='flex flex-row justify-center items-center space-x-2'>

            <input type="checkbox" className='w-6 h-4 accent-slate-500' />
            <label>Women's</label>

            <input type="checkbox" className='w-6 h-4 accent-slate-500' />
            <label>Men's</label>

        </div>
        <div className='flex flex-row space-x-4 items-center'>
            <p className='font-semibold'>Enter your email address</p>
            <input className='border-solid border border-black rounded h-12 w-60' type='text'/>
            <button className='bg-gray-400 h-12 rounded text-white font-semibold w-40 '>SIGN UP</button>
        </div>
        <p className='text-xs'>We respect your privacy and won't spam you. Unsubscribe at anytime. To learn more, see our <a href='#' className='underline'>privacy policy.</a></p>
    </div>
    <hr className='h-1'/>
    </>
  )
}

export default Inbox