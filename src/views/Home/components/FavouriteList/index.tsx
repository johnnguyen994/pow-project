import React from 'react'
import { useSelector } from 'react-redux'
import { selectFavouriteData } from 'state/spell'
import styled from 'styled-components'
import ListSpellTable from '../ListTable'

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0px;
`

const FavouriteList = () => {
  const favourites = useSelector(selectFavouriteData)

  return (
    <Wrapper>
      <ListSpellTable data={favourites || []} />
    </Wrapper>
  )
}

export default FavouriteList
