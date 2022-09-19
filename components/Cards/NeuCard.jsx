import React from 'react'
import NeuElement from '../Elements/NeuElement'

const NeuCard = ({ data, title }) => {
  const dataArray = []
  for (let i = 0; i < Object.keys(data).length; i++) {
    dataArray.push(data[i])
  }
  const header = title ? title : null
  return (
    <div className="mb-6 flex h-full flex-col gap-y-2 rounded-3xl p-10 shadow-neumorphic">
      <div className="flex flex-row justify-between">
        <NeuElement
          shadowInner={false}
          height={'h-min'}
          width={'w-min'}
          radius={'rounded-full'}
          paddingX={`${header ? 'px-8' : 'px-4'}`}
          paddingY={'py-4'}
          border={`border-4 ${header ? 'border-sky-300' : 'border-sky-400'} `}
        >
          <h3
            key={header}
            className="standard flex place-items-start text-xl font-bold text-sky-800"
          >
            {header}
          </h3>
        </NeuElement>
        <div className="flex flex-row gap-x-4">
          <NeuElement
            shadowInner={false}
            height={'h-1'}
            width={'w-1'}
            radius={'rounded-full'}
            paddingX={'px-2'}
            paddingY={'py-2'}
          />
          <NeuElement
            shadowInner={false}
            height={'h-1'}
            width={'w-1'}
            radius={'rounded-full'}
            paddingX={'px-2'}
            paddingY={'py-2'}
          />
          <NeuElement
            shadowInner={false}
            height={'h-1'}
            width={'w-1'}
            radius={'rounded-full'}
            paddingX={'px-3'}
            paddingY={'py-2'}
          />
        </div>
      </div>
      {dataArray.map((index) =>
        index.section !== 'Blog' ? (
          <>
            <div className="flex flex-col pt-8">
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
                className={`standard flex flex flex-row place-items-start justify-between  ${
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
              <div>
                <div className="flex h-[2px] min-h-0 w-full place-self-center bg-sky-400" />
              </div>
            </div>
            <ol className="flex list-none flex-col place-items-start gap-y-4 pl-2 text-left font-normal xs:pl-0">
              {index.details.map((item) => (
                <NeuElement
                  shadowInner={true}
                  height={'h-min'}
                  width={'w-full'}
                  radius={'rounded-3xl'}
                  paddingX={'px-3'}
                >
                  <li key={item} className="standard w-full py-2">
                    {item}
                  </li>
                </NeuElement>
              ))}
            </ol>
          </>
        ) : (
          <>
            <h3
              key={index.section}
              className="standard flex place-items-start pt-8 pb-1 text-xl font-bold text-sky-800"
            >
              {index.section}
            </h3>

            <div className="flex h-[2px] min-h-0 w-full place-self-center bg-sky-400" />

            <ol className="flex list-none flex-col place-items-start gap-y-1 pl-2 text-left font-bold xs:pl-0">
              {index.details.map((item) => (
                <NeuElement
                  shadowInner={true}
                  height={'h-min'}
                  width={'w-full'}
                  radius={'rounded-3xl'}
                  paddingX={'px-3'}
                >
                  <li className="w-full">
                    <a key={item.link} href={`/${item.link}`}>
                      <h3 className="standard bg-yellow-400 py-2 font-normal hover:bg-sky-600">
                        {item}
                      </h3>
                    </a>
                  </li>
                </NeuElement>
              ))}
            </ol>
          </>
        )
      )}
    </div>
  )
}
export default NeuCard
