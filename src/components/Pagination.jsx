import React /*F useContext */ from "react";
import { HttpHeroesContext } from "../providers/HttpHeroesProvider";
//F import { ThemeContext } from "../providers/ThemeProvider";
import PaginationButton from "../components/ButtonsForPagination";

import "../scss/Pagination.scss";

class PaginationClass extends React.Component {
  static contextType = HttpHeroesContext;

  constructor(props) {
    super(props);

    this.nextHandler = () => {
      const next = this.context.heroList?.info?.next;
      this.context.fetchHeroes(next);
      this.context.handlePageChange(this.context.activePage + 1);
    };

    this.prevHandler = () => {
      const prev = this.context.heroList?.info?.prev;
      this.context.fetchHeroes(prev);
      this.context.handlePageChange(this.context.activePage - 1);
    };

    this.getAllPages = () => {
      let count = [];
      for (let i = 1; i <= this.context.heroList?.info?.pages; i++) {
        count.push(i);
      }
      return count;
    };
  }

  render() {
    const theme = this.props.theme.theme;
    const next = this.context.heroList?.info?.next;
    const prev = this.context.heroList?.info?.prev;

    return (
      <div className="pagination">
        <PaginationButton
          theme={theme}
          prev={prev}
          onClick={this.prevHandler}
          label="Prev"
        />
        {this.getAllPages().map((item) => (
          <div
            className={`page-num ${item === this.context.activePage ? !theme ? "dark-active " : "active" : ""}`}
            onClick={() => {this.context.handlePageChange(item)}}
            key={item}
          >
            {item}
          </div>
        ))}
        <PaginationButton
          theme={theme}
          prev={next}
          onClick={this.nextHandler}
          label="Next"
        />
      </div>
    );
  }
}


//F
// function Pagination() {
//   const heroesCtx = useContext(HttpHeroesContext);
//   const themeCtx = useContext(ThemeContext);

//   const next = heroesCtx.heroList.info?.next;
//   const prev = heroesCtx.heroList.info?.prev;

//   const nextHandler = () => {
//     heroesCtx.fetchHeroes(next);
//     heroesCtx.handlePageChange(heroesCtx.activePage + 1);
//   };

//   const prevHandler = () => {
//     heroesCtx.fetchHeroes(prev);
//     heroesCtx.handlePageChange(heroesCtx.activePage - 1);
//   };

//   const getAllPages = () => {
//     let count = [];
//     for (let i = 1; i <= heroesCtx.heroList.info?.pages; i++) {
//       count.push(i);
//     }
//     return count;
//   };

//   return (
//     <div className="pagination">
//       { <PaginationButton
//         theme={themeCtx.theme}
//         prev= {prev}
//         onClick={prevHandler}
//         label="Prev"
//       />
//       {getAllPages().map((item) => (
//         <div
//           className={`page-num ${item === heroesCtx.activePage ? !themeCtx.theme ? "dark-active " : "active" : ""}`}
//           onClick={() => {heroesCtx.handlePageChange(item)}}
//           key={item}
//         >
//           {item}
//         </div>
//       ))}
//       <PaginationButton
//         theme={themeCtx.theme}
//         prev= {next}
//         onClick={nextHandler}
//         label="Next"
//       />}
//     </div>
//   );
// }


// export default Pagination;

export default PaginationClass;
