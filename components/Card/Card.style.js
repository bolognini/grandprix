import styled from 'styled-components'
import { breakpoint } from '../Layout'

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  background-color: ${props => props.theme.white};
  margin-bottom: 16px;
  border-radius: 6px;
  padding: 24px 32px;
  box-shadow: ${props => props.theme.inputBoxShadow};
  transition: 0.2s ease-in;
  cursor: pointer;

  &:hover {
    transition: 0.2s ease-in;
    transform: translateY(-4px);
  }

  ${breakpoint.mobile} {
    font-size: 14px;
    padding: 24px 16px;
    grid-template-columns: 0.3fr 1fr 1fr 1fr 0.1fr 0.5fr;
  }
`

export const Position = styled.span`
  text-align: left;
`

export const RacerNumber = styled.span`
  text-align: center;

  ${breakpoint.mobile} {
    text-align: right;
  }
`

export const Nationality = styled.span`
  text-align: left;
`

export const Name = styled.span`
  text-align: center;
`

export const Team = styled.span`
  text-align: center;
`

export const Points = styled.span`
  text-align: right;
`