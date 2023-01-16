import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        
        background-color: white;
        font-family: Lato; 
        
          
}

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        
        
    }
    @font-face {
        font-family: Lato;
        src: url("/fonts/Lato/Lato-Regular.ttf") format("truetype");
    }
    @font-face {
        font-family: Lato-bold;
        src: url("/fonts/Lato/Lato-Bold.ttf") format("truetype");

    }
    @media (max-width: 600px) {
}
`;

export default GlobalStyles;
