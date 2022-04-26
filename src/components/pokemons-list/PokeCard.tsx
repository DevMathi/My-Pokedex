import { useState, useEffect } from "react"

interface PokeCardProps {
    dados: {
        url: string
        id: number
    }
}

interface DadosProps {
    name: string
    id: number
    sprites: {
        front_default: string
    }
}
export function PokeCard(props: PokeCardProps) {
    const [Urls, setUrls] = useState([props.dados.url])
    const [Dados, setDados] = useState<DadosProps[]>([])

    useEffect(() => {
        fetch(`${Urls}`).then((response) =>
            response.json().then((data) => setDados([data]))
        )
    }, [Urls])

    const imgs = Dados.map((e) => e.sprites.front_default)
    const ImgsUrl = imgs[0]

    console.log(Dados)
    return (
        <div className="card-container">
            <h2>{Dados.map((e) => e.name)}</h2>
            <h3>{Dados.map((e) => e.id)}</h3>
            <div>
                <img
                    src={ImgsUrl}
                    alt="pokemons images"
                    className="pokemons-images"
                />
            </div>
            <div className="elements-container">
                <h3 className="grass">{Dados.map((e) => e.id)}</h3>
                <h3 className="poison">a</h3>
            </div>
        </div>
    )
}
