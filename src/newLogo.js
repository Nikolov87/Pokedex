//rfce only in jsx reate new function




const Logo = () => {

  function logWhenClicked () {
    alert("Hello")
  }
  // function clickLogo() {
  //   function logWhenClicked1() {
  //     alert("Button was clicked");
  //   }
  //   return <button onClick={logWhenClicked1}>Click!!!</button>;
  // };

    const appName = "Some Pokedox :)"
    return (
      <header>
        <h1>{appName}</h1>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/176.png"
          alt="pokedex"
          onClick = {logWhenClicked}
        ></img>
        <button onClick={console.log("Hello")}>Test Button</button>
      </header>
    );
  };

  

  export default Logo;
  