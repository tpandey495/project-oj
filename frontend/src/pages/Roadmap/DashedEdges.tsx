// DashedEdge.js
import React from 'react';
import { BaseEdge, getStraightPath } from '@xyflow/react';

const DashedEdge = ({ id, sourceX, sourceY, targetX, targetY }) => {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <BaseEdge
      id={id}
      path={edgePath}
      style={{
        stroke: '#4A90E2',
        strokeWidth: 2,
        strokeDasharray: '5,5',
      }}
    />
  );
};

export default DashedEdge;
