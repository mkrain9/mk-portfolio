import React, { useState, useRef } from 'react'

const ExperienceCard = ({
  title,
  dates,
  locations,
  companies,
  roles,
  details,
}) => {
  const [focusedObject, setFocusedObject] = useState(null)
  const scrollRef = useRef(null)
  const compiledArray = []

  for (let i = 0; i < roles.length; i++) {
    const compiledObject = Object.assign({
      date: dates[i],
      location: locations[i],
      company: companies[i],
      role: roles[i],
      detail: details[i],
    })
    compiledArray.push(compiledObject)
  }

  const toggleFocus = (i) => {
    focusedObject?.role == i.role ? setFocusedObject(null) : setFocusedObject(i)
    scrollRef.current.scrollIntoView()
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
              <p className="mt-1 font-bold xs:text-sm">{index.role}</p>
              <p className="font-light">{index.date}</p>
            </button>
          </div>
        ))}
      </div>
      {focusedObject ? (
        <div className="flex flex flex-col flex-wrap place-items-start border-t-2 pt-2">
          <h3 className="underline-offset-3 mt-1 font-bold underline decoration-sky-500 decoration-2 xs:text-sm">
            {focusedObject.role}
          </h3>
          <p className="font-medium">{`${focusedObject.company}, ${focusedObject.location}`}</p>
          <p className="pb-2 font-light">{focusedObject.date}</p>
          <p className="mt-1 italic xs:text-sm">Description: </p>
          <ol className="flex list-disc flex-col place-items-start pl-6">
            {focusedObject.detail.map((line) => (
              <li className="text-left">{line}</li>
            ))}
          </ol>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default ExperienceCard
