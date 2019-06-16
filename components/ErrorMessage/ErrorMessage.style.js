import styled from 'styled-components'

export const Message = styled.p`
  text-align: center;
  padding-bottom: 24px;
  line-height: 1.5;
  font-weight: normal;
  color: ${props => props.theme.brightRed};
`