import React from "react";

function Tablerow({ data }) {
    return (
      <tr>
        <td>{data.name}</td>
        <td>{data.id}</td>
        <td>
          <img src={data.image} alt={data.name} style = {{width:"30px", height: "30px"}} />
        </td>
        <td>{data.symbol}</td>
        <td>{data.current_price}</td>
        <td>{data.total_volume}</td>       
      </tr>
      
    );
  }
  
  export default Tablerow;
  