import { Box,Button } from '@chakra-ui/react';
import InputBar from './assets/Input';
import { useEffect, useState } from 'react';
import PokemonThumb from './assets/PokemonThumb';

import Pagination from './assets/Pagination';
import Header from './assets/Header';
import { Link,Router } from 'react-router-dom';









function App() {
  const [allPokemons, setAllPokemons] = useState([]);

  const [currentPage, setCurrentPage] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=20'
  );

  const [prevPage, setPrevPage] = useState([]);

  const [loading,setLoading] = useState(false)

  const [randomPokemon, setRandomPokemon] = useState(null)

  






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
      getAllPokemons(currentPage)
        
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
      
  
  
  const handleRandomPokemon = async () => {
    try {
      setLoading(true);
      await getAllPokemons(currentPage)
      const maxIndex = allPokemons.length
      const randomIndex = Math.floor(Math.random() * maxIndex);
      const randomPokemonData = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${allPokemons[randomIndex].name}`
      ).then((res) => res.json());
      setRandomPokemon(randomPokemonData);
    } catch (error) {
      console.error('Error fetching random Pokemon:', error);
    } finally {
      setLoading(false);
    }
  };
      
      
      

  return (
    <Box display="flex" gap={20} bgColor="#fff" flexDir="column">
      <Header />

      <InputBar onSearch={handleSearch} />

      <Box display="flex" justifyContent="flex-end" mr={20}>
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={prevPage ? handlePrevPage : null}
        />
      </Box>
      <Box
        height="150px"
        width="200px"
        bgColor="blue.100"
        margin="auto"
        flexDir="inherit"
        justifyContent="space-between"
      >
        {randomPokemon && (
          <Box
            display="flex"
            justifyContent="center"
            textTransform="capitalize"
          >
            <img
              src={randomPokemon.sprites.other.dream_world.front_default}
              alt={randomPokemon.name}
              height="100px"
            />
            <p>{randomPokemon.name}</p>
          </Box>
        )}
        <Box display="flex" justifyContent="center">
          <Link to="/" onClick={handleRandomPokemon} >
            Random Pokemon
          </Link>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        justifyItems="center"
        width="100%"
        gap="24px"
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
