import styled from 'styled-components'
import { breakpoint } from '../Layout'

export const ResultMessage = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 24px;

  ${breakpoint.mobile} {
    padding-bottom: 32px;
    font-size: 18px;
  }
`