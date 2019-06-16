import styled from 'styled-components'

export const MenuWrapper = styled.nav`
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

    &[data-active='asc'] {
      &::after {
        display: inline;
        content: '';
        position: absolute;
        top: 8px;
        left: 70px;
        width: 0px;
        height: 0px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #2f2f2f;
      }
    }

    &[data-active='desc'] {
      &::after {
        display: inline;
        content: '';
        position: absolute;
        top: 8px;
        left: 70px;
        width: 0px;
        height: 0px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid #2f2f2f;
      }
    }
  }
`

export const Position = styled.p`
  text-align: left;
`

export const RacerNumber = styled.p`
  text-align: center;
`

export const Nationality = styled.p`
  text-align: left;
`

export const Name = styled.p`
  text-align: center;
`

export const Vehicle = styled.p`
  text-align: center;
`

export const Points = styled.p`
  text-align: right;
`