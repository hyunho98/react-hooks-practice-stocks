import React from "react";

function Stock({ name, ticker, price, inPortfolio=false, clickHandler }) {
  return (
    <div>
      <div className="card" 
        onClick={inPortfolio ? () => clickHandler(ticker) : () => clickHandler(name, ticker, price)}
      >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`${ticker}: ${price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
