import React from 'react';

import Header from '../components/Header';
import Card from '../components/Card';

import arrowRight from '../assets/arrow-right.png'

import { Container } from './styles';

const Characters: React.FC = () => {
  return (
    <Container>
      <Header/>
      <div className="cards">
        <Card 
          name={'Homem-Aranha'}
          description={'Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.'}
        />

        <Card 
          name={'Wanda Maximoff'}
          description={'Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.'}
        />

        <Card 
          name={'Thanos'}
          description={"A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais."}
        />
        
        <button
          className='next-card'
          onClick={() => alert('next card')}
        >
          <img src={arrowRight} alt="Próximo" />
        </button>
      </div>
    </Container>
  )
}

export default Characters