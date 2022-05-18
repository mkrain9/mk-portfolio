import React from 'react'
import Image from 'next/image'

const IPhoneCard = ({ image, description }) => {
  return (
    <div className="flex flex-col place-items-center">
      <div className="neuGradient mt-8 h-full w-56 rounded-3xl border-4 p-3 shadow-neumorphic">
        <Image
          src={image}
          layout="responsive"
          className="rounded-2xl border-2 "
        />
      </div>
      <p className="truncate pt-4 font-bold">{description}</p>
    </div>
  )
}

export default IPhoneCard
