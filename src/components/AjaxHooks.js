import React, { useState, useEffect } from "react";
import { getPokemons } from "../routes/data";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default function AjaxHooks() {
  const [pokemon, setPokemon] = useState([]);



  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url),
        json = await res.json();
      //console.log(json);

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();

        //console.log(json);
        let pokemons = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemon((pokemon) => [...pokemon, pokemons]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []); 

  return (
    <>
      <h2>Peticiones Asíncronas en Hooks</h2>
      {pokemon.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemon.map((el) => (
          <>
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          </>
        ))
      )}
    </>
  );
}
