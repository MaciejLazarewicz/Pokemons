import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'

const PokemonStats = ({ id, name, image, type }) => {
  const [stats, setStats] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/stat')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setStats(data.results)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>Stat List</h1>
      <ul>
        {stats.map((stats, base_stat) => (
          <li key={stats.name}>
            {stats.name}
            {base_stat}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonStats
