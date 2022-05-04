import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

// Import bootstrap components
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const IndexComponent = ({ name, url }) => {


  const getIndex = () => {
    const urlSplit = url.split('/')
    return urlSplit[urlSplit.length - 2]
  }


  return (
    <Col md='3' lg='2'>
      <Link to={`/pokemons/${name}`}>
        <Card>
          <Card.Img variant='top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIndex()}.png`} />
          {name}
        </Card>
      </Link>
    </Col>
  )
}










export default IndexComponent