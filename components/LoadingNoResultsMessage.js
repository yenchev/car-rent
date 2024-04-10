import React from "react";

const LoadingNoResultsMessage = ({ loading, noResults }) => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        fontSize: "18px",
        color: "#37474F",
      }}
    >
      {loading && <p style={{ color: "#2196F3" }}>Loading...</p>}
      {noResults && <p style={{ color: "#F44336" }}>No results found.</p>}
    </div>
  );
};

export default LoadingNoResultsMessage;
