// TitleNode.js
import { Handle,Position } from '@xyflow/react';
import React from 'react';


const TitleNode = ({ data }) => {
  return (
    <div className="title-node custom-node">
         <Handle type="target" position={Position.Top} id="target-top" />
          <Handle type="target" position={Position.Bottom} id="target-bottom" />
      {data.label}
            <Handle type="source" position={Position.Top} id="source-top" />
            <Handle type="source" position={Position.Bottom} id="source-bottom" />
    </div>
  );
};

export default TitleNode;
