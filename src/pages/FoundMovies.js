import { Link, useParams, useLocation } from "react-router-dom"
import { useFetchMoviesByGenreId } from "../hooks/useFetch"
import { Star } from "react-feather"

export const FoundMovies = () => {
  const { id } = useParams()
  const { state: routerProps } = useLocation()
  const { data, loading } = useFetchMoviesByGenreId(id)

  const imgUrl = `http://image.tmdb.org/t/p/w92`
  return (
    <>
      <div className="font-bold text-xl text-white mb-16">Movies found for "{routerProps.genreName}" genre</div>
      {!loading &&
        <ul className="text-white">
          {data.results.map(movie => (
            <Link to={`/movie/${movie.id}`}>
              <li className="flex mb-8 bg-gray-700 p-4 hover:bg-gray-800 transition delay-100 ease-in-out cursor-pointer">
                <img src={`${imgUrl}${movie.poster_path}`} alt={movie.title} className="mr-8 rounded-md" />
                <div className="flex flex-col justify-between">
                  <h2 className="font-bold text-lg">{movie.title}</h2>
                  <p className="text-gray-300">{movie.overview}</p>
                  <div className="flex text-gray-300">
                    <span className="mr-4">{movie.release_date}</span>
                    <span className="flex items-center">
                      <Star className="text-yellow-500 mr-2" size={16} />
                      {movie.vote_average}
                    </span>
                  </div>

                </div>
              </li>
            </Link>
          ))}
        </ul>}
    </>
  )
}