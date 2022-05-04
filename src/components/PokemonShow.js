import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Accordion } from 'react-bootstrap'




const PokemonShow = () => {
  const [ pokemon, setPokemon ] = useState(null)
  const [ pokemonChain, setPokemonChain] = useState(null)
  
  const [ previousEvolution, setPreviousEvolution ] = useState(null)
  const [ nextEvolution, setNextEvolution ] = useState(null)
  
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


    const getEvolution = async () => {
      try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
        setPokemonChain(data)
        try {
          if (!data.evolves_from_species.name){
            setPreviousEvolution(null)
          } else {
            setPreviousEvolution(data.evolves_from_species.name)
          }
        } catch (error) {
          console.log(error)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getPokemon()
    getEvolution()
  }, [])

  useEffect(() => {
    if (pokemonChain){
      const evoData = async () => {
        try {
          const { data } = await axios.get(pokemonChain.evolution_chain.url)
          console.log(data)
          try {
            if (data.chain.evolves_to[0].evolves_to[0].species.name === name){
              setNextEvolution(null)
            } else if (data.chain.evolves_to[0].species.name === name) {
              console.log(data)
              setNextEvolution(data.chain.evolves_to[0].evolves_to[0].species.name)
            } else {
              setNextEvolution(data.chain.evolves_to[0].species.name)
            }
          } catch (error) {
            console.log('caught', error)
          }
        } catch (error) {
          console.log(error)
        }
      }
      evoData()
    } else if (!pokemonChain){
      console.log('notyet')
    }

  }, [pokemonChain])

  return (
    <div>
      {pokemon ?
        <Container>
          <Row>
            <Col>
              <h1>{pokemon.name}</h1>
              <div id='show_types'>
                {pokemon.types.map(pokemonType => {
                  const { slot, type } = pokemonType
                  return <div className={type.name} key={slot}><h2>{type.name}</h2></div>
                })}
              </div>
              <div className='pokemon-stats'>
                {pokemon.stats.map((stat, index) => {
                  return (
                    <Container className='stats' key={index}>
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
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Moves</Accordion.Header>
                  <Accordion.Body>
                    {pokemon.moves.map((pokemon, index) => {
                      return (
                        <div key={index}>
                          {pokemon.move.name}
                        </div>
                      )
                    })}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col>
              <div className='pokemon-image'>
                <h2>#{pokemon.id}</h2>
                <img src={pokemon.sprites.other['official-artwork'].front_default} />
              </div>
              <div className='evos'>
                {previousEvolution && 
                <div className='previous_evolution'>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id - 1}.png`} />
                  <p>Previous: {previousEvolution}</p>
                </div>
                }
                {nextEvolution && 
                <div className='next_evolution'>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id + 1}.png`} />
                  <p>Next: {nextEvolution}</p>
                </div>
                }
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