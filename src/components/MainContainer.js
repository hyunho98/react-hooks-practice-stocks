import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
      .then((r) => r.json())
      .then((data) => {
        setStocks(data)
        setFilteredStocks(data)
      })
  }, [])

  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [filteredStocks, setFilteredStocks] = useState([])
  const [alphaRadio, setAlphaRadio] = useState(false)
  const [priceRadio, setPriceRadio] = useState(false)

  function onStockClick(name, ticker, price) {
    const newPortItem = {
      "name": name,
      "ticker": ticker,
      "price": price
    }

    setPortfolio([...portfolio, newPortItem])
  }

  function onPortfolioClick(ticker) {
    let i = 0;
    
    setPortfolio((portfolio.filter((stock) => {
      if (stock.ticker === ticker && i === 0) {
        i++
        return false
      }

      return true
    })))
  }

  function onAlphaRadio(e) {
    setAlphaRadio(!alphaRadio)
    if (priceRadio) setPriceRadio(false)
    setFilteredStocks(filteredStocks.sort((stock1, stock2) => (stock1.name > stock2.name ? 1 : -1)))
  }

  function onPriceRadio(e) {
    setPriceRadio(!priceRadio)
    if (alphaRadio) setAlphaRadio(false)
    setFilteredStocks(filteredStocks.sort((stock1, stock2) => stock1.price - stock2.price))
  }

  function onFilterChange(e) {
    setFilteredStocks(stocks.filter((stock) => e.target.value === stock.type))
    setAlphaRadio(false)
    setPriceRadio(false)
  }

  return (
    <div>
      <SearchBar alphaRadio={alphaRadio} priceRadio={priceRadio} handleAlphaRadio={onAlphaRadio} handlePriceRadio={onPriceRadio} handleFilterChange={onFilterChange}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} clickHandler={onStockClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} clickHandler={onPortfolioClick} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
