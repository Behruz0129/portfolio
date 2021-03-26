import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Montserrat', sans-serif;
    }

    *::-webkit-scrollbar {
        width: 10px;
    }
    *::-webkit-scrollbar-thumb {
        background: #19506b;
    }
    *::-webkit-scrollbar-track {
        background: #092938;
    }
`;

export default GlobalStyle;
