import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body {
    width: 100%;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    text-rendering: optmizeLegibility;
    -webkit-font-smoothing: antialiased;
    min-width:30rem;

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #8c8c8c;
      border-radius: 20px;
      border: 3px solid inherit;
    }

    {
      scrollbar-width: thin;
      scrollbar-color: #8c8c8c;
    }
  }

  html, body, root {
    height:100% !important;
    width:100% !important;
    background: green;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  a:hover {
    color: #335b8e;
  }
  
  :root {
   
  }
 
}
`;

export default GlobalStyles;
