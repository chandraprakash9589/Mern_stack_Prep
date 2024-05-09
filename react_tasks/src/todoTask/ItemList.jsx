import React, { useState } from "react";
import "./../App.css";
const ItemList = ({
  text,
  completed,
  id,
  handleCompleted,
  deleteTodo,
  updateText,
}) => {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(text);

  return (
    <div className="item">
      <div className="circle" onClick={() => handleCompleted(id)}>
        {" "}
        {completed ? <span>&#x2713;</span> : ""}
      </div>
      <div
        className={completed ? "strike" : ""}
        onDoubleClick={() => {
          if (!completed) {
            setEdit(true);
          }
        }}
      >
        {edit ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={() => {
              setEdit(false);
              updateText(id, editText);
            }}
          />
        ) : (
          text
        )}
      </div>
      <div onClick={() => deleteTodo(id)} className="close">
        X
      </div>
    </div>
  );
};

export default ItemList;
