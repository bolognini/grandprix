import React from 'react'
import { ResultMessage } from './ResultText.style'

const ResultText = ({ name }) => {
  return (
    <ResultMessage>Resultado de {name}</ResultMessage>
  )
}

export default ResultText