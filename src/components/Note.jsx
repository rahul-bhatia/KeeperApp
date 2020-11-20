import React from "react";
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>{<DeleteOutlineOutlinedIcon/>}</button>
    </div>
  );
}

export default Note;
