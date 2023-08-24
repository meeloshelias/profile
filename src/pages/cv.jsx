import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

import logoSchuh from '@/images/logos/schuh.png'
import logoGap from '@/images/logos/gap.png'
import logoRevs from '@/images/logos/revs.png'
import graduationHat from '@/images/logos/gradhat.png'
import skills from '@/images/logos/skills.png'
import logoCncs from '@/images/logos/cncs.png'
import logoNewmancollege from '@/images/logos/newmancollege.png'
import logoUob from '@/images/logos/uob.png'
import logoButtermere from '@/images/logos/buttermere.png'
import logoFlorist from '@/images/logos/florist.png'

import { formatDate } from '@/lib/formatDate'



function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function GraduationHatIcon(props) {
  return (
    <Image
      src={graduationHat}
      alt=""
      className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
      
    />
  );
}

function SkillsIcon(props) {
  return (
    <Image
      src={skills}
      alt=""
      className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
      
    />
  );
}


function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Contact() {
  let contact = [
    {
      method: 'Address',
      answer: 'Southwick, UK',
      logo: logoUob,
      
    },
   
    {
      method: 'E-mail',
      answer: 'eliasmeelosh2610@gmail.com',
      logo: logoCncs,
      
    },
    {
      method: 'LinkedIn',
      answer: ( <a href="https://www.linkedin.com/in/eliasm2610/" target="_blank" rel="noreferrer">
      Meelosh Elias
    </a>),
      logo: logoCncs,
      
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Contact Information</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {contact.map((contact, contactIndex) => (
          <li key={contactIndex} className="flex gap-4">
            
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">School</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {contact.method}
              </dd>
              <dt className="sr-only">Grades</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {contact.answer}
              </dd>
              
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}



function Education() {
  let education = [
    {
      school: 'University of Bristol',
      grades: 'BSc Economics',
      logo: logoUob,
      start: '2020',
      end: '2023',
    },
    {
      school: 'Newman College',
      grades: 'Mathematics, Biology, English Literature',
      logo: logoNewmancollege,
      start: '2017',
      end: '2019',
    },
    {
      school: 'Cardinal Newman Catholic School',
      grades: 'Mathematics, English Literature, English Language, Core Science, History, Geography, Religious Studies',
      logo: logoCncs,
      start: '2012',
      end: '2017',
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <GraduationHatIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Education</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {education.map((edu, eduIndex) => (
          <li key={eduIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={edu.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">School</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {edu.school}
              </dd>
              <dt className="sr-only">Grades</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {edu.grades}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                {edu.start} - {edu.end}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}


function Resumetwo() {
  let resumetwo = [
   
    {
      company: 'The Florist',
      title: 'Bartender',
      logo: logoFlorist,
      start: '2022',
      end: '2022',
    },
    {
      company: 'Revolution',
      title: 'Bar Staff',
      logo: logoRevs,
      start: '2021',
      end: '2021',
    },
    {
      company: 'Buttermere Capital',
      title: 'Financial Work Experience',
      logo: logoButtermere,
      start: '2020',
      end: '2020',
    },
    {
      company: 'Gap',
      title: 'Sales Adviser',
      logo: logoGap,
      start: '2019',
      end: '2019',
    },
    {
      company: 'Schuh',
      title: 'Sales Assistant',
      logo: logoSchuh,
      start: '2017',
      end: '2018',
    },
  ]

  

  

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resumetwo.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      
    </div>
  )
}




function Skills() {
  let skills = [
    {
      skill: 'Data Science',
      description: 'Proficient with Excel, Python, R, SQL, Vega, Stata',
      logo: logoUob,
      
    },
    {
      skill: 'Economic Models',
      description: 'Macro, Micro, Game Theory',
      logo: logoNewmancollege,
      
    },
    {
      skill: 'Statistics',
      description: 'Three years of econometrics. Experience with regression, econometric design, interpretation',
      logo: logoCncs,
      
    },
    {
      skill: 'Communication',
      description: 'Ability to convey technical information to a diverse audience',
      logo: logoCncs,
      
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <SkillsIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Skills</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {skills.map((skills, skillsIndex) => (
          <li key={skillsIndex} className="flex gap-4">
           
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">School</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {skills.skill}
              </dd>
              <dt className="sr-only">Grades</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {skills.description}
              </dd>
              
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}




function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Meelosh Elias - CV
        </title>
        <meta
          name="description"
          content="I'm Meelosh Elias"
        />
        
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            My Online CV
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Projects coming soon...
          </p>
          <div className="mt-6 flex gap-6">
           
            <SocialLink
              href="https://www.linkedin.com/in/eliasm2610/"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
    
  <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none ">
 
    <div className="space-y-10 lg:pl-0 xl:pl-0">
      {/*<Newsletter />*/}
      <h3 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
        
      





      </h3>
      <div>
        <Contact />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
        <Education />
        <Resumetwo />
      </div>
      <div>
        <Skills />
      </div>
    </div>
    
  </div>
</Container>
    </>
  )
}


