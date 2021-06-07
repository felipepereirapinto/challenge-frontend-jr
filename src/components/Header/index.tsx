import React from 'react'

import { Container } from './styles'

import profile from '../../assets/profile.png'

const Header: React.FC = () => {
  return (
    <Container>
      <h1>MARVEL</h1>

      <nav>
        <a href="#">Personagens</a>
        <a href="#">Filmes</a>
        <a href="#">HQs</a>
        
        <div className="profile">
          <img src={profile} alt="profile picture" />
          <button>Sair</button>
        </div>
      </nav>
    </Container>
  )
}

export default Header