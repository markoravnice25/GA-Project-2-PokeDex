import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Import bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



import IndexComponent from './IndexComponent'

const PokemonIndex = () => {
  // Pokemon State
  const [ pokemons, setPokemons ] = useState([])
  const [ searchInput, setSearchInput ] = useState('')

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1126')
        setPokemons(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getPokemon()
  }, [])


  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  const handleFilter = () => {
    return pokemons.filter(pokemon => {
      const names = pokemon.name.toLowerCase()
      const searchLower = searchInput.toLowerCase()
      return (names.includes(searchLower))
    })
  }


  return (
    <>
      <form>
        <input type='text' placeholder='Search...' value={searchInput} onChange={handleSearch}></input>
      </form>
      <Container className='pokemon-list'>
        <Row>
          {handleFilter().map((pokemon, index) => {
            const { name } = pokemon
            return (
              <IndexComponent key={index} {
                ...pokemon
              }/>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default PokemonIndex