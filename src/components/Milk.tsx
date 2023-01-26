import * as React from 'react'
import Image from '/images/milk.png'
import { IMilk } from '../types'

type Props = {
  milk: IMilk
}

const Milk: React.FC<Props> = ({ milk }) => {
  
  return (
    <div className='w-full w-78 max-w-sm bg-white border rounded-lg shadow'>
      <div
        className='rounded-t-lg '
        style={{ backgroundColor: 'rgb(243 244 246)' }}
      >
        <a href={`/${milk.id}`}>
          <img
            className='p-6 ml-10'
            src={`${Image}`}
            alt='milk'
            width='200px'
            height='200px'
          />
        </a>
      </div>
      <div className='px-5 pb-3 mt-5'>
        <h5 className='text-left font-sans tracking-normal text-gray-700'>
          {milk.name}
        </h5>
        <div className='flex items-center justify-between mt-4'>
          <span className=' text-md text-slate-500'>{milk.type}</span>
          <span className=' text-sm text-slate-400'>{milk.storage} Liter</span>
        </div>
      </div>
    </div>
  )
}

export default Milk
