import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

import '../scss/HeroesCard.scss'

function HeroesCard(props) {
  const themeCtx = useContext(ThemeContext)

  return (
    <div className={`card-item ${themeCtx.theme ? "" : "dark"}`}>
      <img alt='123' src={props.obj.image}></img>
      <p className={`card-inf  ${themeCtx.theme ? "" : "dark"}`}>{props.obj.name}</p>
      <p className={`card-inf  ${themeCtx.theme ? "" : "dark"}`}>Species: {props.obj.species}</p>
      <p className={`card-inf  ${themeCtx.theme ? "" : "dark"}`}>Status: {props.obj.status}</p>
    </div>
  );
}

export default HeroesCard;
