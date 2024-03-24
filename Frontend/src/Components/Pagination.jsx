import React from 'react';
import './Pagination.css'; // Import the CSS file for styling

const Pagination = ({ totalPages }) => {
  const pages = [];

  // Create an array of page numbers
  for (let i = 1; i <= totalPages; i++) {
    pages.push(<span key={i} className="page">{i}</span>);
  }

  return (
    <div className="pagination">
      {pages}
    </div>
  );
};

export default Pagination;
