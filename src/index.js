//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Videogames</h1>
    <ul>
      <li>Assassin's Creed: Origins</li>
      <li>The Witcher 3: Wild Hunt</li>
      <li>Yakuza: 0</li>
    </ul>
  </div>,
  document.getElementById("root")
);
