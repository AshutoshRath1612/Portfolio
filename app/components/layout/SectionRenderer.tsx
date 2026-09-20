import React, { Fragment, ReactNode } from 'react'

interface SectionRendererProps {
    order: string[];
    registry: Record<string, ReactNode>;
}

const SectionRenderer = ({order, registry}: SectionRendererProps) => {
  return (
    <>
    {order.map((id) => {
        const node = registry[id];
        if(!node) return null;

        return <Fragment key={id}>{node}</Fragment>
    })}
    </>
  )
}

export default SectionRenderer