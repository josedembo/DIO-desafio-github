import React from "react";
import Item from "./components/Item";
import Card from "./components/Card";

// const color = (color) => `list-group-item list-group-item-action list-group-item-${color}`;

const App = () => {
  return (
    <div >
      <h1>My firts aplication with react</h1>
      <p>Primeiro paragrafo</p>
      <ul>
        <Item>
          item 1
        </Item>
        <Item>
          item 2
        </Item>
        <Item>
          <strong>Item 3</strong>
        </Item>
        <br />
        <Card />
      </ul>
    </div>
  );
}

export default App;
