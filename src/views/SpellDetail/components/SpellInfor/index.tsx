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

interface SpellInforProps {
  item: SpellDetailItem
}

const SpellInfor: React.FC<SpellInforProps> = (props) => {
  const { item } = props
  return (
    <Wrapper>
      <Title data-testid="range-detail">
        <b>Range:</b> {item.range}
      </Title>
      <Title data-testid="ritual-detail">
        <b>Ritual:</b> {item.ritual}
      </Title>
      <Title data-testid="duration-detail">
        <b>Duration:</b> {item.duration}
      </Title>
      <Title data-testid="concentration-detail">
        <b>Concentration:</b> {item.concentration}
      </Title>
      <Title data-testid="ct-detail">
        <b>Casting time:</b> {item.casting_time}
      </Title>
      <Title data-testid="level-detail">
        <b>Level:</b> {item.level}
      </Title>
    </Wrapper>
  )
}

export default SpellInfor
