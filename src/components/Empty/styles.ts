import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px auto;
`
const Image = styled.div`
  width: 240px;
  height: 160px;
  img {
    width: 100%;
    height: 100%;
  }
`

const TextEmpty = styled.p`
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-top: 28px;
`

export { Wrapper, Image, TextEmpty }
