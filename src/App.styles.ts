import styled, { createGlobalStyle } from 'styled-components'
import BGImage from './images/bg.jpg'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGImage});
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
   font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  margin: auto;
  > p {
    color: #333;
  }
  .score {
    color: #333;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: 'Roboto', sans-serif;
    color: #333;
    font-weight: 400;
    font-size: 4em;
    text-align: center;
    margin: 20px;
  }
  .start,
  .next {
    cursor: pointer;
    background: #ffcc91;
    border: 1px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
    width: 250px;
    height: 50px;
    &:hover {
      background-color: #d38558;
      transition: ease-in-out 0.5s;
    }
  }
  .start {
    max-width: 200px;
  }
`
