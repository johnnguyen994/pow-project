import React from 'react'
import { SpellDetailItem } from 'state/types'
import { CardContent, TextBase } from 'style/Commons'
import styled from 'styled-components'

const Wrapper = styled(CardContent)`
  margin-top: 20px;
`

const Title = styled(TextBase)`
  margin-bottom: 20px;
`

interface OverviewProps {
  item: SpellDetailItem
}

const Overview: React.FC<OverviewProps> = (props) => {
  const { item } = props
  return (
    <Wrapper>
      <Title data-testid="id-overview">
        <b>_id:</b> {item._id}
      </Title>
      <Title data-testid="index-overview">
        <b>index:</b> {item.index}
      </Title>
      <Title data-testid="name-overview">
        <b>name:</b> {item.name}
      </Title>
    </Wrapper>
  )
}

export default Overview
