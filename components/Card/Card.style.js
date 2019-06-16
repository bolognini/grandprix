import styled from 'styled-components'

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