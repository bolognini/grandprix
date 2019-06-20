import styled from 'styled-components'
import { breakpoint } from '../Layout'

export const MenuWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  background-color: ${props => props.theme.white};
  margin-bottom: 24px;
  border-radius: 6px;
  padding: 24px 32px 24px 24px;
  box-shadow: ${props => props.theme.inputBoxShadow};
  transition: 0.2s ease-in;

  &:hover {
    transition: 0.2s ease-in;
  }

  button {
    position: relative;
    background: none;
    border: none;
    font-size: 16px;
    font-family: ${props => props.theme.fontFamily}, sans-serif;
    font-weight: lighter;
    cursor: pointer;

    &[data-active='asc'], &[data-active='desc'] {
      &::after {
        display: inline;
        content: '';
        position: absolute;
        top: 8px;
        left: 70px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
      }
    }

    &[data-active='asc'] {
      &::after {
        border-top: 5px solid #2f2f2f;
      }
    }

    &[data-active='desc'] {
      &::after {
        border-bottom: 5px solid #2f2f2f;
      }
    }
  }

  ${breakpoint.mobile} {
    padding: 24px 16px;
    font-size: 14px;

    button {
      font-size: 14px;

      &[data-active='asc'], &[data-active='desc'] {
        &::after {
          left: -8px;
        }
      }
    }
  }
`

export const Position = styled.li`
  text-align: left;
`

export const RacerNumber = styled.li`
  text-align: center;
`

export const Nationality = styled.li`
  text-align: left;
`

export const Name = styled.li`
  text-align: center;
`

export const Vehicle = styled.li`
  text-align: center;
`

export const Points = styled.li`
  text-align: right;
`