import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
  }

  h1, h2 {
    text-align: center;
  }

  label {
    display: block;
    margin-bottom: 8px;
  }

  select {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
  }

  p {
    font-size: 18px;
    text-align: center;
  }
`;

export default GlobalStyles;
