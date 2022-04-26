import { useEffect, useState } from "react"
import { ListPokesStyle } from "./liststyle"
import { PokeCard } from "./PokeCard"

interface Dados {
    url: string
    id: number
}

export function ListPokes() {
    const [PokeDados, setPokeDados] = useState<Dados[]>([])
    const [PokePage, setPokePage] = useState<number>(0)

    useEffect(() => {
        fetch(
            `https://pokeapi.co/api/v2/pokemon/?limit=30&offset=${PokePage}`
        ).then((response) =>
            response.json().then((data) => setPokeDados(data.results))
        )
    }, [PokePage])

    return (
        <ListPokesStyle>
            <div className="container-pokes">
                {PokeDados.map((pokedado, index) => {
                    return <PokeCard key={index} dados={pokedado} />
                })}
                <button onClick={() => setPokePage(PokePage + 10)}>
                    Próxima Página
                </button>
            </div>
        </ListPokesStyle>
    )
}
