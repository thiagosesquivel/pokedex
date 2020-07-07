import React, { useEffect, useState } from "react";

import "animate.css";
import GlobalStyle from "./globalStyle";
import Main from "./pages/Main/";
import { getAllPokemon, getPokemon } from "./services/api";
import CartProvider from "./components/Context/Cart";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=807";

  useEffect(() => {
    async function getData() {
      let response = await getAllPokemon(url);
      await loadPokemon(response.results);
    }
    getData();
  }, []);

  const loadPokemon = async (data) => {
    let pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        const price = Math.random() * 10;
        let pokemonToRecord = await getPokemon(pokemon);
        const { id, name, types, sprites } = pokemonToRecord;
        return { id, name, types, sprites, price };
      })
    );

    setPokemon(pokemonData);
  };

  return (
    <>
      <GlobalStyle />
      <CartProvider>
        <Main pokemons={pokemon} />
      </CartProvider>
    </>
  );
}

export default App;
