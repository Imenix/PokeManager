import React from "react";
import Pokemon from "./Pokemon";
import { useState } from "react";

const PokemonCard = ({ addPokemon, id, name, image, nickname, setTeam }) => {
  const selectPokemon = (id, name, image) => {
    const promptNickname = window.prompt("Select a Nickname");
    setTeam((prevProps) => [
      ...prevProps,
      {
        id: id,
        name: name,
        image: image,
        nickname: promptNickname,
      },
    ]);
  };

  const removePokemon = (nickname) => {
    setTeam((prevProps) =>
      prevProps.filter((pokemon) => pokemon.nickname !== nickname)
    );
  };

  return (
    <div className="pokemon-card">
      <h1># {id}</h1>
      <h2>{name}</h2>
      {nickname ? <h2>{nickname}</h2> : <span></span>}
      <img src={image} alt={name} />
      {addPokemon ? (
        <button onClick={() => selectPokemon(id, name, image)}>
          Add to Team
        </button>
      ) : (
        <button onClick={() => removePokemon(nickname)}>
          Remove from Team
        </button>
      )}
    </div>
  );
};

export default PokemonCard;
