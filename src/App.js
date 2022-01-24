import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TableCoins from "./components/TableCoins";
import FormCoin from "./components/FormCoin";

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3001/crypto"
      );
      setCoins(res.data);
    } catch (error) {
      console.error(error);
    }
  };


  const mostrardatos = () => {
    getData();
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">

      <div className="row">
        <FormCoin hijofuncion={mostrardatos}/>
      </div>

      <div className="row">
        <input
          type="text"
          placeholder="Buscar moneda"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          onChange={(e) => setSearch(e.target.value)}
        />

        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
