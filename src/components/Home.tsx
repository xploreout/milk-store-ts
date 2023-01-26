import { useContext, useState } from 'react'
import { MilksContext } from '../context/milksContext'
import { IMilk, MilksContextType } from '../types'
import Milk from './Milk'

const Home = () => {
  const { milks } = useContext(MilksContext) as MilksContextType

  const [searchQuery, setSearchQuery] = useState<string>('')
  let displayMilks: IMilk[] = []
  const getDisplayMilks = () => {}

  return (
    <>
      <div className=' bg-rose-100 px-2 md:px-2 lg:px-6 mt-2 pb-5'>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='flex items-center w-1/2 pt-5'
        >
          <label htmlFor='simple-search' className='sr-only'>
            Search
          </label>
          <div className='relative w-full'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'></div>
            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-5 p-2'
              placeholder='Search'
              required
            />
          </div>
        </form>
        <p className='text-left text-small text-gray-600 pl-5 pt-5 '>
          {milks.length} products
        </p>
        <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 '>
          {milks.map((item) => {
            return (
              <div className='group relative' key={`${Math.random() * 10}`}>
                <Milk milk={item} key={item.id} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
