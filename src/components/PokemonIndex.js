import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useNavigate, Link } from 'react-router-dom'

// Import bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const PokemonIndex = () => {
  // Pokemon State
  const [ pokemons, setPokemons ] = useState([])

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20')
        setPokemons(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    getPokemon()
  }, [])

  return (
    <Container className='pokemon-list'>
      <Row>
        {pokemons.map((pokemon, index) => {
          const { name } = pokemon
          return (
            <Col key={index} md='3' lg='2'>
              <Link to={`/pokemons/${name}`}>
                <Card>
                  <Card.Img variant='top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} />
                  {pokemon.name}
                </Card>
              </Link>
            </Col>
          )
        })}
      </Row>
    </Container>

  )
}

export default PokemonIndex