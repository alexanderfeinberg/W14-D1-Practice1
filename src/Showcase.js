import bulbImg from "./images/bulbasaur.jpg";
import "./spanStyle.css";

function Showcase() {
  const favPokemon = "Bulbasaur";
  let pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip",
  };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={bulbImg} alt="bulbasaur" />
      <h2>
        <span className="span1">{favPokemon}'s</span>
        type is {pokeCharacteristics["type"]} and one of their moves is{" "}
        <span className="span2">{pokeCharacteristics["move"]}</span>
      </h2>
    </div>
  );
}

export default Showcase;
