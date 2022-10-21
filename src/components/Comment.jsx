import React, { useState } from "react";
import "../components/comment.css";
import CommentLists from "../components/CommentLists";

const Comment = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItem = () => {
    setItems((prevItems) => {
      return [...prevItems, inputList];
    });
    setInputList("");
    // making it empty
  };

  const deleteItems = (id) => {
    alert("Delete comment?");

    setItems((prevItems) => {
      return prevItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="add-comment">
          <input
            className="inputText"
            type="text"
            onChange={itemEvent}
            value={inputList}
          />
          <button className="comment" onClick={listOfItem}>
            Comment
          </button>
        </div>

          <ol>
            {Items.map((itemval, index) => {
              return(
                <CommentLists key={index} id={index} text={itemval} onSelect={deleteItems}/>
              )
            })}
          </ol>
      </div>
    </>
  );
};

export default Comment;
