import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol: "",
      range: "1m",
      stocksData: {}
    };
  }
}

export default class App extends Component {
    render() {
      const { symbol, range, stockData } = this.state;
      return (
        <div className="App">
          <SymbolInput value={symbol} />
          <RangeButtonGroup value={range} />
          <StockChart symbol={symbol} data={stockData} />
        </div>
      );
    }
  }

  export default class App extends Component {
    handleChangeSymbol(symbol) {
      this.setState({ symbol }, this.updateStockData);
    }
  
    handleClickRange(range) {
      this.setState({ range }, this.updateStockData);
    }
  
    async updateStockData() {
      const { symbol, range } = this.state;
      if (!symbol || !range) {
        return;
      }
  
      try {
        const stockData = await fetchData(symbol, range);
        this.setState({ stockData });
      } catch (err) {
        console.error("Could not fetch stock data: ", err);
      }
    }
  }