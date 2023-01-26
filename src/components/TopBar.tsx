import * as React from 'react'

const TopBar = () => {
  return (
    <div className='bg-white pt-2 pb-1' style={{ maxWidth: '1800px' }}>
      <a href={`/`}>
        <h1
          className=' text-5xl font-bold mt-0 mb-6'
          style={{ color: '#D38AA3' }}
        >
          The Milk Store
        </h1>
      </a>
    </div>
  )
}

export default TopBar
