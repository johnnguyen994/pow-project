import { Skeleton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
`

const SkeletonLoading = () => {
  return (
    <Wrapper>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Wrapper>
  )
}

export default SkeletonLoading
