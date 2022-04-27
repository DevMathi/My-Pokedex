import styled from "styled-components"

export const FooterStyled = styled.footer`
    background-color: #808080;
    .whatsapp-icon {
        height: 2rem;
        width: 3rem;
    }
    .email-icon {
        height: 2rem;
        width: 3rem;
    }
    @media (max-width: 768px) {
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        .icons-container {
            text-align: center;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-flow: column;
        }
        .contatos-container {
            display: flex;
            justify-content: space-around;
        }
    }
    @media (min-width: 768px) {
        display: none;
    }
`
