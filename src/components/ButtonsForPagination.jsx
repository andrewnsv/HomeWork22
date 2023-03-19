import React from "react";

import '../scss/Pagination.scss'

function PaginationButton({ theme, prev, onClick, label, className }) {

  return (
    <button
      className={`pagination-btn ${theme ? "" : "dark-btn dark-num"} ${className}`}
      disabled={prev === null}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default PaginationButton;

