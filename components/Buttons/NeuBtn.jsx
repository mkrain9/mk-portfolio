import React from 'react'

const NeuBtn = (props) => {
  return (
    <a
      href={`${props.route}`}
      target={`${props.target}`}
      className={`neuGradient flex flex-col items-center justify-center rounded-2xl py-${props.h} px-${props.w} ${props.color}-400 shadow-neumorphic hover:${props.color}-500`}
    >
      {props.children}
    </a>
  )
}

export default NeuBtn
