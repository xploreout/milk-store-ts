export interface IMilk {
  id: string
  name: string
  type: string
  storage: number
}
export type IParamsId = {
  id: string
}
export type MilksContextType = {
  milks: IMilk[]
  // totals : number
}
