import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Main } from "./components/pokemons-list/Main"
import { GlobalStyled } from "./styles/global"

export function App() {
    return (
        <>
            <GlobalStyled />
            <Header />
            <Main />
            <Footer />
        </>
    )
}
