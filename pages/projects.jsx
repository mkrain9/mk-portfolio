import React from 'react'
import Head from 'next/head'

import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { AiOutlineCode, AiFillGithub } from 'react-icons/ai'

import KnockHomeScreen from '../images/KnockHomeScreen.PNG'
import KnockItemsScreen from '../images/KnockItemsScreen.PNG'
import KnockKitchenScreen from '../images/KnockKitchenScreen.PNG'
import KnockCartScreen from '../images/KnockCartScreen.PNG'

import NeuBtn from '../components/Buttons/NeuBtn'
import IPhoneCard from '../components/Cards/IPhoneCard'
import NeuCard from '../components/Cards/NeuCard'

import Kdata from '../data/knock_project.json'
import Wdata from '../data/porfolio_project.json'

const projects = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blueGrey py-2">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="static flex w-full flex-1 flex-col items-center justify-center px-4 text-center xs:px-0">
        <div className="absolute top-0">
          <a href="/" className="flex flex-col items-center justify-center">
            <IoMdArrowDropup className="h-7 w-7 text-blueSteel" />
            <p className="border-t-2 border-white p-1 transition-[padding] hover:px-4">
              Home
            </p>
          </a>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative top-20 font-bold sm:text-6xl md:text-6xl lg:text-6xl xs:text-6xl ">
            <h1 className="pb-24 pt-20">Projects</h1>
          </div>
          <div className="mb-40 sm:w-full md:w-3/4 lg:w-3/4 xs:w-full">
            <div className="relative top-20 font-bold">
              <div className="flex flex-col place-items-center">
                <h2 className="flex text-5xl">Knock</h2>
                <p className="flex translate-y-2 pt-5 pb-10 font-bold italic xs:text-sm">
                  Kitchen Inventory Application
                </p>
              </div>
            </div>
            <div className="relative top-20">
              <div className="relative left-0">
                <div className="mb-10 flex w-full flex-row place-content-center border-b-2 px-4 pb-4 pt-0 xs:overflow-x-scroll">
                  <div className="flex flex-row gap-x-6 xs:mr-[4rem] xs:ml-[32rem]">
                    <IPhoneCard
                      image={KnockHomeScreen}
                      description={'Sign-in screen'}
                    />
                    <IPhoneCard
                      image={KnockKitchenScreen}
                      description={'Plan your kitchen organization'}
                    />
                    <IPhoneCard
                      image={KnockItemsScreen}
                      description={'View all your items'}
                    />
                    <IPhoneCard
                      image={KnockCartScreen}
                      description={'Add expired items to your cart'}
                    />
                  </div>
                </div>
                <div className="px-4">
                  <NeuCard data={Kdata} />
                  <div className="flex place-content-center justify-evenly ">
                    <NeuBtn
                      route="https://knock-app.netlify.app/"
                      target="_blank"
                      color="text-green"
                    >
                      <AiOutlineCode className="h-7 w-7 text-green-400 hover:text-green-500" />
                      <p>App</p>
                    </NeuBtn>
                    <NeuBtn
                      route="https://github.com/mkrain9"
                      target="_blank"
                      color="text-yellow"
                    >
                      <AiFillGithub className="h-7 w-7 text-stone-400 hover:text-stone-500" />
                      <p>Code</p>
                    </NeuBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:w-full md:w-3/4 lg:w-3/4 xs:w-full">
            <div className="relative top-20 border-b-2 font-bold">
              <div className="flex flex-col place-items-center">
                <h2 className="flex text-5xl ">This Website</h2>
                <p className="flex translate-y-2 pt-5 pb-10 font-bold italic xs:text-sm">
                  Personal Portfolio
                </p>
              </div>
            </div>
            <div className="relative top-20">
              <div className="relative left-0">
                <div className="px-4">
                  <NeuCard data={Wdata} />
                  <div className="flex place-content-center justify-evenly ">
                    <NeuBtn
                      route="https://github.com/mkrain9/mk-portfolio"
                      target="_blank"
                      color="text-yellow"
                    >
                      <AiFillGithub className="h-7 w-7 text-stone-400 hover:text-stone-500" />
                      <p>Code</p>
                    </NeuBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bottom-0 mt-32">
            <a
              href="/resume"
              className="flex flex-col items-center justify-center"
            >
              <p className="border-b-2 border-white p-1 transition-[padding] hover:px-4">
                Resume
              </p>
              <IoMdArrowDropdown className="h-7 w-7 text-blueSteel" />
            </a>
          </div>
        </div>
      </main>
      <footer className="flex h-24 w-full flex-col items-center justify-center border-t-2">
        <p>Updated 9/30/2022</p>
      </footer>
      {/* 
      <PortfolioCard
        title={'Published Work'}
        items={['Knock']}
        details={[
          "Knock is a Full Stack Application utilizing MongoDB's Cloud Database, optimized for mobile use. Knock in short, is a kitchen inventory management system, that keeps track of your ingredients.",
        ]}
        nextPhases={[
          "Next phase will incorporate a Social Feed that will allow users to post Recipes along with required ingredients. Your ingredients will be compared to determine if the recipe can be made or if you're missing an egg or two!",
        ]}
        links={['https://knock-app.netlify.app/']}
      />*/}
    </div>
  )
}

export default projects
