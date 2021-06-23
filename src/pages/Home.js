import { useFetchMoviesType } from '../hooks/useFetch'
import { MoviesList } from '../components/MoviesList'

export const Home = () => {
  const { data: topRatedMovies, loading: loadingTopRated } = useFetchMoviesType('top_rated')
  const { data: upcomingMovies, loading: loadingUpcoming } = useFetchMoviesType('upcoming')
  const { data: popularMovies, loading: loadingPopular } = useFetchMoviesType('popular')
  return (
    <div>
      <MoviesList {...topRatedMovies} title="Top rated" loading={loadingTopRated} />
      <MoviesList {...upcomingMovies} title="Upcoming" loading={loadingUpcoming} />
      <MoviesList {...popularMovies} title="Popular" loading={loadingPopular} />
    </div>
  );
}