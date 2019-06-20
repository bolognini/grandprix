import styled from 'styled-components'
import { breakpoint } from '../Layout'

export const MessageBox = styled.div`
  width: 40%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: ${props => props.behavior.show ? '0px' : '-56px' };
  transition: .3s ease-in;
  z-index: 3;
  background-color: ${props => props.theme.brightRed};
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 16px;
  transition: top 0.2s;

  ${breakpoint.mobile} {
    width: 75%;
    font-size: 14px;
    top: ${props => props.behavior.show ? '0px' : '-95px' };
  }
  
  ${breakpoint.tablet} {
    width: 75%;
    top: ${props => props.behavior.show ? '0px' : '-80px' };
  }
`

export const Message = styled.p`
  text-align: center;
  line-height: 1.5;
  font-weight: normal;
  color: ${props => props.theme.white};
`