import React from 'react'

const NeuBtn = (props) => {
  return (
    <a
      href={`${props.route}`}
      target={`${props.target}`}
      className={`neuGradient xs:w-18 flex w-20 flex-col items-center justify-center rounded-2xl px-2 py-2 ${props.color}-400 shadow-neumorphic hover:${props.color}-500`}
    >
      {props.children}
    </a>
  )
}

export default NeuBtn
