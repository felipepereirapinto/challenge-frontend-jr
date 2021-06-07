import styled from 'styled-components'

export const Container = styled.div`
  height: 114px;
  padding: 0 55px;
  background: black;
  border-bottom: 2px solid red;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    padding: 9px 10px 0;

    background-color: red;

    font-family: Marvel;
    font-size: 3.125rem;
    font-weight: normal;
  }

  nav {
    display: flex;
    align-items: center;
    
    font-size: 1.875rem;
    font-weight: bold;

    a {
      margin-right: 85px;

      color: white;
      text-decoration: none;

    }

    .profile {
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        border: none;

        font-size: 1.25rem;
        font-weight: thin;
        color: white;
        background-color: black;

        &:hover {
          cursor: pointer;
        }
      }
    }
    
  }
`