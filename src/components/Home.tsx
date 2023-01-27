import React, { useContext, useEffect, useState } from 'react'
import { MilksContext } from '../context/milksContext'
import { IMilk, MilksContextType } from '../types'
import Milk from './Milk'

const Home = () => {
  const { milks } = useContext(MilksContext) as MilksContextType

  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filter, setFilter] = useState<string>('All')
  let displayMilks: IMilk[] = milks

  const milkTypes = [
    'All',
    'Almond Milk',
    'Oat Milk',
    'Almond Milk',
    'Soy Milk',
    'Walnut Milk',
    'Whole Milk',
    'Pea Milk',
    'Cashew Milk',
    'Coconut Milk',
    'Hemp Milk',
    'Macadamia Milk',
  ]

  useEffect(() => {
    getDisplayMilks()
  }, [searchQuery])

  const getDisplayMilks = () => {
    if (filter != 'All' && searchQuery == '') {
      displayMilks = milks.filter((m) =>
        m.type.toLowerCase().includes(filter.toLowerCase())
      )
      return
    }

    if (searchQuery != '') {
      displayMilks = milks.filter(
        (m) =>
          m.type.toLowerCase().includes(searchQuery) ||
          m.name.toLowerCase().includes(searchQuery)
      )
      return
    }
  }

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    if (e.target.value == 'All') {
      setSearchQuery('')
    }
    setFilter(e.target.value)
  }
  getDisplayMilks()

  return (
    <>
      <div className=' px-5 md:px-2 lg:px-5 mt-2 pb-5'>
        <div className='flex justify-between'>
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
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                }}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-5 p-2'
                placeholder='Search'
                required
              />
            </div>
          </form>
          <select
            id='underline_select'
            className='block py-2.5 px-0 w-80 text-lg font-normal text-gray-500 bg-transparent border-0 border-none border-transparent appearance-none focus:outline-none focus:outline-none focus:ring-0 focus:border-gray-200 peer'
            onChange={handleFilter}
          >
            <option key='1'>Filter</option>
            {milkTypes.map((item, index) => {
              return (
                <option key={`key${index}`} value={`${item}`}>
                  {item}
                </option>
              )
            })}
          </select>
        </div>
        <p className='text-left text-small text-gray-600 pl-5 pt-5 '>
          {displayMilks.length} products
        </p>
        <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 '>
          {displayMilks.map((item) => {
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
