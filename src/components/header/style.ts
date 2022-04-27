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
        .menu {
            display: none;
        }
    }
    @media (min-width: 768px) {
        .logo-container {
            display: flex;
            justify-content: center;
        }
        .menu {
            nav {
                ul {
                    text-align: center;
                    display: flex;
                    flex-flow: column;

                    li {
                        background-color: #808080;
                        padding: 1rem;
                        a {
                            text-decoration: none;
                            color: #d3d3d3;
                        }
                    }
                    li:hover {
                        transition: background-color 0.4s linear;
                        background-color: red;

                        a {
                            color: #808080;
                        }
                    }
                }
            }
            .email-icon {
                height: 2rem;
                width: 3rem;
            }
            .github-icon {
                height: 2rem;
                width: 3rem;
            }
            .linkedin-icon {
                height: 2rem;
                width: 3rem;
            }
        }
    }
    @media (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        .menu {
            nav {
                height: 100%;

                ul {
                    height: 100%;
                    display: flex;
                    flex-flow: row;

                    li {
                        display: flex;
                        align-items: center;
                        background-color: red;
                        a {
                            padding: 2rem;
                            text-decoration: none;
                            color: #d3d3d3;
                        }
                    }
                    li:hover {
                        transition: background-color 0.4s linear;
                        background-color: #d3d3d3;
                        a {
                            color: #808080;
                        }
                    }
                }
            }
            .email-icon {
                height: 2rem;
                width: 3rem;
            }
            .github-icon {
                height: 2rem;
                width: 3rem;
            }
            .linkedin-icon {
                height: 2rem;
                width: 3rem;
            }
        }
    }
`
