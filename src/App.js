import { Navbar } from './components/Navbar'
import { useFetch } from './hooks/useFetch'
import { MoviesList } from './components/MoviesList'

const url = 'https://api.themoviedb.org/3/movie/popular?api_key=804c3863f43ac032ec694ff81f291705&language=en-US&page=1'


function App() {
  const { data } = useFetch(url)

  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto pt-16">
        <MoviesList movies={data} />
      </div>
    </>
  );
}

export default App;
