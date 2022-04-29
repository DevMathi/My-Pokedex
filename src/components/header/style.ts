import styled from "styled-components"

export const HeaderStyle = styled.header`
    background-color: red;
    position: sticky;

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
    @media (min-width: 768px) and (max-width: 1023px) {
        .logo-container {
            display: flex;
            justify-content: center;
        }
        .menu {
            nav {
                ul {
                    text-align: center;
                    display: flex;
                    flex-flow: row;
                    justify-content: space-around;
                    background-color: #808080;
                    li {
                        width: 100%;
                        padding: 1rem;
                        a {
                            text-decoration: none;
                            color: #d3d3d3;
                        }
                        border: 1px solid black;
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
        body {
            position: relative;
        }
        position: sticky;
        top: 0;
        z-index: 1;
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
                        filter: brightness(0.8);
                        transition: filter 0.4s linear;
                        a {
                            transition: filter 0.3s linear;
                            filter: invert(1);
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
