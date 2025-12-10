import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (pageNumber) => {
    if (onPageChange) {
      onPageChange(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <div
      style={{
        marginTop: "50px",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "0 15px",
      }}
    >
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {currentPage > 1 && (
            <li>
              <button
                type="button"
                onClick={() => handlePageClick(currentPage - 1)}
                style={{
                  padding: "10px 15px",
                  border: "2px solid #e9ecef",
                  borderRadius: "8px",
                  background: "white",
                  cursor: "pointer",
                  color: "#2b4eff",
                  fontSize: "14px",
                  fontWeight: "600",
                  minWidth: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
            </li>
          )}

          {renderPageNumbers().map((pageNumber, index) => {
            if (pageNumber === "...") {
              return (
                <li key={`dots-${index}`}>
                  <span
                    style={{
                      padding: "10px 15px",
                      color: "#6c757d",
                      fontSize: "14px",
                      fontWeight: "600",
                      minWidth: "44px",
                      height: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    ...
                  </span>
                </li>
              );
            }

            const isActive = currentPage === pageNumber;

            return (
              <li key={pageNumber}>
                <button
                  type="button"
                  onClick={() => handlePageClick(pageNumber)}
                  style={{
                    padding: "10px 15px",
                    border: isActive
                      ? "2px solid #2b4eff"
                      : "2px solid #e9ecef",
                    borderRadius: "8px",
                    background: isActive
                      ? "linear-gradient(135deg, #2b4eff 0%, #667eea 100%)"
                      : "white",
                    cursor: "pointer",
                    color: isActive ? "white" : "#2b4eff",
                    fontSize: "14px",
                    fontWeight: "700",
                    minWidth: "44px",
                    height: "44px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: isActive
                      ? "0 4px 15px rgba(43, 78, 255, 0.3)"
                      : "none",
                  }}
                >
                  {pageNumber}
                </button>
              </li>
            );
          })}

          {currentPage < totalPages && (
            <li>
              <button
                type="button"
                onClick={() => handlePageClick(currentPage + 1)}
                style={{
                  padding: "10px 15px",
                  border: "2px solid #e9ecef",
                  borderRadius: "8px",
                  background: "white",
                  cursor: "pointer",
                  color: "#2b4eff",
                  fontSize: "14px",
                  fontWeight: "600",
                  minWidth: "44px",
                  height: "44px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
