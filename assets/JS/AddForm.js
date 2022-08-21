import { useState } from "react";

const AddForm = (props) => {
  const [name, setName] = useState("");
  
const addName = (newName) => {
    fetch("http://localhost:3000/addNames", {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify({
            name: newName
        }),
    })
}

const addNames = (newName) => {
    console.log('New Name Added: ' + newName); 
}
  return (
    <div id="formDiv">
      <form>
        <input
          placeholder="Name"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input type="file" id="fileInput" name="photo"></input>
        <button onClick={(e) => addName(name)}>
          Add Name
        </button>
      </form>
    </div>
  );
};

export default AddForm;
