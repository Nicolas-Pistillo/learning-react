import { useParams } from "react-router-dom"

export default function SaludoName() {

    const params = useParams();

    return (
        <>
            <h1>Hola mundo!! saludando a {params.name}</h1>
        </>
    )
}