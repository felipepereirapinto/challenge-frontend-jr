import React from 'react'

import { Container } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <h1>MARVEL</h1>

      <h2>Bem-vindo(a) de volta!</h2>
      <span>Acesse sua conta:</span>

      <label htmlFor="user">Usuário</label>
      <input type="text" name="user"/>

      <label htmlFor="password">Senha</label>
      <input type="password" name="password"/>

      <div>
        <div>
          <input type="radio" name="save-login" id="save-login" />
          <label htmlFor="save-login">Salvar login</label>
        </div>

        <a href="#">Esqueci a senha</a>
      </div>

      <button>Entrar</button>
      
      <span>Ainda não tem o login? </span>
      <a href="#">Cadastre-se</a>

    </Container>
  )
}


export default Home