import React from "react";

export default function MidArea({ handleClick, setTasks, tasks }) {
  const drop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("card_id");
    const cardCopy = document.getElementById(cardId).cloneNode(true);
    setTasks([...tasks, { name: cardCopy.id }]);
    cardCopy.addEventListener("click", () => handleClick(cardCopy.id));
    cardCopy.id = "new_" + cardCopy.id;
    e.target.appendChild(cardCopy);
  };
  const dragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  return (
    <div
      className="flex-1 h-full overflow-auto mx-3"
      id="target"
      onDrop={drop}
      onDragOver={dragOver}
    >
      {/* {"mid area"}*/}
    </div>
  );
}
