import { useEffect, useState } from "react";
import axios from 'axios'

export const useFetch = (url) => {
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

