import HeadTitle from 'components/HeadTitle'
import BasicTabs from 'components/Tabs/BasicTabs'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import FavouriteList from './components/FavouriteList'
import MainList from './components/MainList'

const Wrapper = styled.div`
  width: 100%;
`

const Content = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
`

function Home() {
  const tabs = useMemo(() => {
    return [
      {
        label: 'Spell list',
        content: <MainList />,
      },
      {
        label: 'Spell favourite list',
        content: <FavouriteList />,
      },
    ]
  }, [])
  return (
    <Wrapper>
      <HeadTitle title="Spell Homepage" />
      <Content>
        <BasicTabs tabs={tabs} />
      </Content>
    </Wrapper>
  )
}

export default Home
