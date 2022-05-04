//TODO 1) imports
//React
import React from 'react'

//react-router-dom
import { Link } from 'react-router-dom'

//TODO 2) Arrow function with return statement which displays on webpage.
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
//TODO 3) export Home.js and import to App.js
export default Home