import { useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import PageHolder from '../components/PageHolder'
import PageTitle from '../components/PageTitle'
import ErrorMessage from '../components/ErrorMessage'
import ResultText from '../components/ResultText'
import Menu from '../components/Menu'
import Card from '../components/Card'
import SearchField from '../components/SearchField'

const Index = () => {
  const [race, setRace] = useState(null)
  const [url, setUrl] = useState(null)
  const [list, setList] = useState(null)
  const [order, setOrder] = useState('asc')
  const [error, setError] = useState(null)

  const getList = (event, year, round) => {
    event.preventDefault()
    return fetch(`http://ergast.com/api/f1/${year}/${round}/results.json`)
      .then(res => res.json())
      .then(res => {
        setList(res.MRData.RaceTable.Races[0].Results)
        setRace(res.MRData.RaceTable.Races[0].raceName)
        setUrl(res.MRData.RaceTable.Races[0].Circuit.url)
        return res
      })
      .catch((error) => {
        setError(true)
        console.error(`Error: ${error}`)
      })
  }

  const sortList = () => {
    if (order === 'asc') {
      setList(list.slice(0).sort((a, b) => b.position - a.position))
      setOrder('desc')
      return
    }
    setList(list.slice(0).sort((a, b) => a.position - b.position))
    setOrder('asc')
  }

  return (
    <Layout>
      <PageHolder>
        <PageTitle title='iCarros' subtitle='Digite o ano e a etapa da Fórmula 1 para checar os resultados! ;)'/>
        <SearchField raceList={getList} />
        {list &&
          <ResultText
            name={
              <Link href={url}>
                <a target='_blank'>{race}</a>
              </Link>
            }>
          </ResultText>
        }
        {error && <ErrorMessage message={error} />}
        {list &&
          <Menu
            position={
              <button
                type='button'
                data-active={order}
                onClick={sortList}
              >
                Posição
            </button>
          }/>
        }
        {list &&
          list.map(racer =>
            <Card
              position={racer.position}
              number={racer.number}
              nationality={racer.Driver.nationality}
              name={`${racer.Driver.givenName.substring(0, 1)}. ${racer.Driver.familyName}`}
              vehicle={racer.Constructor.name}
              points={racer.points}
            />
          )}
      </PageHolder>
    </Layout>
  )
}

export default Index


