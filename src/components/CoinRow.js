import React from "react";

const CoinRow = ({ coin, index }) => {
  return (
    <tr>
      <td className="text-muted">{index}</td>

      <td>
        <img
          src="https://cdn-icons-png.flaticon.com/128/5968/5968260.png"
          alt=""
          className="img-fluid me-2"
          style={{ width: "25px" }}
        />
        <span>{coin.nombre}</span>
        <span className="ms-3 text-muted">{coin.symbol}</span>
      </td>

      <td>${coin.usd}</td>
    </tr>
  );
};

export default CoinRow;
