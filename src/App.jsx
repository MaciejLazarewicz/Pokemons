import { Box } from '@chakra-ui/react';
import InputBar from './assets/Input';
import { useEffect, useState } from 'react';
import PokemonThumb from './assets/PokemonThumb';

import Pagination from './assets/Pagination';
import Header from './assets/Header';





function App() {
  const [allPokemons, setAllPokemons] = useState([]);

  const [currentPage, setCurrentPage] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=20'
  );

  const [prevPage, setPrevPage] = useState([]);

  const getAllPokemons = async (url) => {
    const res = await fetch(url)
    
    const data = await res.json()

    setAllPokemons([]);
   
    setCurrentPage(data.next);
    setPrevPage(data.previous);

    if (data.results.length > 0) {
      await createPokemonObject(data.results);
    }

    console.log(allPokemons);
  }

    const createPokemonObject = async (results) => {
      const pokemonList = [];
      for (const pokemon of results) {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

      

        const data = await res.json();
        pokemonList.push(data);
      }
      
      setAllPokemons((currentList) => [...currentList, ...pokemonList]);


      
      
  };
  


  
    const handleNextPage = () => {
      getAllPokemons(currentPage);
    };
    const handlePrevPage = () => {
      getAllPokemons(prevPage);
    };



  

    useEffect(() => {
      getAllPokemons(currentPage);
    }, []);
      
    const handleSearch = async (searchTerm) => {
      setCurrentPage('https://pokeapi.co/api/v2/pokemon?limit=20');
      setAllPokemons([]);
      if (searchTerm.trim() !== '') {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
        );
        if (res.ok) {
          const data = await res.json();
          setAllPokemons([data]);
        }
      } else {
        await getAllPokemons(currentPage);
      }
    
    }
      
      
      
      

    return (
      <Box display="flex" flexDir="column" gap={20} bgColor="#ff">
        <Header />

        <InputBar onSearch={handleSearch} />

        <Box display="flex" justifyContent="flex-end" mr={20}>
          <Pagination
            handleNextPage={handleNextPage}
            handlePrevPage={prevPage ? handlePrevPage : null}
          />
        </Box>

        <Box
          display="grid"
          gridTemplateColumns="repeat(4,1fr)"
          justifyItems="center"
          width="100%"
        >
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
      


export default App
