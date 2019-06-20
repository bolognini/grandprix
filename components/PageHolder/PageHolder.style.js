import styled from 'styled-components'
import { breakpoint } from '../Layout'

export const Holder = styled.div`
  display: block;
  width: 50%;
  margin: 0 auto;
  padding-bottom: 24px;
  
  ${breakpoint.mobile} {
    width: 95%;
  }
  
  ${breakpoint.tablet} {
    width: 90%;
  }
`