import * as React from 'react'
import Image from '/images/milk.png'
import { IMilk } from '../types'

type Props = {
  milk: IMilk
}

const Milk: React.FC<Props> = ({ milk }) => {
  const handleClick = () => {
    console.log('want to order')
  }

  return (
    <div className='w-full w-78 max-w-sm bg-white border rounded-lg shadow'>
      <div
        className='rounded-t-lg flex justify-center '
        style={{ backgroundColor: 'rgb(243 244 246)' }}
      >
        <img
          className='p-6 ml-5'
          src={`${Image}`}
          alt='milk'
          width='200px'
          height='200px'
        />
      </div>
      <a href={`/${milk.id}`}>
      <div className='px-5 pb-3 mt-5' id='content ' onClick={handleClick}>
        <h5 className='text-left font-sans tracking-normal text-gray-700'>
          {milk.name}
        </h5>
        <div className='flex items-center justify-between mt-4'>
          <span className=' text-md text-slate-500'>{milk.type}</span>
          <span className=' text-sm text-slate-400'>{milk.storage} Liter</span>
        </div>
      </div>
      </a>
    </div>
  )
}

export default Milk
