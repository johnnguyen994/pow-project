import Page from 'components/layout/Page'
import React from 'react'
import { Outlet } from 'react-router-dom'
import GlobalStyle from 'style/Global'
import styled from 'styled-components'

const Wrapper = styled(Page)`
  width: 100%;
`

const PageLayout: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Outlet />
    </Wrapper>
  )
}

export default PageLayout
