import { Navbar } from './components/Navbar'
import { useFetch } from './hooks/useFetch'
import { MoviesList } from './components/MoviesList'

function App() {
  const { data: topRatedMovies } = useFetch('top_rated')
  const { data: upcomingMovies } = useFetch('upcoming')
  const { data: popularMovies } = useFetch('popular')

  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto pt-16">
        <MoviesList movies={topRatedMovies} title="Top rated" />
        <MoviesList movies={upcomingMovies} title="Upcoming" />
        <MoviesList movies={popularMovies} title="Popular" />
      </div>
    </>
  );
}

export default App;
