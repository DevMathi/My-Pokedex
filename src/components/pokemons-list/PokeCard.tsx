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
    types: Type[]
}
interface Type {
    type: {
        name: string
    }
}

export function PokeCard(props: PokeCardProps) {
    const [urls, setUrls] = useState([props.dados.url])
    const [dados, setDados] = useState<DadosProps[]>([])

    useEffect(() => {
        fetch(`${urls}`).then((response) =>
            response.json().then((data) => setDados([data]))
        )
    }, [urls])

    const imgs = dados.map(({ sprites }: DadosProps) => sprites.front_default)
    const imgsUrl = imgs[0]

    return (
        <div className="card-container" data-aos="zoom-in">
            <h2>{dados.map(({ name }: DadosProps) => name)}</h2>
            <h3>N° {dados.map(({ id }: DadosProps) => id)}</h3>
            <div>
                <img
                    src={imgsUrl}
                    alt="pokemons images"
                    className="pokemons-images"
                />
            </div>
            <h2>Elementos:</h2>
            <div className="elements-container">
                {dados.map((dados: DadosProps) =>
                    dados.types.map(({ type }: Type, index) => (
                        <h3 className={type.name} key={index}>
                            {type.name}
                        </h3>
                    ))
                )}
            </div>
        </div>
    )
}
