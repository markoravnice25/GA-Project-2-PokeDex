//TODO 1) imports
//React
import React from 'react'

// Bringing in Link for react navigation
import { Link } from 'react-router-dom'

// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

//TODO 2) Arrow function
const PageNavBar = () => {
  return (
    <Navbar id='navbar' expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/"><img id='pokeball' src='https://c.tenor.com/CpRW4WUGa3IAAAAi/pok%C3%A9ball-pok%C3%A9mon.gif'></img></Navbar.Brand>
        <Nav.Link className='navlink' as={Link} to="/pokemons">Find Pokemons!</Nav.Link>
      </Container>
    </Navbar>
  )
}

//TODO 3) export PageNavBar.js and import to App.js
export default PageNavBar