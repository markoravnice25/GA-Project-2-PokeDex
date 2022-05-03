import React from 'react'
// Bringin in Link for react navigation
import { Link, useNavigate } from 'react-router-dom'

// Import React Components
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

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

export default PageNavBar