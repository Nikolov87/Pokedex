import React, { useState } from 'react'
const CaughtPokemon = () => {
const pokemonNames = ["Eevee", "Butterfree", "Pikachu", "Ditto"];
const random = Math.floor(Math.random() * pokemonNames.length);
 const [count, setCount] = useState(0);
 // eslint-disable-next-line no-unused-vars
 const [num,setNum]=useState(0)
 const clickButton=()=>{
     setCount(count+1);
     setNum(random)
     }
  const date = new Date().toLocaleDateString();
  return (
  <div>
  <p>Caught {count} Pokemon on {date} </p>
  <button onClick={clickButton} >Click</button>
  <ul>
         {
             <li>
                 {pokemonNames[random]}
             </li>
         }
  </ul>
  </div>
  )
};
export default CaughtPokemon