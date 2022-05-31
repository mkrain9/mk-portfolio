import React from 'react'

const NeuElement = (props) => {
  const shadowDirection = props.shadowInner == true ? 'shadow-inner' : ''

  return (
    <div
      className={`flex ${props.height} min-h-[1px] ${props.paddingX} ${props.paddingY} ${props.width} shadow-neumorphic ${shadowDirection} ${props.radius}`}
    >
      {props.children}
    </div>
  )
}

export default NeuElement
