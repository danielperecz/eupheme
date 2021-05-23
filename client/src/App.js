import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  const apiUrl = "http://localhost:3001/api"
  const apiCall = async () => {
    const response = await axios.get(apiUrl);
    setData(response.data.message);
  }

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          {data}

        </p>
      </header>
    </div>
  );
}

export default App;
