import styled from 'styled-components'

export const SearchFieldWrapper = styled.form`
  display: flex;
  justify-content: center;
  padding-top: ${props => props.padding === 'padding' ? '5vh' : '20vh'};
  padding-bottom: 24px;
  transition: 0.5s ease-in;
`

export const Input = styled.input`
  appearance: none;
  border: none;
  background: transparent;
  text-align: center;
  font-size: 24px;
  width: 200px;
  color: ${props => props.theme.toryBlue};
  border-bottom: 2px solid ${props => props.theme.mariner};
  margin-right: 20px;
  transition: 0.2s ease-in;

  &:focus {
    border-bottom-color: ${props => props.theme.hoverToryBlue};
    transition: 0.2s ease-in;
  }
`

export const Button = styled.button`
  background-color: ${props => props.theme.mariner};
  border: none;
  padding: 0 16px;
  border-radius: 6px;
  transition: 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.hoverMariner};
    transition: 0.2s ease-in;
  }

  svg {
    width: 15px;
    fill: white;
  }
`