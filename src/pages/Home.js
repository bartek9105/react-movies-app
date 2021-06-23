import { useFetch } from '../hooks/useFetch'
import { MoviesList } from '../components/MoviesList'

export const Home = () => {
  const { data: topRatedMovies, loading: loadingTopRated } = useFetch('top_rated')
  const { data: upcomingMovies, loading: loadingUpcoming } = useFetch('upcoming')
  const { data: popularMovies, loading: loadingPopular } = useFetch('popular')
  return (
    <div className="max-w-screen-2xl mx-auto pt-8">
      <MoviesList {...topRatedMovies} title="Top rated" loading={loadingTopRated} />
      <MoviesList {...upcomingMovies} title="Upcoming" loading={loadingUpcoming} />
      <MoviesList {...popularMovies} title="Popular" loading={loadingPopular} />
    </div>
  );
}