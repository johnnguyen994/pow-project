import SkeletonLoading from 'components/Loader/SkeletonLoading'
import { useSpellList } from 'hooks/useSpellList'
import React from 'react'
import styled from 'styled-components'
import ListSpellTable from '../ListTable'

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0px;
`

const MainList = () => {
  const { spellData, isLoading } = useSpellList()

  if (!spellData || isLoading) return <SkeletonLoading />

  return (
    <Wrapper>
      <ListSpellTable data={spellData?.results || []} />
    </Wrapper>
  )
}

export default MainList
