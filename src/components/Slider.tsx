import React, { useState } from 'react'

interface ISliderProps {
  max: number | undefined
}
const Slider = ({ max }: ISliderProps) => {
  const [quantity, setQuantity] = useState<number>(1)
  const handleOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value))
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
          className='w-full cursor-pointer accent-lime-500 '
          onChange={handleOrder}
        />
      </div>
      <span>{quantity}</span>
    </>
  )
}

export default Slider
