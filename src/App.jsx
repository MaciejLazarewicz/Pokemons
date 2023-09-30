import Header from './assets/Header';
import { Box, Button } from '@chakra-ui/react';
import InputBar from './assets/Input';
import { useEffect, useState } from 'react';
import PokemonThumb from './assets/PokemonThumb';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function App() {
  // Całość ligiki najlepiej byłoby przenieść do hooka usePokemons, a tutaj zostawić tylko renderowanie
  // A najlepiej to w ogóle samo pobieranie danych przenieść do osobnego pliku, potem użyć tego pobierania w hooku usePokemons i wtedy masz wszystko podzielone zgodnie z zasadami
  const [allPokemons, setAllPokemons] = useState([]);

  const [currentPage, setCurrentPage] = useState(
    'https://pokeapi.co/api/v2/pokemon'
  );

  const [prevPage, setPrevPage] = useState();

  const getAllPokemons = async () => {
    const res = await fetch(currentPage);

    const data = await res.json();

    console.log(data);

    setAllPokemons([]);

    setCurrentPage(data.next);

    setPrevPage(data.previous);

    // nie musisz tak tego robić, masz podane url każdego pokemona w data.results
    async function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }

    createPokemonObject(data.results);
    // awaitować musisz tylko async rzeczy, a nie wszystko
    // await console.log(allPokemons);
  };
  const handleNextPage = () => {
    getAllPokemons(currentPage);
  };
  const handlePrevPage = () => {
    getAllPokemons(prevPage);
  };

  // do sortowania liczb nie musisz przekazywać callbacka, możesz po prostu allPokemons.sort(); i masz od najmniejszego do największego numeru
  allPokemons.sort((a, b) => (a.id > b.id ? 1 : -1));

  useEffect(() => {
    getAllPokemons(currentPage);
  }, []);

  return (
    <Box display="flex" flexDir="column" gap={20} bgColor=" #F3F3F3">
      <Header />
      <InputBar />
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={handlePrevPage}>
          <ChevronLeftIcon />
        </Button>

        <Button onClick={handleNextPage}>
          <ChevronRightIcon />
        </Button>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(4,1fr)"
        justifyItems="center"
        width="100%"
      >
        {/* możesz jeszcze bardziej wyciągnąć dane z pokemon */}
        {/* {allPokemons.map((pokemon: {name, sprites, id}, index) => ({...})} */}
        {allPokemons.map((pokemon, index) => (
          <PokemonThumb
            key={index}
            id={pokemon.id}
            image={pokemon.sprites.other.dream_world.front_default}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
          />
        ))}
      </Box>
    </Box>
  );
}

export default App;
