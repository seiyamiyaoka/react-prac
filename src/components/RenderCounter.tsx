import React, { FC, useRef } from 'react'

interface RenderCounterProps {
  name: string
}

const RenderCounter: FC<RenderCounterProps> = ({ name }) => {
  const renderCounter = useRef(0)

  renderCounter.current += 1

  console.log(`${name}: ${renderCounter.current}`)
  return <></>
}

export default RenderCounter