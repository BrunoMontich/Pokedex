import React, { useEffect, useState } from "react";
import axios from "axios";

import "./index.css";
import Pokemon from "../../components/Pokemon";
import SearchBar from "../../components/SearchBar";

function PokeInfo() {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      setPokes(
        data.results.map((poke, id) => ({
          ...poke,
          id: id + 1,
        }))
      );
    };
    fetchPokemons();
  }, []);

  const [search, setSearch] = useState("");

  return (
    <>
      {pokes && (
        <>
          <SearchBar setSearch={setSearch} />
          <div className="pokemon-container">
            <div className="pokemon-list-container">
              {pokes
                .filter((val) => {
                  if (search === "") {
                    return val;
                  } else if (
                    val.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((poke) => (
                  <Pokemon name={poke.name} id={poke.id} />
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PokeInfo;
