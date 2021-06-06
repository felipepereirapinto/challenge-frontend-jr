import React from 'react'

import { Container, Form } from './styles'

const Home: React.FC = () => {
  function handleLogin() {
    // To-do in the future
    // Login
    // Authenticate
    // Save Credentials (local storage? cookies? JWT?)

    // Change state from 'logged-off' to 'logged-on'
    // App should re-render based on that
  }
  return (
    <Container>
      <Form>
        <h1>MARVEL</h1>

        <h2>Bem-vindo(a) de volta!</h2>
        <span className='login-comment'>Acesse sua conta:</span>
        
        <input type='text' id='user' placeholder='Usuário'/>
        <input type='password' id='password' placeholder='Senha'/>

        <div className='horizontal-separator'>
          <label>
            <input type='checkbox' className='save-login'/>
            Salvar login
          </label>

          <a href='#' className='forgotten-password'>Esqueci a senha</a>
        </div>

        <button
          className='login'
          onClick={() => {alert('clicou')}}
        >
          Entrar
        </button>
        
        <span className='register'>
          Ainda não tem o login?{' '}
          <a href='#'>Cadastre-se</a>
        </span>
      </Form>
    </Container>
  )
}


export default Home