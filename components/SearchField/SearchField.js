import React, { useState } from 'react'
import Arrow from '../../assets/arrow.svg'
import {
  SearchFieldWrapper,
  Input,
  Button
} from './SearchField.style'

const SearchField = ({ raceList }) => {
  const [year, setYear] = useState(null)
  const [round, setRound] = useState(null)
  const [padding, setPadding] = useState(null)

  return (
    <SearchFieldWrapper padding={padding}>
      <Input
        placeholder='Ano'
        onChange={(e) => setYear(e.target.value)}
      />
      <Input
        placeholder='Etapa'
        onChange={(e) => setRound(e.target.value)}
      />
      <Button
      onClick={() => {
        setPadding('padding')
        raceList(event, year, round)
      }}>
        <Arrow />
      </Button>
    </SearchFieldWrapper>
  )
}

export default SearchField