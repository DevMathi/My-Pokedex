import styled from "styled-components"

export const ListPokesStyle = styled.section`
    padding: 1.3rem;
    background-color: #c0c0c0;

    .container-pokes {
        border-radius: 1rem;

        .card-container {
            min-width: 290px;
            h2 {
                color: green;
            }
            text-align: center;
            border-radius: 1rem;
            background-color: #dcdcdc;

            .elements-container {
                text-align: center;
            }
            .pokemons-images {
                min-height: 100px;
            }
        }
    }

    @media (max-width: 768px) {
        .container-pokes {
            display: flex;
            flex-flow: column;
            align-items: center;
            padding: 0.5rem;

            .card-container {
                padding: 3rem 4rem;

                .elements-container {
                    display: flex;
                    justify-content: space-between;
                    padding: 1rem;
                    .grass {
                        padding: 0.4rem;
                        background-color: #228b22;
                        border-radius: 0.4rem;
                    }
                    .poison {
                        padding: 0.4rem;
                        border-radius: 0.4rem;
                        background-color: #8a2be2;
                    }
                }
            }
        }
        .card-container:not(:first-child) {
            margin-top: 1.3rem;
        }
    }

    @media (min-width: 768px) {
    }
`
