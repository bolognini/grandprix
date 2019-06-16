import React from 'react'
import {
  MenuWrapper,
  Position,
  Nationality,
  Name,
  Vehicle,
  RacerNumber,
  Points
} from './Menu.style'

const Menu = ({ position }) => {
  return (
    <MenuWrapper>
      <Position>{position}</Position>
      <Nationality>Nacionalidade</Nationality>
      <Name>Piloto</Name>
      <Vehicle>Equipe</Vehicle>
      <RacerNumber>Número</RacerNumber>
      <Points>Pontos</Points>
    </MenuWrapper>
  )
}

export default Menu