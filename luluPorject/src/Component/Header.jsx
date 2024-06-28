import React from 'react'
import HeaderLuLu from './HeaderLuLu';


const Header = () => {
    const pinUrl = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMTggMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+cGluPC90aXRsZT4KICAgIDxnIGlkPSJwaW4iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik04LjkwMzIyNTgxLDYuOTY3NzQxOTQgQzcuODM2Mzg3MSw2Ljk2Nzc0MTk0IDYuOTY3NzQxOTQsNy44MzYzODcxIDYuOTY3NzQxOTQsOC45MDMyMjU4MSBDNi45Njc3NDE5NCw5Ljk3MDA2NDUyIDcuODM2Mzg3MSwxMC44Mzg3MDk3IDguOTAzMjI1ODEsMTAuODM4NzA5NyBDOS45NzAwNjQ1MiwxMC44Mzg3MDk3IDEwLjgzODcwOTcsOS45NzAwNjQ1MiAxMC44Mzg3MDk3LDguOTAzMjI1ODEgQzEwLjgzODcwOTcsNy44MzYzODcxIDkuOTcwMDY0NTIsNi45Njc3NDE5NCA4LjkwMzIyNTgxLDYuOTY3NzQxOTQgTTguOTAzMjI1ODEsMTMuMTYxMjkwMyBDNi41NTQzMjI1OCwxMy4xNjEyOTAzIDQuNjQ1MTYxMjksMTEuMjUyMTI5IDQuNjQ1MTYxMjksOC45MDMyMjU4MSBDNC42NDUxNjEyOSw2LjU1NDMyMjU4IDYuNTU0MzIyNTgsNC42NDUxNjEyOSA4LjkwMzIyNTgxLDQuNjQ1MTYxMjkgQzExLjI1MjEyOSw0LjY0NTE2MTI5IDEzLjE2MTI5MDMsNi41NTQzMjI1OCAxMy4xNjEyOTAzLDguOTAzMjI1ODEgQzEzLjE2MTI5MDMsMTEuMjUyMTI5IDExLjI1MjEyOSwxMy4xNjEyOTAzIDguOTAzMjI1ODEsMTMuMTYxMjkwMyBNOC45MDMyMjU4MSwyLjMyMjU4MDY1IEM1LjI3NTM1NDg0LDIuMzIyNTgwNjUgMi4zMjI1ODA2NSw1LjEyODI1ODA2IDIuMzIyNTgwNjUsOC41NzQ5Njc3NCBDMi4zMjI1ODA2NSwxMS44OTc4MDY1IDQuMTUyNzc0MTksMTQuMTE5NzQxOSA1LjkyNDEyOTAzLDE2LjI2ODkwMzIgTDYuNDM5NzQxOTQsMTYuODkxMzU0OCBDNy4zMDUyOTAzMiwxNy45MzAzMjI2IDguMTg5NDE5MzUsMTguOTkyNTE2MSA4LjkwMzIyNTgxLDIwLjE0OTE2MTMgQzkuNjE3MDMyMjYsMTguOTkyNTE2MSAxMC41MDExNjEzLDE3LjkzMDMyMjYgMTEuMzY2NzA5NywxNi44OTEzNTQ4IEwxMS44ODIzMjI2LDE2LjI3MDQ1MTYgQzEzLjY1MzY3NzQsMTQuMTE5NzQxOSAxNS40ODM4NzEsMTEuODk3ODA2NSAxNS40ODM4NzEsOC41NzQ5Njc3NCBDMTUuNDgzODcxLDUuMTI4MjU4MDYgMTIuNTMxMDk2OCwyLjMyMjU4MDY1IDguOTAzMjI1ODEsMi4zMjI1ODA2NSBNOC45MDMyMjU4MSwyNCBDOC40LDI0IDcuOTU0MDY0NTIsMjMuNjc2Mzg3MSA3Ljc5OTIyNTgxLDIzLjE5NjM4NzEgQzcuMjQzMzU0ODQsMjEuNDgzODcxIDUuOTg2MDY0NTIsMTkuOTc0MTkzNSA0LjY1NDQ1MTYxLDE4LjM3NzgwNjUgTDQuMTMxMDk2NzcsMTcuNzQ2MDY0NSBDMi4yOTAwNjQ1MiwxNS41MTE3NDE5IDAsMTIuNzMwODM4NyAwLDguNTc0OTY3NzQgQzAsMy44NDYxOTM1NSAzLjk5NDgzODcxLDAgOC45MDMyMjU4MSwwIEMxMy44MTE2MTI5LDAgMTcuODA2NDUxNiwzLjg0NjE5MzU1IDE3LjgwNjQ1MTYsOC41NzQ5Njc3NCBDMTcuODA2NDUxNiwxMi43MzA4Mzg3IDE1LjUxNjM4NzEsMTUuNTExNzQxOSAxMy42NzUzNTQ4LDE3Ljc0NjA2NDUgTDEzLjE1MiwxOC4zNzc4MDY1IEMxMS44MjAzODcxLDE5Ljk3NDE5MzUgMTAuNTYzMDk2OCwyMS40ODM4NzEgMTAuMDA3MjI1OCwyMy4xOTYzODcxIEM5Ljg1MjM4NzEsMjMuNjc2Mzg3MSA5LjQwNjQ1MTYxLDI0IDguOTAzMjI1ODEsMjQiIGlkPSJGaWxsLTE1OCIgZmlsbD0iIzJEMjcyQSI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=';
    
  return (

    <>
    <div className='flex flex-row justify-between items-center
                     bg-gray-100 h-20 '>
        {/* THE LEFT PART*/}
        <div className='flex-initial text-xs ml-5'>
        Enjoy free express shipping and free returns. Learn More.
        </div>
        {/*THE RIGHT PART*/}
        <div className='flex-initial mr-5'>
            <div className='flex justify-between items-center'>
                <nav >
                    <ul className='flex space-x-4'>
                        <li className='relative group'>
                            <a href="#" className="text-black text-xs">Track Order</a>
                            <span className="block w-full h-0.5 absolute bg-black bg-opacity-0 group-hover:bg-opacity-100"> </span>
                        </li>
                        <li className='relative group'>
                            <a href="#" className="text-black text-xs">Gift Cards</a>
                            <span className="block w-full h-0.5 absolute bg-black bg-opacity-0 group-hover:bg-opacity-100"> </span>
                        </li>
                        <li className='relative group'>
                            <a href="#" className="text-black text-xs">Email Signup</a>
                            <span className="block w-full h-0.5 absolute bg-black bg-opacity-0 group-hover:bg-opacity-100"> </span>
                        </li>
                        <li className='relative group'>
                            <a href="#" className="text-black text-xs">Stores</a>
                            <span className="block w-full h-0.5 absolute bg-black bg-opacity-0 group-hover:bg-opacity-100"> </span>
                        </li>
                    </ul>
                </nav>
                
                <div className='flex-initial m-2 text-xs'>
                    <div className='flex items-center'>
                        <img className='w-4 h-4 'src={pinUrl}/>
                        <p className='m-1 hover:cursor-pointer'>Australia (AUD) &#x25B2; </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <HeaderLuLu/>
    </>
  )
}

export default Header