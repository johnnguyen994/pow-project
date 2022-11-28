import React from 'react'
import { CardContent, TextBase } from 'style/Commons'
import styled from 'styled-components'

export interface PropertyListType {
  label: string
  value: string | number
  testid: string
}

const Wrapper = styled(CardContent)`
  margin-top: 20px;
`

const Title = styled(TextBase)`
  margin-bottom: 20px;
`

const Label = styled(TextBase)`
  font-weight: 700;
  display: inline-block;
`

interface PropertyListProps {
  data: PropertyListType[]
}

const PropertyList: React.FC<PropertyListProps> = (props) => {
  const { data } = props
  return (
    <Wrapper>
      {data.map((value) => {
        return (
          <Title key={`index-${value.label}`} data-testid={value.testid}>
            <Label>{`${value.label}:`}</Label> {value.value}
          </Title>
        )
      })}
    </Wrapper>
  )
}

export default PropertyList
