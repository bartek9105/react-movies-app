import { Link, useParams } from "react-router-dom"
import { useFetchMovieDetails, useFetchMoviesTypeById } from '../hooks/useFetch'
import { MoviesList } from "../components/MoviesList"
import { CastList } from "../components/CastList"
import { ReviewsList } from "../components/ReviewsList"

export const MovieDetails = () => {
  const { id } = useParams()
  const { data: movie, loading } = useFetchMovieDetails(id)
  const { data: similarMovies, loading: loadingSimilar } = useFetchMoviesTypeById(id, 'similar')
  const { data: recommendedMovies, loading: loadingRecommended } = useFetchMoviesTypeById(id, 'recommendations')
  const { data: cast, loading: loadingCast } = useFetchMoviesTypeById(id, 'credits')
  const { data: reviews, loading: loadingReviews } = useFetchMoviesTypeById(id, 'reviews')
  const imgUrl = `http://image.tmdb.org/t/p/w342${movie.poster_path}`
  if (!loading && !loadingSimilar && !loadingRecommended && !loadingCast && !loadingReviews) {
    return (
      <>
        <section className="flex text-gray-100 mb-16">
          <img src={imgUrl} alt={movie.title} className="mr-12" />
          <div>
            <div className="flex mb-2">
              <h1 className="font-bold text-2xl mr-6">{movie.title}</h1>
              <Link to={{
                pathname: `/movies/genre/${movie.genres[0].id}`,
                state: { genreName: movie.genres[0]?.name }
              }} className="inline-block bg-gray-700 px-4 py-1 rounded-xl">{movie.genres[0]?.name}</Link>
            </div>
            <p className="text-gray-300 mb-8">{movie.tagline}</p>
            <h3 className="font-bold text-lg mb-4">Overview</h3>
            <p className="text-gray-300">{movie.overview}</p>
            <div className="mt-8">
              <div className="mb-4">
                <span className="font-bold mr-2">Budget: </span>
                <span>{movie.budget}</span>
              </div>
              <div className="mb-4">
                <span className="font-bold mr-2">Original language: </span>
                <span>{movie.original_language}</span>
              </div>
              <div className="mb-4">
                <span className="font-bold mr-2">Popularity: </span>
                <span>{movie.popularity}</span>
              </div>
              <div className="mb-4">
                <span className="font-bold mr-2">Release date: </span>
                <span>{movie.release_date}</span>
              </div>
              <div className="mb-4">
                <span className="font-bold mr-2">Revenue: </span>
                <span>{movie.revenue}</span>
              </div>
              <div className="mb-4">
                <span className="font-bold mr-2">Runtime: </span>
                <span>{movie.runtime} mins.</span>
              </div>
              <div className="mb-4">
                <span className="font-bold mr-2">Vote average: </span>
                <span>{movie.vote_average}</span>
              </div>
              <div className="mb-4">
                <span className="font-bold mr-2">Vote Count: </span>
                <span>{movie.vote_count}</span>
              </div>
            </div>
          </div>
        </section>
        <ReviewsList {...reviews} />
        <CastList {...cast} title="Cast" />
        <MoviesList {...similarMovies} title="Similar movies" loading={loadingSimilar} />
        <MoviesList {...recommendedMovies} title="Recommended movies" loading={loadingRecommended} />
      </>
    )
  }
  return (
    <p>Loading...</p>
  )
}