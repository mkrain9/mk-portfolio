import Head from 'next/head'
import Image from 'next/image'

import SummaryCard from '../components/Cards/SummaryCard'
import ExperienceCard from '../components/Cards/ExperienceCard'
import SkillsCard from '../components/Cards/SkillsCard'
import PortfolioCard from '../components/Cards/PortfolioCard'
import NeuBtn from '../components/Buttons/NeuBtn'

import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineCode,
  AiOutlineFileText,
} from 'react-icons/ai'

import { IoMdArrowDropdown } from 'react-icons/io'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blueGrey py-2">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row font-bold sm:text-4xl md:text-5xl lg:text-6xl xs:text-xl ">
            <h1 className="pb-4">Matthew Krain </h1>
            <h1 className="bg-blue-400 pb-4 subpixel-antialiased">
              | Software Developer
            </h1>
          </div>
          <div className="flex w-full flex-row justify-evenly md:pt-4 lg:pt-4 xs:justify-between">
            <NeuBtn route="projects" target="_parent" color="text-red">
              <AiOutlineCode className="h-7 w-7 text-red-400 hover:text-red-500" />
              <p>Projects</p>
            </NeuBtn>
            <NeuBtn route="resume" target="_parent" color="text-yellow">
              <AiOutlineFileText className="h-7 w-7 text-yellow-400 hover:text-yellow-500" />
              <p>Resume</p>
            </NeuBtn>
            <NeuBtn
              route="https://linkedin.com/in/matthew-krain-9b0a67132"
              target="_blank"
              color="text-blue"
            >
              <AiOutlineLinkedin className="h-7 w-7 text-blue-400 hover:text-blue-500" />
              <p>LinkedIn</p>
            </NeuBtn>
            <NeuBtn
              route="https://github.com/mkrain9"
              target="_blank"
              color="text-stone"
            >
              <AiFillGithub className="h-7 w-7 text-stone-400 hover:text-stone-500" />
              <p>Github</p>
            </NeuBtn>
          </div>
          <div className="flex w-full flex-wrap justify-evenly pt-6 font-light sm:flex-col md:flex-row lg:flex-row xs:flex-col xs:text-left">
            <h3 className="sm:pb-2 md:pb-0 lg:pb-0  lg:text-2xl xs:pb-2">
              <b className="font-bold">Phone: </b>
              1-856-904-7940
            </h3>

            <h3 className="lg:text-2xl">
              <b className="font-bold">Email: </b>
              Krainm9@gmail.com
            </h3>
          </div>
          <div className="absolute bottom-1/4">
            <a
              href="/projects"
              className="flex flex-col items-center justify-center"
            >
              <p className="border-b-2 border-white p-1 hover:px-4">Projects</p>
              <IoMdArrowDropdown className="h-7 w-7 text-blueSteel" />
            </a>
          </div>
        </div>
        {/* 
        <h2 className="typing my-6 text-2xl font-light">About Me</h2>
        <p className="max-w-6xl px-6">
          <p className=" mb-6 text-left">
            An <b className="text-blue-400">Engineer</b> fascinated with the
            mechanisms of{' '}
            <u className="underline-offset-3 decoration-blue-300 decoration-2">
              "how things work"
            </u>
            .
          </p>
          <p className="mb-6 border-b-2 pb-6 text-left ">
            I chose first to dedicated myself to learn about the mechanics of
            the micro and macro worlds through completing a challenging degree
            in <b className="text-blue-400">Chemical Engineering</b> from Penn
            State University.
          </p>
          <p className="mb-6 text-left">
            Excelling in <i>thermodynamics</i>, <i>transfer phenoma</i>,{' '}
            <i>separations</i>, and <i>organic chemistry</i>, <br />I loved that
            I could <b className="text-blue-400">never</b> stop learning.
          </p>
          <p className="mb-6 border-b-2 pb-6 text-left">
            After graduating, I started my career in the{' '}
            <b className="text-blue-400">Chemicals Supply Chain Industry</b>{' '}
            working for Ecolab.
          </p>
          <p className="mb-6 text-left">
            My time in industry has provided me{' '}
            <u className="underline-offset-3 decoration-blue-300 decoration-2">
              invaluable experience
            </u>{' '}
            working and guiding teams in a{' '}
            <b className="text-blue-400">fast paced environment</b>, where
            minutes of downtime{' '}
            <u className="underline-offset-3 decoration-blue-300 decoration-2">
              cost thousands ($)
            </u>
            .
          </p>
          <p className="mb-6 border-b-2 pb-6 text-left">
            <b className="text-blue-400">Junior management roles</b> have
            allowed me to realized my interest is centered around solving{' '}
            <u className="underline-offset-3 decoration-blue-300 decoration-2">
              logical problems
            </u>{' '}
            through developing automation and deploying data systems to improve
            team performance and remove defects.
          </p>
          <p className="mb-6 text-left">
            I dove into the world of programming, becoming{' '}
            <b className="text-blue-400">obsessed</b> as I taught myself
            languages, frameworks, and libraries.
          </p>
        </p>

        <div className="mt-6 grid max-w-6xl grid-cols-1 gap-2 lg:w-full ">
          <SummaryCard
            title={'Education'}
            items={['College', 'Degree', 'Graduation']}
            details={[
              'The Pennsylvania State University',
              'Chemical Engineering',
              'May 2019',
            ]}
          />
          <ExperienceCard
            title={'Professional Experience'}
            dates={[
              'May 2022 - Present',
              'June 2021 - May 2022',
              'June 2019 - June 2021',
            ]}
            locations={['McDonough, GA', 'McDonough, GA', 'Joliet,IL']}
            companies={['Ecolab', 'Ecolab', 'Ecolab']}
            roles={[
              'SAP Team Leader',
              'Mixing Production Area Team Leader',
              'EH&S Specialist',
            ]}
            details={[
              [
                'Automated repetitive tasks to improve daily productivity',
                'Reduced material loss through identification of inventory program gaps',
                'Trained and developed SAP Specialists on new processes',
                'Used the role of TPM Pillar Leader to spearhead the SHE TPM Pillar’s Journey To Bronze.',
              ],
              [
                'Led a department of 13 chemical mixers across 2 shifts to meet and surpass production targets.',
                'Eliminated production losses through defect identification and prevention.',
                'Eliminated First Aids for the highest risk department by implemented a pro-safety shift startup: reviewing daily risks, team progress on safety metrics, and empowering the use of Stop Work Authority.',
                'Used the role TPM Pillar Leader to spearhead the SHE TPM Pillar’s Journey To Bronze.',
              ],
              [
                'Conducted risk assessments and managed safety control implementations in all areas of the manufacturing site to reduce injuries, while keeping operators engaged at every step.',
                'Established a Safety, Health, and Environment Trigger System across the manufacturing site to manage day-to-day risk.',
                'Applied TPM to develop a site water balance and target achievable water losses.',
                'Developed and trained site personnel, leading to less injuries and increased reporting.',
                'Ensured compliance with obligations set by OSHA, DHS, Illinois EPA, and City of Joliet POTW.',
                'Site Program Owner of VelocityEHS, Strata, SafetySkills, BBO Program, Waste Disposals',
              ],
            ]}
          />
          <SkillsCard
            title={'Skills'}
            items={[
              'Languages',
              'Frontend',
              'Backend',
              'Database',
              'Hosting',
              'Ad. Skills',
            ]}
            details={[
              ['Javascript', 'HTML', 'CSS', 'Python', 'VBScript'],
              [
                'ReactJS',
                'TailwindCSS',
                'Axios',
                'React-Query',
                'React-Redux',
                'Moment',
              ],
              ['NodeJS', 'Express'],
              ['MongoDB', 'MySQL'],
              ['Netlify', 'Heroku', 'Vercel'],
              [
                'Leading Teams',
                'Defect Analysis',
                'Public Speaking',
                'Process Creation',
              ],
            ]}
          />
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
          />
        </div>*/}
      </main>

      <footer className="flex h-24 w-full flex-col items-center justify-center border-t-2">
        <p>Updated 5/11/2022</p>
      </footer>
    </div>
  )
}

export default Home
