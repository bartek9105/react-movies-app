import { useFetch } from '../hooks/useFetch'
import { MoviesList } from '../components/MoviesList'

export const Home = () => {
  const { data: topRatedMovies } = useFetch('top_rated')
  const { data: upcomingMovies } = useFetch('upcoming')
  const { data: popularMovies } = useFetch('popular')

  return (
    <div className="max-w-screen-2xl mx-auto pt-8">
      <MoviesList movies={topRatedMovies} title="Top rated" />
      <MoviesList movies={upcomingMovies} title="Upcoming" />
      <MoviesList movies={popularMovies} title="Popular" />
    </div>
  );
}