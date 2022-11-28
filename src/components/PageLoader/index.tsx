import { CircularProgress } from '@mui/material'
import Page from 'components/layout/Page'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      <CircularProgress />
    </Wrapper>
  )
}

export default PageLoader
