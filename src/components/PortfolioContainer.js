import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, clickHandler }) {
  const portfolioList = portfolio.map((stock, index) => 
  <Stock 
    key={index}
    name={stock.name}
    ticker={stock.ticker}
    price={stock.price}
    inPortfolio={true}
    clickHandler={clickHandler}
  />
)

  return (
    <div>
      <h2>My Portfolio</h2>
        {portfolioList}
    </div>
  );
}

export default PortfolioContainer;
