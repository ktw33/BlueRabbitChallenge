import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import React from "react";
import DisplayButton from "./DisplayButton";
import ListItems from "./ListItems";
import AddForm from "./AddForm";

const App = () => {
  const namesArray = [];

  const [list, setList] = useState([]);

  const fetchNames = () => {
    fetch("http://localhost:3000/addNames")
      .then((response) => response.json())
      .then((array) => {
        for (let i = 0; i < array.length; i++) {
          namesArray.push(array[i].name);
        }
        console.log(namesArray);
      })
      .then(() => setList(namesArray));
  };

  return (
    <div>
      <DisplayButton onClick={fetchNames} />
      <AddForm />
      {list.map((name, i) => (
        <ListItems key={i} name={name} />
      ))}
    </div>
  );
};

render(<App />, document.getElementById("root"));
