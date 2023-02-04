import React, { useState } from "react";
import ToDoList from "./ToDoList";
const App = () => {
  const [inputeList, setInputList] = useState("");
  const [items, setItems] = useState([ ])

  const itemEvents = (event) => {
    setInputList(event.target.value);
  };

  const listOfItem = () => {
    setItems((oldItem) => {
      return [...oldItem,inputeList];
    })
    setInputList("")
  }

  const deleteItem = (id) => {
    setItems((oldItem) => {
      return oldItem.filter((arrEle, index)=>{
        return index !== id
      })
    })
    setInputList("")
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> ToDo List </h1>
          <input type="text"
           placeholder="Add a Item"
           value={inputeList }
           onChange={itemEvents} 
           
           />
          <button onClick={listOfItem}> + </button>
          <ol>   
           { items.map((itemVal,index) => {
            return(
              <ToDoList
              key = {index}
              id = {index}
              text = {itemVal}
              onSelect= {deleteItem}
              />
            )} )}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;