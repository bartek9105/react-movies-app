import { useEffect, useState } from "react";
import axios from 'axios'


export const useFetch = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const data = await axios.get(url)
    setData(data.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { data, loading }
}

export const useFetchMovieDetails = (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=804c3863f43ac032ec694ff81f291705&language=en-US`
  const { data, loading } = useFetch(url)

  return { data, loading }
}

export const useFetchMoviesType = (movieType) => {
  const url = `https://api.themoviedb.org/3/movie/${movieType}?api_key=804c3863f43ac032ec694ff81f291705&language=en-US`
  const { data, loading } = useFetch(url)

  return { data, loading }

}

export const useFetchMoviesTypeById = (movieId, movieType) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/${movieType}?api_key=804c3863f43ac032ec694ff81f291705&language=en-US`
  const { data, loading } = useFetch(url)

  return { data, loading }
}

export const useFetchMoviesByGenreId = (genreId) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=804c3863f43ac032ec694ff81f291705&language=en-US&with_genres=${genreId}`
  const { data, loading } = useFetch(url)

  return { data, loading }
}

