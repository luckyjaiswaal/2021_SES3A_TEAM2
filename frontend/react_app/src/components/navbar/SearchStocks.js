/*import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import rows from '../stocklist/index.js';

const SearchStocks = (props) => {

    const [input, setInput] = useState('');
    const [stockListDefault, setStockListDefault] = useState();
    const [stockList, setStockList] = useState();
  
    const getData = async () => {
      return setStockList(rows),setStockListDefault(rows);
    }
  
    const updateInput = async (input) => {
       const filtered = stockListDefault.filter(stock => {
        return stock.toLowerCase().includes(input.toLowerCase())
       })
       setInput(input);
       setStockList(filtered);
    }
  
    useEffect( () => {getData()},[]);
  
    return (
        <>
          <h1>Search for Stocks</h1>
          <SearchBar 
           input={input} 
           onChange={updateInput}
          />
          <rows stockList={stockList}/>
        </>
       );
    }
    
    export default SearchStocks*/