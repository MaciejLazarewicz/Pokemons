import { useState } from 'react'

export const useFetch = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const fetchData = (url) => {
    setData([])
    setIsLoading(true)

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
      .catch(() => {
        setData([])
        setIsError(true)
        setIsLoading(false)
      })
  }

  return { data, isLoading, isError, fetchData }
}
