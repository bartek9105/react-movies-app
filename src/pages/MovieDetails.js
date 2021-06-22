import { useParams } from "react-router-dom"

export const MovieDetails = () => {
  const { id } = useParams()

  return (
    <h1 class="text-white">{id}</h1>
  )
}