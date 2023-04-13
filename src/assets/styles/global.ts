import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Figtree', sans-serif;
  }

  body{
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 1rem;
    color:  ${({ theme }) => theme.colors.gray.main};
    -webkit-font-smoothing: antialiased;
  }

  strong {
    color:${({ theme }) => theme.colors.gray.dark};
  }
 
  button{
    cursor: pointer;
  }
`;
