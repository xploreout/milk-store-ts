import Image from '/images/milk.png'
import Back from './Back'
import { useContext, useEffect, useState } from 'react'
import { MilksContext } from '../context/milksContext'
import { MilksContextType, IParamsId, IMilk } from '../types'
import { useParams } from 'react-router-dom'
import Slider from './Slider'

const Detail = () => {
  const { milks } = useContext(MilksContext) as MilksContextType
  const [selectedQuantity, setSelectedQuantity] = useState<number>(10)
  const [milk, setMilk] = useState<IMilk>()

  let { id } = useParams<IParamsId>()
  
  const getFreshMilk = async () => {
    const response = await fetch(`https://localhost:7062/api/milks/${id}`)
    const data = await response.json()
    setMilk(data)
    return data
  }

  useEffect(() => {
    getFreshMilk()
  }, [])

  // const milk = milks.find((m) => m.id === id)

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
                <h5 className='text-gray-600 text-xl font-medium mb-2'>
                  {milk?.name}
                </h5>
                <p className='text-slate-500 text-base mb-4'>{milk?.type}</p>
                <p className='text-yellow-600 text-bold mb-10'>
                  {milk?.storage} liter
                </p>
                <Slider max={milk?.storage} />

                {/* <button className='bg-gray-300 w-36 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded inline-flex items-center mt-14 justify-center'>
                  <span>Order</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
