import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body, 
  input, 
  button, 
  textarea, 
  select {
    font-family: 'Space Mono', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};
  padding: 3.1rem 2.4rem;

  @media (min-width: 768px) {
    padding: 3.1rem 7rem;
  }
`
export const HomeButton = styled.button`
  display: block;
  background: #0079ff;
  border: none;
  height: 4rem;
  border-radius: 1rem;
  line-height: 2.1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  width: 8rem;
  transition: all 0.3s ease-out;

  position: absolute;
  top: 2rem;
  left: 2rem;

  &:hover {
    filter: brightness(1.05);
    box-shadow: 0px 0px 15px -3px #0079ff;
  }
`
