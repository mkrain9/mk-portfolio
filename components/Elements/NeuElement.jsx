import React from 'react'

const NeuElement = (props) => {
  const shadowDirection =
    props.shadowInner == true ? 'shadow-innerNeumorphic' : 'shadow-neumorphic'

  return (
    <div
      className={`flex ${props.color} ${props.border} ${props.height} min-h-[1px] ${props.paddingX} ${props.paddingY} ${props.width} ${shadowDirection} ${props.radius}`}
    >
      {props.children}
    </div>
  )
}

export default NeuElement
