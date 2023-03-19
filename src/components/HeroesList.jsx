import React, { useContext } from "react";
import { HttpHeroesContext } from "../providers/HttpHeroesProvider";
import HeroesCard from "./HeroesCard";

import "../scss/HeroesList.scss";

function HeroesList() {
  const heroesCtx = useContext(HttpHeroesContext);

  return (
    <div className="heroes-list">
      {heroesCtx.heroList?.results &&
        heroesCtx.heroList.results.map((hero, index) => (
          <HeroesCard obj={hero} key={index}></HeroesCard>
        ))}
    </div>
  );
}

export default HeroesList;
