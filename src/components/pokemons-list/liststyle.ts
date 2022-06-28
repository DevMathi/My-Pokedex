import styled from "styled-components"

export const ListPokesStyle = styled.section`
    padding: 1.3rem;
    button {
        cursor: pointer;
    }
    .go-back {
        position: fixed;
        bottom: 3rem;
        right: 4rem;
        padding: 0.9rem 1.2rem;
        background-color: #a60620;
        border-radius: 4rem;
        border: none;
        transition: filter 0.3s linear;
        img {
            width: 1rem;
        }
        &:hover {
            filter: brightness(0.7);
        }
    }

    .container-pokes {
        border-radius: 1rem;
        .container-pokes {
            display: flex;
            flex-flow: column;
            align-items: center;
            padding: 0.5rem;
        }

        .card-container {
            text-transform: capitalize;
            min-width: 317px;
            text-align: center;
            border-radius: 1rem;
            background-color: #dcdcdc;
            padding: 1.5rem 2rem;
            box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 40%);

            .elements-container {
                display: flex;
                justify-content: center;
                padding: 1rem;
                gap: 1rem;
                text-align: center;
                .grass {
                    padding: 0.5rem 1rem;
                    background-color: #98fb98;
                    border-radius: 0.4rem;
                }
                .poison {
                    padding: 0.5rem 1rem;
                    border-radius: 0.4rem;
                    background-color: #8a2be2;
                }
                .fire {
                    padding: 0.5rem 1rem;
                    background-color: #d2691e;
                    border-radius: 0.4rem;
                }
                .water {
                    color: white;
                    padding: 0.5rem 1rem;
                    background-color: #0000ff;
                    border-radius: 0.4rem;
                }
                .bug {
                    padding: 0.5rem 1rem;
                    background-color: #228b22;
                    border-radius: 0.4rem;
                }
                .normal {
                    padding: 0.5rem 1rem;
                    background-color: #696969;
                    border-radius: 0.4rem;
                }
                .flying {
                    padding: 0.5rem 1rem;
                    background-color: #ccc;
                    border-radius: 0.4rem;
                }
                .electric {
                    padding: 0.5rem 1rem;
                    background-color: #ffff00;
                    border-radius: 0.4rem;
                }
                .ground {
                    padding: 0.5rem 1rem;
                    background-color: #a0522d;
                    border-radius: 0.4rem;
                }
                .fairy {
                    padding: 0.5rem 1rem;
                    background-color: #dda0dd;
                    border-radius: 0.4rem;
                }
                .fighting {
                    padding: 0.5rem 1rem;
                    background-color: #a52a2a;
                    border-radius: 0.4rem;
                }
                .psychic {
                    padding: 0.5rem 1rem;
                    background-color: #9932cc;
                    border-radius: 0.4rem;
                }
                .rock {
                    padding: 0.5rem 1rem;
                    background-color: #708090;
                    border-radius: 0.4rem;
                }
                .steel {
                    padding: 0.5rem 1rem;
                    background-color: #b0c4de;
                    border-radius: 0.4rem;
                }
                .ice {
                    padding: 0.5rem 1rem;
                    background-color: #87cefa;
                    border-radius: 0.4rem;
                }
                .ghost {
                    padding: 0.5rem 1rem;
                    background-color: #836fff;
                    border-radius: 0.4rem;
                }
                .dragon {
                    padding: 0.5rem 1rem;
                    background-color: #add8e6;
                    border-radius: 0.4rem;
                }
                .dark {
                    color: white;
                    padding: 0.5rem 1rem;
                    background-color: #363636;
                    border-radius: 0.4rem;
                }
            }
            .pokemons-images {
                min-height: 100px;
                max-width: 141px;
                max-height: 196px;
            }
        }
    }

    @media (max-width: 768px) {
        .card-container {
            padding: 3rem 4rem;
        }

        .container-buttons {
            display: flex;
            flex-flow: column;
            align-items: center;
            gap: 1rem;
            .load-more-button {
                font-family: poppins, sans-serif;
                margin-top: 1rem;
                font-size: 1.2rem;
                border: none;
                border-radius: 1rem;
                background-color: #87cefa;
                padding: 1rem 1.8rem;
            }
        }
        .card-container:not(:first-child) {
            margin-top: 1.3rem;
        }
    }

    @media (min-width: 768px) {
        .container-pokes {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 1rem;
            gap: 1rem;
        }
        .container-buttons {
            display: flex;
            align-items: center;
            justify-content: space-around;

            .load-more-button {
                font-family: poppins, sans-serif;
                font-size: 1.2rem;
                border: none;
                border-radius: 1rem;
                background-color: #87cefa;
                padding: 1rem 1.8rem;
                transition: filter 0.3s linear;
            }
            .load-more-button:hover {
                filter: brightness(0.8);
            }
        }
    }
    @media (min-width: 1090px) {
        .container-pokes {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            padding: 2rem 0rem;
            gap: 1rem;
        }
    }
    @media (min-width: 1400px) {
        .container-pokes {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            padding: 4rem 2rem;
            gap: 1rem;
        }
        .container-pokes {
            gap: 2rem;
        }
        .card-container {
            transition: transform 0.2s linear;
        }
        .card-container:hover {
            transition: transform 0.2s linear;
            transform: scale(1.1);
        }
    }
`
