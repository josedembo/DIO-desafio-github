import React from "react";
import Item from "./components/Item"

const color = (color) => `list-group-item list-group-item-action list-group-item-${color}`;

const App = () => {
  return (
    <div className="container">
      <h1>My firts aplication of react</h1>
      <p>Primeiro paragrafo</p>
      <ul>
        <Item className={color("primary")}>
          item 1
        </Item>
        <Item className={color("secundary")}>
          item 2
        </Item>
        <Item className={color("success")}>
          <strong>Item 3</strong>
        </Item>
      </ul>
    </div>
  );
}

export default App;
