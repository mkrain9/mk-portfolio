import React from 'react'
import Head from 'next/head'

import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { AiOutlineCode } from 'react-icons/ai'

import KnockHomeScreen from '../images/KnockHomeScreen.PNG'
import KnockItemsScreen from '../images/KnockItemsScreen.PNG'
import KnockKitchenScreen from '../images/KnockKitchenScreen.PNG'

import NeuBtn from '../components/Buttons/NeuBtn'
import IPhoneCard from '../components/Cards/IPhoneCard'

const projects = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blueGrey py-2">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="static flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        <div className="absolute top-0">
          <a href="/" className="flex flex-col items-center justify-center">
            <IoMdArrowDropup className="h-7 w-7 text-blueSteel" />
            <p className="border-t-2 border-white p-1 hover:p-2">Home</p>
          </a>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative top-20 font-bold sm:text-6xl md:text-6xl lg:text-6xl xs:text-6xl ">
            <h1 className="pb-24 pt-20">Projects</h1>
          </div>
          <div className="sm:w-full md:w-3/4 lg:w-3/4 xs:w-full">
            <div className="relative top-20 flex flex-row border-b-2">
              <h2 className="flex place-items-start pb-5 text-5xl font-bold">
                Knock
              </h2>
              <p className="absolute right-0 flex translate-y-2 place-items-start py-5 font-bold italic xs:text-sm">
                Kitchen Inventory Application
              </p>
            </div>
            <div className="relative top-20 pt-10">
              <div className="relative left-0">
                <div className="neuGradient  h-full rounded-3xl p-10 pt-8 shadow-neumorphic">
                  <h3 className="standard flex place-items-start text-xl font-bold text-sky-800">
                    Details
                  </h3>
                  <ol className="flex list-none flex-col place-items-start gap-y-1 pl-4 text-left font-normal">
                    <li className="standard ">Full Stack MERN Application</li>
                    <li className="standard">
                      Auth0 Integration utilizing JSON Web Tokens
                    </li>
                    <li className="standard">MongoDB Cloud Services</li>
                    <li className="standard">
                      One to Many | Many to One | Many to Many Data Structures
                    </li>
                    <li className="standard">Frontend hosted on Netlify</li>
                    <li className="standard">Server hosted on Heroku</li>
                  </ol>
                  <h3 className="flex place-items-start py-2 text-xl font-bold text-sky-800 ">
                    Blog
                  </h3>
                  <ol className="flex list-none flex-col place-items-start gap-y-1 pl-4 text-left font-bold">
                    <li>
                      <a href="/projects">
                        <h3 className="standard bg-yellow-400 font-normal hover:bg-sky-600">
                          Creating Dynamically Nested Components
                        </h3>
                      </a>
                    </li>
                    <li>
                      <a href="/projects">
                        <h3 className="standard bg-yellow-400 font-normal hover:bg-sky-600">
                          Utilizing MongoDB Aggregate Pipeline to create
                          relationships
                        </h3>
                      </a>
                    </li>
                  </ol>
                  <h3 className="flex place-items-start py-2 text-xl font-bold text-sky-800 ">
                    Future Plans
                  </h3>
                  <ol className="flex list-outside list-none flex-col place-items-start gap-y-2 pl-4 text-left font-normal">
                    <li className="standard">
                      Implement Recipe System that will evaluate available
                      inventory.
                    </li>
                    <li className="standard">
                      Implement Social Feed for chefs and hobbiest to connect,
                      share, comment, and like recipes.
                    </li>
                  </ol>
                </div>
                <div className="flex place-content-center pt-6">
                  <NeuBtn
                    route="https://github.com/mkrain9"
                    target="_blank"
                    color="text-yellow"
                  >
                    <AiOutlineCode className="h-7 w-7 text-yellow-400 hover:text-yellow-500" />
                    <p>Code</p>
                  </NeuBtn>
                </div>
                <div className="mt-4 flex w-full flex-row place-content-center border-t-2 border-b-2 pb-4 pl-4 pr-4 pt-0 xs:overflow-x-scroll">
                  <div className="flex flex-row gap-x-6 xs:ml-[28rem]">
                    <IPhoneCard
                      image={KnockHomeScreen}
                      description={'"Knock" to sign-in'}
                    />
                    <IPhoneCard
                      image={KnockItemsScreen}
                      description={'View all your items'}
                    />
                    <IPhoneCard
                      image={KnockKitchenScreen}
                      description={'Plan your kitchen organization'}
                    />
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
              <p className="border-b-2 border-white p-1 hover:p-2">Resume</p>
              <IoMdArrowDropdown className="h-7 w-7 text-blueSteel" />
            </a>
          </div>
        </div>
      </main>
      <footer className="flex h-24 w-full flex-col items-center justify-center border-t-2">
        <p>Updated 5/11/2022</p>
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
