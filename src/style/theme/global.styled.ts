import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-thumb {
    border: 5px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 10px;
    background-color: ${(p) => p.theme.palette.scrollbarBackgroundColor};
  }

  html,
  body,
  #root {
    height: 100%;
    user-select: none;
  }
  
  body {
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 400;
    background-color: ${(p) => p.theme.palette.base};
  }

  .overflow-hidden {
    overflow-y: hidden;
  }
  
  .cursor-pointer {
    cursor: pointer;
  }

  .responsive-img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export default GlobalStyles;
