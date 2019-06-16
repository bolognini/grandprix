import React from 'react'
import {
  CardWrapper,
  Position,
  Nationality,
  Name,
  Vehicle,
  RacerNumber,
  Points
} from './Card.style'

const Card = ({ position, number, nationality, name, vehicle, points }) => {
  return (
    <CardWrapper>
      <Position>{position}</Position>
      <Nationality>{nationality}</Nationality>
      <Name>{name}</Name>
      <Vehicle>{vehicle}</Vehicle>
      <RacerNumber>#{number}</RacerNumber>
      <Points>{points} pts</Points>
    </CardWrapper>
  )
}

export default Card