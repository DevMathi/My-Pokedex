import { useEffect, useState } from "react"
import { ListPokesStyle } from "./liststyle"
import { PokeCard } from "./PokeCard"

interface Dados {
    url: string
    id: number
}

export function ListPokes() {
    const [pokeDados, setPokeDados] = useState<Dados[]>([])
    const isMobile = window.screen.width < 768
    const [pokePage, setPokePage] = useState<number>(isMobile ? 10 : 20)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${pokePage}`).then(
            (response) =>
                response.json().then((data) => setPokeDados(data.results))
        )
    }, [pokePage])

    return (
        <ListPokesStyle className="lista">
            <div className="container-pokes">
                {pokeDados.map((pokedado, index) => {
                    return <PokeCard key={index} dados={pokedado} />
                })}
            </div>
            <div className="container-buttons">
                <button
                    onClick={() => setPokePage(pokePage + 10)}
                    className="load-more-button"
                >
                    Carregar mais
                </button>
                <a
                    href=".lista"
                    onClick={() => {
                        if (pokePage === 10) {
                            return
                        } else {
                            setPokePage(pokePage - pokePage + 10)
                        }
                    }}
                    className="go-back"
                >
                    Voltar ao topo
                </a>
            </div>
        </ListPokesStyle>
    )
}
