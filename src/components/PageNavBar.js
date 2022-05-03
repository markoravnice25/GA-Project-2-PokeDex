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
        <Navbar.Brand className='navlinks' as={Link} to="/">Home</Navbar.Brand>
        <Nav.Link className='navlinks' as={Link} to="/index">Find Pokemons!</Nav.Link>
      </Container>
    </Navbar>
  )
}

export default PageNavBar