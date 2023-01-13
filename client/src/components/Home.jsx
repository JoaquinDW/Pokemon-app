/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPokemons,
  filterByType,
  filterCreated,
  orderByName,
  orderByAttack,
} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import Detail from "./Detail";
import styles from "./styles/Home.module.css";
import Loading from "./Loading";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState("");
  const [orderAttack, setOrderAttack] = useState("");
  const [pokemonsPP, setPokemonsPP] = useState(12);
  const [isLoading, setIsLoading] = useState(true);
  const lastPokemonIndex = currentPage * pokemonsPP;
  const firstPokemonIndex = lastPokemonIndex - pokemonsPP;
  const currentPokemons = allPokemons.slice(
    firstPokemonIndex,
    lastPokemonIndex
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
    setIsLoading(false);
    console.log(currentPokemons);
  }, [dispatch]);

  function handleFilterType(e) {
    e.preventDefault();
    dispatch(filterByType(e.target.value));
  }

  function handleFilterCreated(e) {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
  }
  function handleFilterOrder(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`);
  }
  function handleFilterAttack(e) {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
    setOrderAttack(`Ordered ${e.target.value}`);
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.nav}>
          <h1 className={styles.title}>The pokedex</h1>
          <button className={styles.button}>
            <Link to="/pokemon" className={styles.link}>
              Create a pokemon
            </Link>
          </button>

          <div className={styles.selectContainer}>
            <select
              onChange={(e) => handleFilterOrder(e)}
              className={styles.select}
            >
              <option value="">Order by Name</option>
              <option value="asc">Ascending order</option>
              <option value="desc">Descending order</option>
            </select>

            <select
              onChange={(e) => handleFilterAttack(e)}
              className={styles.select}
            >
              <option value="">Order by Attack</option>
              <option value="strong">+ Attack</option>
              <option value="weak">- Attack</option>
            </select>

            <select
              onChange={(e) => handleFilterType(e)}
              className={styles.select}
            >
              <option value="all">All types</option>
              <option value="normal">Normal</option>
              <option value="fighting">Fighting</option>
              <option value="flying">Flying</option>
              <option value="poison">Poison</option>
              <option value="ground">Ground</option>
              <option value="rock">Rock</option>
              <option value="bug">Bug</option>
              <option value="ghost">Ghost</option>
              <option value="steel">Steel</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="grass">Grass</option>
              <option value="electric">Electric</option>
              <option value="psychic">Psychic</option>
              <option value="ice">Ice</option>
              <option value="dragon">Dragon</option>
              <option value="dark">Dark</option>
              <option value="fairy">Fairy</option>
              <option value="unknown">Unknown</option>
              <option value="shadow">Shadow</option>
            </select>

            <select
              onChange={(e) => handleFilterCreated(e)}
              className={styles.select}
            >
              <option value="all">All pokemons</option>
              <option value="api">Existing</option>
              <option value="created">Created</option>
            </select>
          </div>

          <div>
            <SearchBar />
          </div>
        </div>

        <Paginado
          pokemonsPP={pokemonsPP}
          allPokemons={allPokemons.length}
          paginado={paginado}
        />

        <div className={styles.cardContainer}>
          <div className={styles.cards}>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {currentPokemons.map((el) => {
                  <div className={styles.cards}>
                    <Link to={`/pokemons/${el.id}`} className={styles.link}>
                      <Card
                        name={el.name}
                        sprite={el.sprite}
                        types={el.types}
                        key={el.id}
                        className={styles.cards}
                      />
                    </Link>
                  </div>;
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
