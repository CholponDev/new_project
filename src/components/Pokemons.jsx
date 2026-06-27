import React, {  useEffect, useState } from 'react'

import styles from '../styles/Pokemons.module.css'


function Pokemons() {

  const[ pokemons, setPokemons] = useState([])

useEffect ( () => {
  const getPokemon = async () =>{
    
 const response = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=6");
  const data = await response.json();

  const updatedPokemons = data.results.map((pokemon, index)=>{
    return{
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    }
  })

  setPokemons(updatedPokemons)
  }

  getPokemon()
},[])



   return (
    <div className={styles.container}>
      {pokemons.map((pokemon, index) => (
        <div key={index} className={styles.pokemon}>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Pokemons