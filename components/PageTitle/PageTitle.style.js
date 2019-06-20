import styled from 'styled-components'
import { breakpoint } from '../Layout'

export const TextWrapper = styled.div`
  display: block;
  text-align: center;
  padding-top: 20vh;

  ${breakpoint.mobile} {
    padding: 16px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  padding-bottom: 24px;
  color: ${props => props.theme.toryBlue};

  ${breakpoint.mobile} {
    padding: 24px;
  }
`

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: normal;

  ${breakpoint.mobile} {
    padding: 16px;
  }
`