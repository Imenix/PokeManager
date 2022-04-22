import React from "react";
import { useState } from "react";
import PokemonCard from "./PokemonCard";
import Pokemon from "./Pokemon";

const Team = ({ team, setTeam }) => {
  return (
    <div className="team-page">
      <h1>Team!</h1>
      <div className="team-container">
        {team.map((pokemon, index) => (
          <PokemonCard
            key={index}
            addPokemon={false}
            setTeam={setTeam}
            {...pokemon}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
