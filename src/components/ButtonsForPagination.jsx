import React from "react";

import '../scss/Pagination.scss'

function PaginationButton({ theme, prev, onClick, label }) {

  return (
    <button
      className={`pagination-btn ${theme ? "" : "dark-btn dark-num"} `}
      disabled={prev === null}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default PaginationButton;

