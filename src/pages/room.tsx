import { useParams } from "react-router-dom"

export function Room() {
    const params = useParams()

    console.log(params)
    return (
        <h1>Room</h1>
    )
}