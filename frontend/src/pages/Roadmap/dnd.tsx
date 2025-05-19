import React, {
  useRef,
  useCallback,
  useState,
  DragEvent,
} from "react";
import {
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  useReactFlow,
  Background,
  MiniMap,
  BackgroundVariant,
  Node,
  Edge,
  Connection,
} from "@xyflow/react";
import { useNavigate } from 'react-router-dom';

import "@xyflow/react/dist/style.css";

import Sidebar from "./sidebar";
import { useDnD } from "./DndContext";
import "./style.css";
import TopicNode from "./TpoicNode";
import SubTopicNode from "./subTopicNode";
import TitleNode from "./TitleNode";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "Title",
    data: { label: "Title" },
    position: { x: 600, y: -333 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow: React.FC = () => {
  const reactFlowWrapper = useRef<HTMLDivElement | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const [type, setType] = useDnD();

  const [isEditing, setIsEditing] = useState(false);
  const [currentNode, setCurrentNode] = useState<Node | null>(null);
  const [newLabel, setNewLabel] = useState("");
  const navigate = useNavigate();
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event: DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (!type) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode: Node = {
        id: getId(),
        type,
        position,
        data: { label: `${type}` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes, type]
  );

  const nodeTypes = {
    Title: TitleNode,
    Topic: TopicNode,
    SubTopic: SubTopicNode,
  };

  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    setType(nodeType);
    event.dataTransfer.setData("text/plain", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setCurrentNode(node);
    setNewLabel(node.data.label);
    setIsEditing(true);
  }, []);

  const onLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewLabel(event.target.value);
  };

  const onLabelSubmit = () => {
    if (!currentNode) return;

    setNodes((nds) =>
      nds.map((node) =>
        node.id === currentNode.id
          ? { ...node, data: { ...node.data, label: newLabel } }
          : node
      )
    );
    setIsEditing(false);
    setCurrentNode(null);
  };

  const handleSubmit = () => {
    const flowData = {
      nodes,
      edges,
    };
  
    navigate('/view-roadmap', { state: flowData });
    console.log("Flow Data Submitted:", JSON.stringify(flowData, null, 2));

  };

  return (
    <div className="dndflow">
      <Sidebar handleSubmit ={handleSubmit } />
      <div
        style={{ height: "100vh" }}
        className="reactflow-wrapper"
        ref={reactFlowWrapper}
      >
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          fitView
          onNodeClick={onNodeClick}
          style={{ backgroundColor: "#fff" }}
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

      {isEditing && (
        <div className="node-label-edit">
          <input
            type="text"
            value={newLabel}
            onChange={onLabelChange}
            onBlur={onLabelSubmit}
            autoFocus
          />
          <button onClick={onLabelSubmit}>Save</button>
        </div>
      )}
    </div>
  );
};

export default DnDFlow;
