import React from 'react'
import Head from 'next/head'

import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

const projects = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blueGrey py-2">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        <div className="absolute top-0">
          <a href="/" className="flex flex-col items-center justify-center">
            <IoMdArrowDropup className="h-7 w-7 text-blueSteel" />
            <p className="border-t-2 border-white p-1 hover:p-2">Home</p>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="absolute top-20 font-bold sm:text-6xl md:text-6xl lg:text-6xl xs:text-6xl ">
            <h1 className="border-b-4 pb-6">Projects</h1>
          </div>
          <div>
            <div className="relative flex flex-row border-b-2">
              <h2 className="flex place-items-start pb-5 text-5xl font-bold">
                Knock
              </h2>
              <p className="absolute right-0 flex place-items-start py-5 font-bold italic">
                Kitchen Inventory Application
              </p>
            </div>
            <h3 className=" flex place-items-start bg-purple-400 py-2 font-bold italic">
              Details
            </h3>
            <ol className="flex list-none flex-col place-items-start font-bold">
              <li>Full Stack MERN Application</li>
              <li>Auth0 Integration</li>
              <li>MongoDB Cloud Services</li>
              <li>One to Many | Many to Many Data Structure</li>
              <li>Frontend hosted on Netlify</li>
              <li>Server hosted on Heroku</li>
            </ol>
            <h3 className="flex place-items-start bg-purple-400 py-2 font-bold italic ">
              Future Plans
            </h3>
            <ol className="flex list-none flex-col place-items-start font-bold">
              <li>
                Implement Recipe System that will evaluate available inventory
              </li>
              <li>
                Implement Social Feed for chefs and hobbiest to connect, share,
                comment, and like recipes
              </li>
            </ol>
          </div>
        </div>
        <div className="absolute bottom-1/4">
          <a
            href="/resume"
            className="flex flex-col items-center justify-center"
          >
            <p className="border-b-2 border-white p-1 hover:p-2">Resume</p>
            <IoMdArrowDropdown className="h-7 w-7 text-blueSteel" />
          </a>
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
