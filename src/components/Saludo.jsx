import { useContext } from "react"
import { UserContext } from "../context/UserContext"

export default function Saludo() {

    const usuario = useContext(UserContext)

    return (
        <>
            <h1>Hola mundo!! saludando al usuario {usuario?.name} </h1>
        </>
    )
}