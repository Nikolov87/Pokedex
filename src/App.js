// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



import React from "react";
import BestPokemon from "./BestPokemon";
import CaugthPokemon from "./CaugthPokemon";

import Logo from "./newLogo";
const App = () => {
  return (
    <div>
      <Logo />
      <button onClick={alert("Hello World")}>Test Button</button>
      <BestPokemon />
      <CaugthPokemon />
    </div>
  );
};

// const Logo = () => {
//   const appName = "Some Pokedox :)"
//   return (
//     <header>
//       <h1>{appName}</h1>
//       <img
//         src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/176.png"
//         alt="pokedex"
//       ></img>
//     </header>
//   );
// };






export default App;
