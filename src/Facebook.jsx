import React from 'react'
import facebookimg from './facebook.svg'
const Facebook = () => {
  return (
    <div className='  '>
    <div className="  margin flex mx-auto items-center justify-center ">
        <div className="left w-1/3 mx-14">
            <img src={facebookimg} className="w-80" alt="" />
            <p className='text-3xl mx-6 '>faceboo help you connect and share with the people in your life</p>
        </div>
        <div className="right flex flex-col bg-white p-8 rounded-xl w-1/4 text-lg relative">
<input className='px-4 h-12 my-2  border border-1 border-gray-200 rounded-lg  outline-blue-600'  type="text" placeholder='email or phone nummber' />
<input className='px-4 h-12 my-2  border border-1 border-gray-200 rounded-lg  outline-blue-600'  type="password" placeholder='password' />
<button className='border border-1 border-rounded bg-blue-600 my-2 py-3 rounded-md font-bold text-white '  >Submit</button>
<span className='text-blue-600 text-center text-sm my-2 cursor-pointer '>forgotten password??</span>
<hr className='my-2' />
<button className='border border-1 border-rounded w-fit bg-green-600 my-2 py-3 px-4 mx-auto rounded-md font-bold text-white '  >Create New Account</button>
<span className='absolute -bottom-10 text-sm '><span className="font-bold">
  Create a page</span> for a celebrity ,brand and business</span>
        </div>
    </div>
  
    
    </div>
  )
}

export default Facebook