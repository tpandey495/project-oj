// SubTopicNode.js
import React from 'react';
import { Handle, Position } from '@xyflow/react';


const SubTopicNode = ({ data }) => {
  return (
    <div className="custom-node">
      {/* Target Handles */}
      <Handle type="target" position={Position.Right} id="target-right" />
      <Handle type="target" position={Position.Left} id="target-left" />

      <div>{data.label}</div>

      {/* Source Handles */}
      <Handle type="source" position={Position.Right} id="source-right" />
      <Handle type="source" position={Position.Left} id="source-left" />
    </div>
  );
};

export default SubTopicNode;
