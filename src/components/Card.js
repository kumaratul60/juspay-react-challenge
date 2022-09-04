import React from "react";

export default function Card({ children, handleClick, id, className }) {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
  };

  const dragEnd = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      id={id}
      onClick={() => handleClick(id)}
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragEnd}
      className={className}
    >
      {children}
    </div>
  );
}
