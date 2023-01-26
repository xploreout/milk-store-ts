import React, { useState } from 'react'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex items-center w-1/2'
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
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5'
            placeholder='Search'
            required
          />
        </div>
      </form>
    </>
  )
}

export default Search
