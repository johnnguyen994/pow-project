import React from 'react'
import { Wrapper, Image, TextEmpty } from './styles'

const Empty = () => {
  return (
    <Wrapper>
      <Image>
        <img src="./assets/empty.png" alt="empty" />
      </Image>
      <TextEmpty data-testid="empty-text">Spell list is currently empty. Please try again later!</TextEmpty>
    </Wrapper>
  )
}

export default Empty
