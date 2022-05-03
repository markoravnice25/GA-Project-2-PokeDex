import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


//components
import Home from './Home'
import PageNavBar from './components/PageNavBar'
import NotFound from './components/NotFound'
import PokemonIndex from './components/PokemonIndex'

const App = () => {


  return (
    <main className='site-wrapper'>
      <BrowserRouter>
        <PageNavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/index' element={<PokemonIndex />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
