import styled from "styled-components"

export const FooterStyled = styled.footer`
    background-color: #8a2be2;
    @media (max-width: 768px) {
        height: 100%;
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        .icons-container {
            color: #d8bfd8;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
        }
        .whatsapp-icon {
            height: 2rem;
            width: 3rem;
        }
        .email-icon {
            height: 2rem;
            width: 3rem;
        }
    }
`
