import React from "react";
import { useDnD } from "./DndContext";

const Sidebar: React.FC = ({handleSubmit}) => {
  const [, setType] = useDnD();

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = "move";
  };



  return (
    <aside>
      <div
        className="dndnode title"
        onDragStart={(event) => onDragStart(event, "Title")}
        draggable
      >
        Title
      </div>
      <div
        className="dndnode topic"
        onDragStart={(event) => onDragStart(event, "Topic")}
        draggable
      >
        Topic
      </div>
      <div
        className="dndnode subTopic"
        onDragStart={(event) => onDragStart(event, "SubTopic")}
        draggable
      >
        Sub Topic
      </div>

      <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
        Submit
      </button>
    </aside>
  );
};

export default Sidebar;
