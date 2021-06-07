import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  color: white;

  display: flex;
`

export const Form = styled.form`
  width: 380px;
  margin-left: 150px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  h1 {
    display: inline;
    padding: 0 10px;
    margin: 0 auto 45px;

    background-color: red;

    font-family: Marvel;
    font-size: 6.25rem;
    font-weight: normal;
  }

  h2 {
  color: red;
  font-size: 1.875rem;
  font-weight: normal;
  }

  span.login-comment {
    margin-bottom: 20px;

    color: #84848D;
    font-size: 1.25rem;
    font-weight: 300;
  }

  input {
    margin-bottom: 18px;
    padding: 28px;
    border-radius: 56px;
    
    color: black;
    font-size: 1.375rem;
    font-weight: 300;

    &::placeholder {
      color: #D1D1D6;
    }
  }

  div.horizontal-separator {
    margin-top: 12px;
    padding: 0 1rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 0.9375rem;
    color: #84848D;

    a {
      display: block;

      color: #84848D;
      border-bottom: 1px solid red;
    }
  }

  a {
    text-decoration: none;
  }

  button.login {
    height: 65px;
    margin-top: 12px;
    border: 0;
    border-radius: 65px;

    background-color: red;
    color: white;
    font-size: 1.75rem;

    &:hover {
      cursor: pointer;
    }
  }

  span.register {
    margin-top: 30px;

    text-align: center;
    color: #84848D;
    font-size: 1rem;

    a {
      color: red;
    }
  }
`
