import "./index.css";
import serachicon from "././././assets/search.png";
import Hp from "././././assets/heart.png";
import Attack from "././././assets/swords.png";
import Defense from "././././assets/shield (1).png";
import SAttack from "././././assets/swords (1).png";
import SDefense from "././././assets/shield.png";
import Speed from "././././assets/speed.png";

import ProgressBar from "./ProgressBar";
import axios from "axios";
import { useState } from "react";

function App() {
  const [name, setName] = useState();

  const [pokemon, setPokemon] = useState({
    name: "Pikachu",
    type: "Electric",
    hp: 10,
    attack: 20,
    defense: 30,
    specialAttack: 40,
    specialDefense: 50,
    speed: 60,
    image:
      "https://i.pinimg.com/originals/bf/95/34/bf953419d76bf747cba69b55e6e03957.png",
  });

  const handleClick = () => {
    if (name !== "") {
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
      axios
        .get(apiUrl)
        .then((result) => {
          let imagePath = "";
          if (result.data.forms[0].name == "bulbasaur") {
            imagePath =
              "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png";
          } else if (result.data.forms[0].name == "bayleef") {
            imagePath =
              "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/153.png";
          } else if (result.data.forms[0].name == "heracross") {
            imagePath =
              "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIRPztlPfX7qfqg62haSM-qcL8OClGLjzOlfpdR2Y5VlhgjaQ1h5z32PscrdMFRuwZco1YQMM4Sh-XIaPBqdkQ6QUDjvIls61Sayd9R7_OeF1bv-9-l2uktbHOQAgJPxO2Hp-7UTavQLs/s1600/Mega-Heracross.jpg";
          } else if (result.data.forms[0].name == "lapras") {
            imagePath = "https://img.pokemondb.net/artwork/large/lapras.jpg";
          } else if (result.data.forms[0].name == "pidgeot") {
            imagePath =
              "https://i.pinimg.com/736x/1b/ed/d3/1bedd363aaaea550a3ae9392c2c6d690.jpg";
          } else if (result.data.forms[0].name == "snorlax") {
            imagePath =
              "https://upload.wikimedia.org/wikipedia/en/3/3f/Pok%C3%A9mon_Snorlax_art.png";
          } else if (result.data.forms[0].name == "squirtle") {
            imagePath =
              "https://www.open24.lt/images/galleries/1684240719_10010048-001-alt100.jpg";
          } else if (result.data.forms[0].name == "charizard") {
            imagePath =
              "https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png";
          } else {
            imagePath =
              "https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/800px-0025Pikachu.png";
          }
          const stats = result.data.stats;
          console.log("Fetched Data:", result.data);
          setPokemon({
            ...pokemon,
            name: result.data.forms[0].name,
            type: result.data.types[0].type.name,
            hp: stats[0].base_stat,
            attack: stats[1].base_stat,
            defense: stats[2].base_stat,
            specialAttack: stats[3].base_stat,
            specialDefense: stats[4].base_stat,
            speed: stats[5].base_stat,
            image: imagePath,
          });
        })
        .catch((err) => console.log("Error fetching data:", err));
    }
  };

  const testData = [
    { completed: pokemon.hp },
    { completed: pokemon.attack },
    { completed: pokemon.defense },
    { completed: pokemon.specialAttack },
    { completed: pokemon.specialDefense },
    { completed: pokemon.speed },
  ];
  return (
    <>
      <div>
        <div className="Header">
          <img
            className="Img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/538px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Logo"
          />
          <input
            className="Input"
            type="text"
            name="Pokemon Name"
            placeholder="Search Your Pokemon"
            onChange={(e) => setName(e.target.value)}
          />
          <button className="SearchIcon" onClick={handleClick}>
            <img src={serachicon} alt="Serach Button Icon" />
          </button>
        </div>
        <div className="Parent">
          <div className="Section1">
            <img
              className="PokemonImage"
              src={pokemon.image}
              alt="Pokemon Image"
            />
            <h3 className="head">{pokemon.name}</h3>
            <p className="head">Pokemon Type: {pokemon.type}</p>
          </div>
          <div className="Section2">
            <div className="SubSection">
              <img src={Hp} alt="icon" />
              {/*Replace it with Progress Bar*/}
              <p className="paragrapgh">Hp:{pokemon.hp}</p>
            </div>
            <div className="SubSection">
              <img src={Attack} alt="icon" />
              {/*Replace it with Progress Bar*/}
              <p className="paragrapgh">Attack:{pokemon.attack}</p>
            </div>
            <div className="SubSection">
              <img src={Defense} alt="icon" />
              {/*Replace it with Progress Bar*/}
              <p className="paragrapgh">Defense:{pokemon.defense}</p>
            </div>
            <div className="SubSection">
              <img src={SAttack} alt="icon" />
              {/*Replace it with Progress Bar*/}
              <p className="paragrapgh">
                Special Attack:{pokemon.specialAttack}
              </p>
            </div>
            <div className="SubSection">
              <img src={SDefense} alt="icon" />
              {/*Replace it with Progress Bar*/}
              <p className="paragrapgh">
                Special Defense:{pokemon.specialDefense}
              </p>
            </div>
            <div className="SubSection">
              <img src={Speed} alt="icon" />
              {/*Replace it with Progress Bar*/}
              <p className="paragrapgh">Speed:{pokemon.speed}</p>
            </div>
            <div className="App">
              {testData.map((item, idx) => (
                <ProgressBar key={idx} completed={item.completed} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
