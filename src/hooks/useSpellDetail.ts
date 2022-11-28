import AxiosInstance from 'utils/instance'
import { useQuery } from '@tanstack/react-query'

const getSpellDetail = async (index: string) => {
  console.log('🚀 ~ file: useSpellDetail.ts ~ line 6 ~ getListSpell ~ index', index)
  const result = await AxiosInstance.get(`/spells/${index}`)

  const { data } = result
  return data
}

export const useSpellDetail = (index: string) => {
  const { data, isLoading, isError } = useQuery({ queryKey: ['spell-detail'], queryFn: () => getSpellDetail(index) })

  return { spellDetail: data, isLoading, isError }
}
