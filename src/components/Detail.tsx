import Image from '/images/milk.png'
import Back from './Back'
import { useContext, useState } from 'react'
import { MilksContext } from '../context/milksContext'
import { MilksContextType, IParamsId } from '../types'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { milks } = useContext(MilksContext) as MilksContextType
  const [selectedQuantity, setSelectedQuantity] = useState<number>(10)
  {
    /* const { id } = useParams<IParamsId>()
    const product = products.find((product) => product.id === id)
    const [styleLeftForSliderLabel, setStyleLeftForSliderLabel] = useState<any>(
        { left: '25%' }
    )
    const handleInputQuantityChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setQuantityToOrder(Number(event.target.value))
        let newLeft: number =
            ((Number(event.target.value) - 1) * 100) / (200 - 1)
        let newPosition: number = 10 - newLeft * 0.2
        setStyleLeftForSliderLabel({
            left: `calc(${newLeft}% + (${newPosition}px))`,
        })
    } */
  }

  return (
    <div className='container mx-auto'>
      <Back />
      <div
        className='flex justify-center items-center '
        style={{ height: '70vh' }}
      >
        <div className='group relative bg-white rounded-lg'>
          <div className='w-full flex justify-center'>
            <div className='flex flex-col md:flex-row rounded-lg bg-transparent shadow-lg'>
              <img
                className='h-96 md:h-auto object-cover w-96 p-20 bg-white rounded-t-lg rounded-l-lg'
                src={`${Image}`}
                alt='Detail Milk'
              />
              <div className='p-6 w-96 flex flex-col justify-start ml-8'>
                <h5 className='text-gray-900 text-xl font-medium mb-2'>
                  {milks[0]?.name}
                </h5>
                <p className='text-slate-500 text-base mb-4'>
                  {milks[0]?.type}
                </p>
                <p className='text-yellow-600 text-bold mb-10'>
                  {milks[0]?.storage} liter
                </p>

                <div className='range-wrap'>
                  <input
                    name='range'
                    type='range'
                    defaultValue='50'
                    min='1'
                    max='200'
                    step='1'
                    className='w-full h-1 mb-6 bg-white rounded-lg appearance cursor-pointer range-sm accent-lime-500'
                    // onChange={handleInputQuantityChange}
                  />
                  <div
                    className='range-value'
                    id='rangeV'
                    // style={styleLeftForSliderLabel}
                  >
                    <span>{selectedQuantity}</span>
                  </div>
                </div>
                <button className='bg-gray-300 w-36 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded inline-flex items-center mt-14 justify-center'>
                  <span>Order</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
