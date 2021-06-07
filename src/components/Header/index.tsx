import React from 'react'

// import { Container } from './styles'
import styled from 'styled-components';

const Container = styled.div`
  height: 114px;
  background: black;
  border-bottom: 2px solid red;

  display: flex;

  /* border: 1px solid white; */
  h1 {
    /* display: inline; */
    /* padding: 9px 10px; */
    /* margin: 0 auto 45px; */

    background-color: red;

    font-family: Marvel;
    font-size: 3.125rem;
    /* font-weight: normal; */
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <h1>Marvel</h1>

      <nav>
        <a href="#">Personagens</a>
        <a href="#">Filmes</a>
        <a href="#">HQs</a>
        
        <div className="user">
          <img src="./" alt="" />
          <button>Sair</button>
        </div>
      </nav>
    </Container>
  )
}

export default Header