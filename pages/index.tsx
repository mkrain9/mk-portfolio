import Head from 'next/head'
import Image from 'next/image'

import SummaryCard from '../components/Cards/SummaryCard'
import ExperienceCard from '../components/Cards/ExperienceCard'
import SkillsCard from '../components/Cards/SkillsCard'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        <h1 className="font-bold sm:text-4xl md:text-5xl lg:text-6xl xs:text-2xl ">
          Matthew Krain{' '}
          <a className=" text-blue-500 hover:text-blue-300" href="/">
            | Software Developer
          </a>
        </h1>
        <h2 className="typing w-full py-4 text-2xl font-light">About Me</h2>
        <p className="px-6">
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
          <p className="mb-6 text-right">
            Excelling in <i>thermodynamics</i>, <i>transfer phenoma</i>,{' '}
            <i>separations</i>, and <i>organic chemistry</i>, <br />I loved that
            I could <b className="text-blue-400">never</b> stop learning.
          </p>
          <p className="mb-6 border-b-2 pb-6 text-right">
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

        <div className="mt-6 grid max-w-2xl gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xs:grid-cols-1 ">
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
            roles={['SAP Team Leader', 'Mixing Team Leader', 'EH&S Specialist']}
            details={[
              [
                'Reduced material loss through program gap identification',
                'Automated repetitive tasks to improve daily productivity',
                'Guided reconfiguration of SAP system processes',
                'Trained and developed SAP Specialists on new processes',
                'Used the role of TPM Pillar Leader to spearhead the SHE TPM Pillar’s Journey To Bronze.',
              ],
              [
                'Led a department of 13 chemical mixers across 2 shifts to meet and surpass daily/weekly/monthly production targets.',
                'Eliminated production losses through defect identification and prevention.',
                'Eliminated First Aids by implemented a pro-safety shift startup: reviewing daily risks, team progress on safety metrics, and empowering the use of Stop Work Authority.',
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
          <SummaryCard
            title={'Published Work'}
            items={['Languages', 'Frontend', 'Backend', 'Database']}
            details={[
              'Javascript, HTML, CSS',
              'ReactJS, TailwindCSS, React-Query (API), React-',
              'Express',
              'MongoDB',
            ]}
          />
        </div>
      </main>

      <footer className="flex h-24 w-full flex-col items-center justify-center border-t">
        <a href="/contact">Contact</a>
        <p>Updated 5/8/2022</p>
      </footer>
    </div>
  )
}

export default Home
