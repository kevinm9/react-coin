import React from "react";
import CoinRow from "./CoinRow";

const titles = ["#", "Moneda", "Precio"];

const TableCoins = ({ coins, search }) => {
  if (!coins.length) return <div>No hay monedas en la base de datos</div>;

  const filteredCoins = coins.filter((coin) =>
    coin.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {titles.map((title, i) => (
            <td key={i}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
