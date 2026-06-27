import React, { use } from 'react'
import img1 from '../assets/bulbasaur.png'
import img2 from '../assets/buterflay.png'
import img3 from '../assets/ivysaur.jpeg'
import img4 from '../assets/metapod.png'
import img5 from '../assets/weedle.png'
import img6 from '../assets/venusaur.png'

import styles from '../styles/Pokemons.module.css'

function Pokemons() {

  const pokemons = [
    {photo: img1,
      name: 'Bulbasaur'
    },
    {photo: img2,
      name: 'Butterflay'
    },
    {photo: img3,
      name: 'Ivysaur'  
    },
    {photo: img4,
      name: 'Metapod'
    },
    {photo: img5,
      name: 'Weedle'
    },
    {photo: img6,
      name: 'Venusaur'
    }
  ]



  
  return (
    <div className={styles.container}>
      <div className={styles.pokemons}>
        {pokemons.map((pokemon, index) => (
          <div key={index} className={styles.pokemon}>
            <img src={pokemon.photo} alt={pokemon.name} className={styles.img} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pokemons