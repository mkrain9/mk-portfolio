import React from 'react'

const NeuCard = ({ data, title }) => {
  const dataArray = []
  for (let i = 0; i < Object.keys(data).length; i++) {
    dataArray.push(data[i])
  }
  const header = title ? title : null
  return (
    <div className="mb-6 flex h-full flex-col gap-y-2 rounded-3xl p-10 shadow-neumorphic">
      <h3
        key={title}
        className="standard flex place-items-start text-xl font-bold text-sky-800"
      >
        {header}
      </h3>
      {dataArray.map((index) =>
        index.section !== 'Blog' ? (
          <>
            <div>
              <h3
                key={index.section}
                className={`standard flex place-items-start text-left ${
                  header
                    ? 'text-lg italic text-sky-600'
                    : 'text-xl text-sky-800'
                } font-bold`}
              >
                {index.section}
              </h3>
              <div
                className={`standard flex flex flex-row place-items-start justify-between border-b-2 border-sky-400 ${
                  header ? 'py-2' : 'pb-1'
                } text-sm xs:flex-col `}
              >
                <h4 className="text-sky-400" key={index.section}>
                  {index.subheader ? index.subheader : null}
                </h4>
                <h4 className="text-sky-400" key={index.section}>
                  {index.location ? index.location : null}
                </h4>
              </div>
            </div>
            <ol className="flex list-none flex-col place-items-start gap-y-1 pl-2 text-left font-normal xs:pl-0">
              {index.details.map((item) => (
                <li
                  key={item}
                  className="standard w-full border-b-2 border-indigo-200 py-2"
                >
                  {item}
                </li>
              ))}
            </ol>
          </>
        ) : (
          <>
            <h3
              key={index.section}
              className="standard flex place-items-start border-b-2 border-sky-400 pb-1 text-xl font-bold text-sky-800"
            >
              {index.section}
            </h3>
            <ol className="flex list-none flex-col place-items-start gap-y-1 pl-2 text-left font-bold xs:pl-0">
              {index.details.map((item) => (
                <li className="w-full">
                  <a key={item.link} href={`/${item.link}`}>
                    <h3 className="standard border-b-2 border-indigo-200 bg-yellow-400 py-2 font-normal hover:bg-sky-600">
                      {item}
                    </h3>
                  </a>
                </li>
              ))}
            </ol>
          </>
        )
      )}
    </div>
  )
}
export default NeuCard
