/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textBase};
`
export const CardContent = styled.div`
  width: 100%;
  padding: 24px;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`

export const TextBase = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.textBase};
`
