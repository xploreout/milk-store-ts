import * as React from 'react'
import { BsChevronLeft } from 'react-icons/bs'

const Back = () => {
  return (
    <button className='bg-transparent text-gray-500 font-bold   mt-10'>
      <a
        href='/'
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <BsChevronLeft />
        <span className='pl-5'> Back</span>
      </a>
    </button>
  )
}

export default Back
