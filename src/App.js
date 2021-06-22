import { Navbar } from './components/Navbar'
import { useFetch } from './hooks/useFetch'

const url = 'https://api.themoviedb.org/3/movie/popular?api_key=804c3863f43ac032ec694ff81f291705&language=en-US&page=1'


function App() {
  const { data } = useFetch(url)

  return (
    <>
      <Navbar />
      {data.map(el => el.title)}
    </>
  );
}

export default App;
