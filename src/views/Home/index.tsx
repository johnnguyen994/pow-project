import React from 'react'
import HeadTitle from 'components/HeadTitle'
import BasicTabs from 'components/Tabs/BasicTabs'
import { useTabSpell } from 'hooks/useTabSpell'
import styled from 'styled-components'

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
  const { tabHomepage } = useTabSpell()
  return (
    <Wrapper>
      <HeadTitle title="Spell Homepage" />
      <Content>
        <BasicTabs tabs={tabHomepage} />
      </Content>
    </Wrapper>
  )
}

export default Home
