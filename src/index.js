import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <h2>
        Coded open-sourse by{" "}
        <a
          href="https://app.netlify.com/teams/margotmetzemaekers/overview"
          Margot
          Metzemaekers
        ></a>
      </h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
