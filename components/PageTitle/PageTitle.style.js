import styled from 'styled-components'

export const TextWrapper = styled.div`
  display: block;
  text-align: center;
  padding-top: 20vh;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 24px;
  color: ${props => props.theme.toryBlue};
`

export const Subtitle = styled.h1`
  font-size: 18px;
  font-weight: normal;
`