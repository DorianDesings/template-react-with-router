import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  img{
    display: block;
    max-width: 100%;
  }

  body{
    margin: 0;
    color: aliceblue;
    background-color: #333;
    font-family: sans-serif;
  }

  h1,
  h2,
  h3{font-family:  serif;}

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
`;

export { GlobalStyles };
