import React from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  Node,
  Edge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

// Mock data (as if it came from an API or local storage)
const response = {
  nodes: [
    {
      id: "1",
      type: "Title",
      position: { x: 600, y: -333 },
      data: { label: "My Project Title" },
    },
    {
      id: "2",
      type: "Topic",
      position: { x: 400, y: -200 },
      data: { label: "Frontend" },
    },
    {
      id: "3",
      type: "SubTopic",
      position: { x: 300, y: -100 },
      data: { label: "React" },
    },
    {
      id: "4",
      type: "Topic",
      position: { x: 800, y: -200 },
      data: { label: "Backend" },
    },
    {
      id: "5",
      type: "SubTopic",
      position: { x: 900, y: -100 },
      data: { label: "Node.js" },
    },
  ],
  edges: [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e1-4", source: "1", target: "4", animated: true },
    { id: "e4-5", source: "4", target: "5" },
  ],
};

type ReadonlyFlowProps = {
  nodes: Node[];
  edges: Edge[];
};

const ReadonlyFlow: React.FC<ReadonlyFlowProps> = ({ nodes, edges }) => {
  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        zoomOnScroll={true}
        zoomOnPinch={true}
        nodeDraggable={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={true}
        zoomOnPinch={true}
        zoomOnDoubleClick={false}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background
          color="#ccc"
          variant={BackgroundVariant.Dots}
          gap={5}
          size={1}
          lineWidth={1}
        />
      </ReactFlow>
    </div>
  );
};

// Using the component with mock response
const ReadonlyFlowWrapper = () => (
  <ReadonlyFlow nodes={response.nodes} edges={response.edges} />
);

export default ReadonlyFlowWrapper;
