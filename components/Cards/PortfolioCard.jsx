import next from 'next'
import React, { useState, useRef } from 'react'

const PortfolioCard = ({ title, items, details, links, nextPhases }) => {
  const [focusedObject, setFocusedObject] = useState(null)
  const scrollRef = useRef(null)

  const compiledArray = []

  for (let i = 0; i < items.length; i++) {
    const compiledObject = Object.assign({
      item: items[i],
      detail: details[i],
      link: links[i],
      nextPhase: nextPhases[i],
    })
    compiledArray.push(compiledObject)
  }

  const toggleFocus = (i) => {
    focusedObject?.item == i.item ? setFocusedObject(null) : setFocusedObject(i)
    scrollRef.current.scrollIntoView({ block: 'center' })
  }

  return (
    <div
      ref={scrollRef}
      className="mb-3 rounded-xl border-2 p-4 shadow-lg transition ease-in hover:-translate-y-1 hover:shadow-blue-400"
    >
      <h2 className="pb-2 text-4xl font-bold">{title}</h2>
      <div className="mt-3 flex flex-col place-items-center pb-2">
        {compiledArray.map((index) => (
          <div className="flex w-full flex-col place-items-center border-t-2 py-1 ">
            <button
              className="w-full hover:text-blue-400"
              onClick={() => toggleFocus(index)}
            >
              <p className="mt-1 font-bold xs:text-sm">{index.item}</p>
            </button>
          </div>
        ))}
      </div>
      {focusedObject ? (
        <div className="flex flex flex-col flex-wrap place-items-start border-t-2 pt-2">
          <h3 className="underline-offset-3 mt-1 font-bold underline decoration-sky-500 decoration-2 xs:text-sm">
            {focusedObject.item}
          </h3>
          <p className="font-medium"></p>
          <p className="pb-2 font-light"></p>
          <p className="mt-1 italic xs:text-sm">Overview</p>
          <ol className="flex list-none flex-col place-items-start pl-6">
            <li className="text-left">{focusedObject.detail}</li>
            <li className="py-4 text-left">{focusedObject.nextPhase}</li>
            <li className=" pb-4 text-left">
              <a
                className="font-bold text-green-500 hover:text-green-400"
                href={focusedObject.link}
              >
                Click here start Knock, you'll need to "knock" to sign-in!
              </a>
            </li>
          </ol>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default PortfolioCard
