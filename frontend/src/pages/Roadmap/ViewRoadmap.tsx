import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  ReactFlow,
  Background,
  MiniMap,
  Controls,
  BackgroundVariant
} from '@xyflow/react';

import TopicNode from './TpoicNode';
import SubTopicNode from './subTopicNode';
import TitleNode from './TitleNode';

const nodeTypes = {
  Title: TitleNode,
  Topic: TopicNode,
  SubTopic: SubTopicNode,
};

const ViewRoadmap = () => {
  const location = useLocation();
  const { nodes = [], edges = [] } = location.state || {};

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        style={{ backgroundColor: '#f0f0f0' }}
      >
        <MiniMap />
        <Controls />
        <Background variant={BackgroundVariant.Dots} gap={5} size={1} />
      </ReactFlow>
    </div>
  );
};

export default ViewRoadmap;
