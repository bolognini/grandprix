import styled from 'styled-components'

export const MessageBox = styled.div`
  width: 40%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${props => props.behavior.show ? '0px' : '-56px' };
  transition: .3s ease-in;
  z-index: 3;
  background-color: ${props => props.theme.brightRed};
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 16px;
  transition: top 0.2s;
`

export const Message = styled.p`
  text-align: center;
  line-height: 1.5;
  font-weight: normal;
  color: ${props => props.theme.white};
`