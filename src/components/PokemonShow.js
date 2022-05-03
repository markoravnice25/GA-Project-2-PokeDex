import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const PokemonShow = () => {
  const [ pokemon, setPokemon ] = useState(null)
  
  const { name } = useParams()

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        setPokemon(data)
      } catch (error) {
        console.log(error)
      }
    }
    getPokemon()
  }, [])





  return (
    <div>
      {pokemon ?
        <Container>
          <Row>
            <Col>
              <h1>{pokemon.name}</h1>
              <h2>{pokemon.types[0].type.name}</h2>
              <div>
                {pokemon.moves.map((pokemon, index) => {
                  return (
                    <div key={index}>
                      {pokemon.move.name}
                    </div>
                  )
                })}
              </div>
            </Col>
            <Col>
              <h2>{pokemon.id}</h2>
              <div className='pokemon-image'>
                <img src={pokemon.sprites.other['official-artwork'].front_default} />
              </div>
              <div className='pokemon-stats'>
                {pokemon.stats.map((stat, index) => {
                  return (
                    <Container key={index}>
                      <Row>
                        <Col>
                          <div>
                            {stat.stat.name}
                          </div>
                          <div>
                            {stat.base_stat}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  )
                })} 
              </div>
            </Col>
          </Row>
        </Container>
        :
        <h1>not loaded</h1>
      } 

    </div>
  )

}



export default PokemonShow