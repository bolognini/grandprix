import React from 'react'
import { TextWrapper, Title, Subtitle } from './PageTitle.style'

const PageTitle = ({ title, subtitle }) => {
  return (
    <TextWrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </TextWrapper>
  )
}

export default PageTitle