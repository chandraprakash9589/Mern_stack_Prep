import React, { useRef, useState } from "react";
import ItemList from "./ItemList";
import "./../App.css";
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTodos([
        ...todos,
        { text: e.target.value, completed: false, id: Date.now() },
      ]);
      inputRef.current.value = "";
    }
  };
  const handleCompleted = (id) => {
    const updatedList = todos.map((e) => {
      if (e.id === id) {
        e.completed = !e.completed;
      }

      return e;
    });

    setTodos(updatedList);
  };
  const handleDelete = (id) => {
    const filter = todos.filter((e) => e.id !== id);
    setTodos(filter);
  };
  const handleUpdateText = (id, text) => {
    const updatedList = todos.map((e) => {
      if (e.id === id) {
        e.text = text;
      }
      return e;
    });
    setTodos(updatedList);
  };
  return (
    <div className="App">
      <input type="text" onKeyPress={handleKeyPress} ref={inputRef} />
      {todos.map((e) => (
        <ItemList
          {...e}
          key={e.id}
          handleCompleted={handleCompleted}
          deleteTodo={handleDelete}
          updateText={handleUpdateText}
        />
      ))}
    </div>
  );
};

export default TodoApp;
