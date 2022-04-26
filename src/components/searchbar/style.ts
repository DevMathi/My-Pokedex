import styled from "styled-components"

export const BarStyle = styled.div`
    background-color: #363636;
    .search-bar-container {
    }

    @media (max-width: 768px) {
        padding: 1.5rem;
        .container {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            input {
                outline: none;
                padding: 0.9rem 0.1rem;
                border-radius: 1rem;
                border: none;
            }
        }
        .search-bar-container {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            button {
                background-color: cyan;
                margin-left: 0.3rem;
                padding: 0.8rem 1rem;
                border-radius: 2rem;
                border: none;

                img {
                    width: 1.1rem;
                }
            }
            input {
                font-size: 1.2rem;
                padding: 1rem 0rem;
                width: 100%;
            }
        }
    }
    @media (min-width: 768px) {
    }
`
