import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`

    *{
        text-decoration: none;
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width:720px){
            font-size: 87.5%;
        }
    }

    body{
        min-height: 100vh;
        font-family: poppins, sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    #root{
         min-height: 100vh;
    }

    input, textarea, label{
        font-family: poppins, sans-serif;
    }




`
