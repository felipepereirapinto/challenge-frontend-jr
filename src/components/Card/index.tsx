import React from 'react'

import spiderman from '../../assets/character-spiderman.png'

// import { Container } from './styles'

import styled from 'styled-components'
const Container = styled.div`
  width: 289px;
  height: 439px;

  border-radius: 40px;
  border: 1px solid white;

  display: flex;
  flex-direction: column-reverse;

  .details {
    height: 234px;
    padding: 23px;

    border: 1px solid white;
    border-radius: 40px;

    display: flex;
    flex-direction: column;

    h2 {
      /* text-align: center; */
      font-size: 1.25rem;
    }

    p {
      flex: 1;
      margin-top: 15px;

      font-size: 0.75rem;
      font-weight: 300;
    }

    button {
      border: none;
      
      text-align: center;
      font-size: 1.25rem;
      font-weight: 300;
      color: white;
      background-color: transparent;
    }
  }
`


const Card: React.FC = () => {
  return (
    <Container>
      <div className="details">
        <h2 className="card-name">Homem-Aranha</h2>
        <p className="card-description">
          Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.
        </p>

        <button 
          className="open-card"
        >
          ver detalhes
        </button>
      </div>
    </Container>
  )
}

export default Card

