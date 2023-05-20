import React, { useState, useEffect } from "react"
import Tablerow from "./Components/Tablerow";
import "./index.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Crypto Market</h1>
      
      <table className="table"> 
        <thead className="heading">
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Image</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Volume</th>
          </tr>
        </thead>
        
        <tbody className="data">
          {data.map((item) => (
            <Tablerow key={item.id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
