import React, { createContext, useEffect, useState } from "react";

export const HttpHeroesContext = createContext();

function HttpHeroesProvider({children}) {
  const [heroList, setHeroList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {fetchHeroes(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)}, [currentPage]);

  const fetchHeroes = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => setHeroList(data))
    .catch(err => console.log('Err request'))
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  
  const getHeroesCtx = () => ({
    currentPage,
    heroList,
    fetchHeroes,
    handlePageChange
  })

  return (
    <HttpHeroesContext.Provider value={getHeroesCtx()}>
        {children}
    </HttpHeroesContext.Provider>
  )
}

export default HttpHeroesProvider;
