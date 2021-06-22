import { useEffect, useState } from "react";
import axios from 'axios'


export const useFetch = (type) => {
  const url = `https://api.themoviedb.org/3/movie/${type}?api_key=804c3863f43ac032ec694ff81f291705&language=en-US&page=1`
  const [data, setData] = useState([])

  const fetchData = async () => {
    const data = await axios.get(url)
    setData(data.data.results)
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { data }

}

