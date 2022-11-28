/* eslint-disable react/require-default-props */
import React from 'react'
import { Heading } from 'style/Commons'
import styled from 'styled-components'

interface HeadTitleProps {
  title: string
  renderRight?: React.ReactNode
}

const Wrapper = styled.div`
  width: 100%;
  padding: 4px 20px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeadTitle: React.FC<HeadTitleProps> = (props) => {
  const { title, renderRight } = props
  return (
    <Wrapper>
      <Heading data-testid="heading-title">{title}</Heading>
      {renderRight}
    </Wrapper>
  )
}

export default HeadTitle
