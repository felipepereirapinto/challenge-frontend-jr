import styled from 'styled-components'

export const Container = styled.div`

  border: 1px solid white;
  height: 100vh;
  width: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
  }

  .cards {
    flex: 1;
    width: 100%;
    max-width: 1200px;

    display: flex;
    justify-content: space-around;
    align-items: center;  
  }

  .next-card {
    border: none;
    background: transparent;

    &:hover {
      cursor: pointer;
    }
  }
`