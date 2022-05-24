import React from 'react'
import Head from 'next/head'

import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from 'react-simple-maps'

import NeuBtn from '../components/Buttons/NeuBtn'

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

const resume = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blueGrey py-2">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="static flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        <div className="absolute top-0">
          <a
            href="/projects"
            className="flex flex-col items-center justify-center"
          >
            <IoMdArrowDropup className="h-7 w-7 text-blueSteel" />
            <p className="border-t-2 border-white p-1 hover:p-2">Projects</p>
          </a>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative top-20 font-bold sm:text-6xl md:text-6xl lg:text-6xl xs:text-6xl ">
            <h1 className="pb-24 pt-20">Resume</h1>
          </div>
          <div className="sm:w-full md:w-3/4 lg:w-3/4 xs:w-full">
            <div className="relative top-20 flex place-content-center gap-x-4 border-b-2 sm:flex-col md:flex-col lg:flex-row xs:flex-col">
              <div className="top-56 h-full w-full max-w-3xl overflow-hidden rounded-3xl shadow-neumorphic lg:sticky lg:mt-[68px] xs:w-full">
                <ComposableMap projection="geoAlbers">
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#dedede"
                          stroke="#AFBEB9"
                        />
                      ))
                    }
                  </Geographies>
                  <Annotation
                    subject={[-84.388, 33.749]}
                    dx={-60}
                    dy={-30}
                    connectorProps={{
                      stroke: '#FF5533',
                      strokeWidth: 2,
                      strokeLinecap: 'round',
                    }}
                  >
                    <text
                      x="-8"
                      y="-5"
                      textAnchor="end"
                      alignmentBaseline="middle"
                      fill="#F53"
                      className="font-bold"
                    >
                      McDonough, GA
                    </text>
                  </Annotation>
                  <Annotation
                    subject={[-87.6298, 41.8781]}
                    dx={-60}
                    dy={-30}
                    connectorProps={{
                      stroke: '#FF5533',
                      strokeWidth: 2,
                      strokeLinecap: 'round',
                    }}
                  >
                    <text
                      x="-8"
                      y="-5"
                      textAnchor="end"
                      alignmentBaseline="middle"
                      fill="#F53"
                      className="font-bold"
                    >
                      Joliet, IL
                    </text>
                  </Annotation>
                  <Annotation
                    subject={[-106.3031, 35.88]}
                    dx={-60}
                    dy={-30}
                    connectorProps={{
                      stroke: '#FF5533',
                      strokeWidth: 2,
                      strokeLinecap: 'round',
                    }}
                  >
                    <text
                      x="-8"
                      y="-5"
                      textAnchor="end"
                      alignmentBaseline="middle"
                      fill="#F53"
                      className="font-bold"
                    >
                      Los Alamos, NM
                    </text>
                  </Annotation>
                  <Annotation
                    subject={[-75.9746, 40.9584]}
                    dx={-60}
                    dy={-30}
                    connectorProps={{
                      stroke: '#FF5533',
                      strokeWidth: 2,
                      strokeLinecap: 'round',
                    }}
                  >
                    <text
                      x="-8"
                      y="-5"
                      textAnchor="end"
                      alignmentBaseline="middle"
                      fill="#F53"
                      className="font-bold"
                    >
                      Hazleton, PA
                    </text>
                  </Annotation>
                  <Annotation
                    subject={[-77.86, 40.7934]}
                    dx={-60}
                    dy={30}
                    connectorProps={{
                      stroke: '#FF5533',
                      strokeWidth: 2,
                      strokeLinecap: 'round',
                    }}
                  >
                    <text
                      x="-8"
                      y="-5"
                      textAnchor="end"
                      alignmentBaseline="middle"
                      fill="#F53"
                      className="font-bold"
                    >
                      State College, PA
                    </text>
                  </Annotation>
                  <Marker coordinates={[-84.388, 33.749]}>
                    <circle r={8} fill="#F53" />
                  </Marker>
                  <Marker coordinates={[-87.6298, 41.8781]}>
                    <circle r={8} fill="#F53" />
                  </Marker>
                  <Marker coordinates={[-106.3031, 35.88]}>
                    <circle r={8} fill="#F53" />
                  </Marker>
                  <Marker coordinates={[-75.9746, 40.9584]}>
                    <circle r={8} fill="#F53" />
                  </Marker>
                  <Marker coordinates={[-77.86, 40.7934]}>
                    <circle r={8} fill="#F53" />
                  </Marker>
                </ComposableMap>
              </div>
              <div className="sm:pt-14 md:pt-14 lg:pt-0 xs:pt-14">
                <h2 className="flex place-content-center pb-5 text-5xl font-bold">
                  Education
                </h2>
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
                </div>
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
    </div>
  )
}

export default resume
