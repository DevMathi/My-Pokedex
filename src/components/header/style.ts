import styled from "styled-components"

export const HeaderStyle = styled.header`
    background-color: red;

    @media (max-width: 768px) {
        display: flex;
        flex-flow: column;
        .logo-container {
            display: flex;
            justify-content: center;
            padding: 1.5rem 0rem;
        }
    }
    @media (min-width: 768px) {
    }
`
