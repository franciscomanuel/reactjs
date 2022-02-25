import React from "react";
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from "styled-components";

export default function ComponentesConEstilos() {

  let mainColor = "#db7093",
    mainAlphaColor80 = "#db709380";

  const setTransitionTime = (time) => `all ${time} ease-in-out`;

  const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;
  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${({color}) => color || "#000"};
    background-color: ${mainColor};
    transition: ${setTransitionTime("1s")};
    animation: ${fadeIn} 5s ease-out;

    ${({isButton}) => isButton && 
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 0.25rem;
        cursor: pointer;
      `
    }

    &:hover {
      background-color: ${mainAlphaColor80}
    }
  `;

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({theme}) => theme.color};
    background-color: ${({theme}) => theme.bgColor};
  `;

  const light = {
    color: "#222",
    bgColor: "#DDD"
  }

  const dark = {
    color: "#DDD",
    bgColor: "#222"
  }

  // Este hereda de Box los estilos y añade los nuevos
  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  const GlobalStyle = createGlobalStyle`
    h2 {
      padding: 2rem;
      background-color: #fff;
      color: #61dafb;
      text-transformm: uppercase;
    }
  `;

  return(
    <>
      <GlobalStyle />
      <h2>Styled-Components</h2>
      <MyH3>Hola soy un h3 estilizado con styled-components</MyH3>
      <MyH3 color="#61dafb">Hola soy un h3 estilizado con styled-components y paso de propiedades</MyH3>
      <MyH3 isButton>Soy un h3 estilizado como botón</MyH3>
      <ThemeProvider theme={light}>
        <Box>Componente Box ligth</Box>
        <BoxRounded>Componente Box redondeada ligth</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Componente Box dark</Box>
        <BoxRounded>Componente Box redondeada dark</BoxRounded>
      </ThemeProvider>
      <h2>Prueba de GlobalStyle</h2>
    </>
  )
}