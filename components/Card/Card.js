import React from 'react'
import Link from 'next/link'
import {
  CardWrapper,
  Position,
  Nationality,
  Name,
  Team,
  RacerNumber,
  Points
} from './Card.style'

const Card = ({ position, number, nationality, name, team, points }) => {
  return (
    <CardWrapper>
      <Position>{position}</Position>
      <Nationality>{nationality}</Nationality>
      <Name target='_blank'>{name}</Name>
      <Team>{team}</Team>
      <RacerNumber>#{number}</RacerNumber>
      <Points>{points} pts</Points>
    </CardWrapper>
  )
}

export default Card