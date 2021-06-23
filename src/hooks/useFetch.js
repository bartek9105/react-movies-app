import { useEffect, useState } from "react";
import axios from 'axios'


export const useFetch = (type) => {
  const url = `https://api.themoviedb.org/3/movie/${type}?api_key=804c3863f43ac032ec694ff81f291705&language=en-US`
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const data = await axios.get(url)
    setData(data.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [type])

  return { data, loading }

}

