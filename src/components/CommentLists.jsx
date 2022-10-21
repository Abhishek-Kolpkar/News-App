import React from "react";
import "../components/comment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CommentLists = (props) => {
  return (
    <>
      <li className="todolist_style">
        <span id="text">{props.text}</span>
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
          className="delete"
        >
          <FontAwesomeIcon icon={faXmark} className="delete"></FontAwesomeIcon>
        </button>
      </li>
    </>
  );
};

export default CommentLists;
