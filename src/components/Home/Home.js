import React from 'react'

import Header from '../Header/Header'
import Slogan from '../Header/Slogan'
import Container from '../Container/Container'

import './Home.scss'
import '../../public/images/home/paths-grey.svg'

function Home() {
  return (
    <Container fluid>
      <div className="Screen-right-half paths-grey" />
      <Header />
      <Slogan />
    </Container>
  )
}

export default Home
