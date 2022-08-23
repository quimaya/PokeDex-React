import { useEffect, useState } from "react";
import "./App.css";
import {axios} from "axios"

import React from 'react'
import PokeCard from './components/PokeCard';



const App = () => {

  const [pokemon, setPokemon] = useState(null)
  const [keyword, setKeyword] = useState ("")

  const searchPokemon = async () => {
    const raw =     
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${keyword}`)
    setPokemon(raw.data)
  }

  useEffect(() => {}, [keyword]
  )

  return (

    <div className="Recuperador">

    <h1>¡Recupera tu Pokemon!</h1>

    <input onChange= {() => 
      setKeyword(search.value)} type='text' id='search'/>
    <button onClick={()=>searchPokemon}>Buscador de Pokemon</button>
    <button onClick={()=>setPokemon(null) && setKeyword("")}>RESET</button>
    <PokeCard pokemon = {pokemon}/>
     

    </div>
  
  )
}

export default App;