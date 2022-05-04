//TODO 1) imports
// imports from React
import React from 'react'

// react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// components
import Home from './Home'
import PageNavBar from './components/PageNavBar'
import NotFound from './components/NotFound'
import PokemonIndex from './components/PokemonIndex'
import PokemonShow from './components/PokemonShow'

//TODO 2) Arrow function with return statement which accesses components and displays on webpage.
const App = () => {
  return (
    <main className='site-wrapper'>
      <BrowserRouter>
        <PageNavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/pokemons' element={<PokemonIndex />} />
          <Route path='/pokemons/:name' element={<PokemonShow />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}
//TODO 3) export App.js and import to index.js
export default App
