import React from 'react'

const PokeCard = ({pokemon}) => {
  return (
    <div>

        {pokemon !== null ? (
            <div>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                <h3> {pokemon.height} </h3>

            </div>): (<h2>Choose Pokemon</h2>)
        }
    </div>
  )
}

export default PokeCard