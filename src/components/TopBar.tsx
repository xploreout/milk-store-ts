import * as React from 'react'

const TopBar = () => {
  const storeName = 'THE MILK STORE'
  return (
    <div className='bg-white p-2 pt-3'>
      <h1
        className=' text-3xl font-medium  mt-0 mb-4'
        style={{ color: '#D38AA3' }}
      >
        {storeName}
      </h1>
    </div>
  )
}

export default TopBar
