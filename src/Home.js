import React from 'react'

//react-router-dom components
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='hero text-center'>
      <section className='hero-container'>
        <div className='title'>
          <h1 className='display-1'>Pokedex!</h1> <img src="src/images/shiny-furfrou.gif" alt="" />
          <p className='lead'>Discover all your favourite Pokeman&rsquo;s</p>
          <Link to='/pokemons' className='btn btn-outline-danger'>Pokemon Index</Link>
        </div>
      </section>

    </div>
  )

}

export default Home