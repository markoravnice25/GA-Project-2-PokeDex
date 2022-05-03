import React from 'react'

//react-router-dom components
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='hero text-center'>
      <section className='hero-container'>
        <div className='title'>
          <img src="https://c.tenor.com/cTPmIsRVrlcAAAAi/pokemon.gif" alt="" />       
          <p className='lead'>Discover all your favourite Pokemon</p>
          <Link to='/pokemons' className='btn btn-outline-danger'>PokeDex</Link>
        </div>
      </section>

    </div>
  )

}

export default Home