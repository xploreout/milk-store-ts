import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ISliderProps {
  max: number | undefined
}
const Slider = ({ max }: ISliderProps) => {
  const navigate = useNavigate()
  const [quantityOrdered, setQuantityOrdered] = useState<number>(1)
  const handleOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantityOrdered(Number(e.target.value))
  }

  const handleOrderClick = () => {
    navigate(`/`)

    console.log(`${quantityOrdered} liters is added to cart.`)
  }

  return (
    <>
      <div className='range-wrap'>
        <input
          name='range'
          type='range'
          min='1'
          max={max}
          defaultValue='1'
          className='w-full cursor-pointer accent-lime-500 border-none'
          onChange={handleOrder}
        />
      </div>
      <span>{quantityOrdered}</span>
      <button
        className='bg-gray-300 w-36 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded inline-flex items-center mt-14 justify-center'
        onClick={handleOrderClick}
      >
        <span>Order</span>
      </button>
    </>
  )
}

export default Slider
