export const useSearch = async (
  searchTerm,
  setCurrentPage,
  setAllPokemons,
  getAllPokemons,
  currentPage
) => {
  await setCurrentPage('https://pokeapi.co/api/v2/pokemon?limit=20')
  setAllPokemons([])
  if (searchTerm.trim() !== '') {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
    if (res.ok) {
      const data = await res.json()
      setAllPokemons([data])
    }
  } else {
    await getAllPokemons(currentPage)
  }
}

export default useSearch
