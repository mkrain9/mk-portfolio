import React, { useState } from 'react'
import Head from 'next/head'

import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from 'react-simple-maps'

import NeuCard from '../components/Cards/NeuCard'
import NeuBtn from '../components/Buttons/NeuBtn'
import EData from '../data/summary.json'
import EDUData from '../data/education.json'
import PEData from '../data/resume_professional_experience.json'
import SData from '../data/resume_skills.json'

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/countries/united-states/higher-quality-5m/5m-US-counties.json'

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
            <p className="border-t-2 border-white p-1 hover:px-4">Projects</p>
          </a>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative top-20 font-bold sm:text-6xl md:text-6xl lg:text-6xl xs:text-6xl ">
            <h1 className="pb-24 pt-20">Resume</h1>
          </div>

          <div className="sm:w-full md:w-3/4 lg:w-3/4 xs:w-full">
            <div className="mt-14">
              <NeuCard data={EData} title={'Executive Summary'} />
            </div>
            <NeuCard data={EDUData} title={'Education'} />
            <div className="relative flex place-content-center gap-x-4 sm:flex-col md:flex-col lg:flex-row xs:flex-col">
              <div className="top-56 mb-6 h-full w-full max-w-3xl overflow-hidden rounded-3xl shadow-neumorphic lg:sticky xs:hidden xs:w-full">
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
                      stroke: '#075985',
                      strokeWidth: 2,
                      strokeLinecap: 'round',
                    }}
                  >
                    <text
                      x="-8"
                      y="-5"
                      textAnchor="end"
                      alignmentBaseline="middle"
                      fill="#075985"
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
                      stroke: '#075985',
                      strokeWidth: 2,
                      strokeLinecap: 'round',
                    }}
                  >
                    <text
                      x="-8"
                      y="-5"
                      textAnchor="end"
                      alignmentBaseline="middle"
                      fill="#075985"
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
                      stroke: '#075985',
                      strokeWidth: 2,
                      strokeLinecap: 'round',
                    }}
                  >
                    <text
                      x="-8"
                      y="-5"
                      textAnchor="end"
                      alignmentBaseline="middle"
                      fill="#075985"
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
                      stroke: '#075985',
                      strokeWidth: 2,
                      strokeLinecap: 'round',
                    }}
                  >
                    <text
                      x="-8"
                      y="-5"
                      textAnchor="end"
                      alignmentBaseline="middle"
                      fill="#075985"
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
                      stroke: '#075985',
                      strokeWidth: 2,
                      strokeLinecap: 'round',
                    }}
                  >
                    <text
                      x="-8"
                      y="-5"
                      textAnchor="end"
                      alignmentBaseline="middle"
                      fill="#075985"
                      className="font-bold"
                    >
                      State College, PA
                    </text>
                  </Annotation>
                  <Marker coordinates={[-84.388, 33.749]}>
                    <circle r={8} fill="#075985" />
                  </Marker>
                  <Marker coordinates={[-87.6298, 41.8781]}>
                    <circle r={8} fill="#075985" />
                  </Marker>
                  <Marker coordinates={[-106.3031, 35.88]}>
                    <circle r={8} fill="#075985" />
                  </Marker>
                  <Marker coordinates={[-75.9746, 40.9584]}>
                    <circle r={8} fill="#075985" />
                  </Marker>
                  <Marker coordinates={[-77.86, 40.7934]}>
                    <circle r={8} fill="#075985" />
                  </Marker>
                </ComposableMap>
              </div>
              <div className="sm:pt-0 md:pt-14 lg:pt-0 xs:pt-0">
                <div className="relative left-0">
                  <NeuCard data={PEData} title="Professional Experience" />
                </div>
              </div>
            </div>
            <div className="relative top-0">
              <NeuCard data={SData} title="Skills" />
            </div>
          </div>
          <div className="relative bottom-0 mt-32">
            <a
              href="/resume"
              className="flex flex-col items-center justify-center"
            >
              <p className="border-b-2 border-white p-1 hover:px-4">
                Blog - [Under development]
              </p>
              <IoMdArrowDropdown className="h-7 w-7 text-blueSteel" />
            </a>
          </div>
        </div>
      </main>
      <footer className="flex h-24 w-full flex-col items-center justify-center border-t-2">
        <p>Updated 5/31/2022</p>
      </footer>
    </div>
  )
}

export default resume
