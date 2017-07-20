import React from "react";

export default class Topic extends React.Component {
  render() {
    const {topic, index, onEdit, onDelete, moveUp, moveDown, lastIndex} = this.props;

    return (
      <li>
       {topic}
       <button
         value={index}
         onClick={moveUp}
         disabled={index === 0}
       >
         &uarr;
       </button>
       <button
         value={index}
         onClick={moveDown}
         disabled={index === lastIndex}
       >
         &darr;
       </button>
       <button
         value={index}
         onClick={onDelete}
       >
         Delete
       </button>
       <button
         value={index}
         onClick={onEdit}
       >
         Edit
       </button>
     </li>
    );
  }
}
