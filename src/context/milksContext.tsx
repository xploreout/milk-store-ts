import { useEffect, useState, createContext, useMemo } from 'react'
import { IMilk, MilksContextType } from '../types'



export const MilksContext = createContext<MilksContextType | null>(null)

const MilksProvider = ({ children }: any) => {
  const [milks, setMilks] = useState<IMilk[]>([])

  //later
  const value = useMemo(() => ({ milks, setMilks }), [milks, setMilks])

  const getAllMilk = async () => {
    const response = await fetch('https://localhost:7062/api/milks')
    const results = await response.json()
    setMilks(results)
  }
  useEffect(() => {
    getAllMilk()

    console.log(milks)
  }, [])

  return (
    <MilksContext.Provider value={{ milks }}>{children}</MilksContext.Provider>
  )
}

export default MilksProvider
