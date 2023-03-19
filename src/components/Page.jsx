import React, { useContext } from "react";
import HeroesList from "./HeroesList";
//F import Pagination from "./Pagination";
import PaginationClass from "./Pagination";

import { ThemeContext } from "../providers/ThemeProvider";

import "../scss/Page.scss";

function Page() {
  const themeCtx = useContext(ThemeContext);

  return (
    <div className={`App ${themeCtx.theme ? "" : "dark"}`}>
      <div className="container">
        <button
          onClick={themeCtx.toggleThemeHandler}
          className={`swith-theme-btn ${themeCtx.theme ? "" : "dark-btn"}`}
        >
          Swith theme on: {themeCtx.theme ? "Dark" : "Light"}
        </button>
        <div className="wrapper">
          <HeroesList />
          <ThemeContext.Consumer>
            {(theme) => (
              <PaginationClass theme={theme}/>
            )}
          </ThemeContext.Consumer>
          {/*F <Pagination /> */}
        </div>
      </div>
    </div>
  );
}

export default Page;
