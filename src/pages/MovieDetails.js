import { useParams } from "react-router-dom"
import { useFetch } from '../hooks/useFetch'

export const MovieDetails = () => {
  const { id } = useParams()
  const { data } = useFetch(id)
  return (
    <h1 className="text-white">{data.title}</h1>
  )
}