import React from 'react';

import Header from '../components/Header';
import Card from '../components/Card';

// import { Container } from './styles';
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid white;

  h1 {
    color: white;
  }
`



const Characters: React.FC = () => {
  return (
    <Container>
      <Header/>
      <Card/>
    </Container>
  )
}

export default Characters