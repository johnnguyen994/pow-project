import AxiosInstance from 'utils/instance'
import { useQuery } from '@tanstack/react-query'
import { SpellListResponse } from 'state/types'

const getListSpell = async () => {
  const result = await AxiosInstance.get('/spells')

  const { data } = result
  return data
}

export const useSpellList = () => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['spells'], queryFn: getListSpell })

  const generateData = (array: SpellListResponse | undefined) => {
    let dataArray = []
    if (!array)
      return {
        count: 0,
        results: [],
      }
    dataArray = array.results
      ? array.results.map((value, index) => {
          return {
            id: index + 1,
            ...value,
          }
        })
      : []
    return {
      count: array?.count || 0,
      results: dataArray,
    }
  }

  return { spellData: generateData(data), isLoading, isError }
}
