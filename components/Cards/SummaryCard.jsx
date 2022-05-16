import React from 'react'
import Image from 'next/image'
import PSULogo from '../../images/Penn-State-University-400x400.jpg'

const SummaryCard = ({ title, items, details }) => {
  return (
    <div className="mb-3 rounded-3xl border-2 border-[#d5e0ee] p-4  shadow-neumorphic transition ease-in">
      <h2 className="pb-2 text-4xl font-bold">{title}</h2>
      <div className="flex flex-row flex-wrap justify-evenly">
        <div className="mt-3 flex">
          <table>
            <tr className="flex">
              <div className="flex flex-col place-items-end ">
                {items.map((item) => (
                  <p key={item} className="mt-1 font-bold xs:text-sm">
                    {item}:
                  </p>
                ))}
              </div>
              <div className="flex flex-col">
                {details.map((detail) => (
                  <p
                    key={detail}
                    className="line-clamp-1 mt-1 flex justify-self-start px-1.5 text-left xs:text-sm "
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </tr>
          </table>
        </div>
        <div className="flex -translate-y-4 place-self-end xs:-translate-y-0">
          <Image src={PSULogo} width="150px" height="150px" alt="PSU Logo" />
        </div>
      </div>
    </div>
  )
}

export default SummaryCard
