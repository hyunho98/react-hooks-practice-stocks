import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, clickHandler }) {
  const stockList = stocks.map((stock) => 
    <Stock 
      key={stock.id} 
      name={stock.name}
      ticker={stock.ticker}
      price={stock.price}
      clickHandler={clickHandler}
    />
  )

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
