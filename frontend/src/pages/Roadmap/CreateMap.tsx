import { ReactFlowProvider } from '@xyflow/react'
import React from 'react'
import { DnDProvider } from './DndContext'
import DnDFlow from './dnd'

const CreateMap = () => {
  return (
    <>
    <ReactFlowProvider>
    <DnDProvider>
      <DnDFlow/>
    </DnDProvider>
  </ReactFlowProvider>
    </>
  )
}

export default CreateMap