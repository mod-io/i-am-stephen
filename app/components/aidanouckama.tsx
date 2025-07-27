// icons
import SocialIcon from "./socialicon"
import { Tiktok, Linkedin, Github } from "react-bootstrap-icons";

// components
import Divider from "./divider"
import EducationCard from "./educationcard";
import ExperienceCard from "./experiencecard";
import ProjectCard from "./projectcard";

// types
import { Education, Experience, Project } from "../types/cards";

const education: Education[] = [
    {
        school: "University of Florida",
        major: "Computer Science",
        image: "university-of-florida-logo.png",
        subtitles: [
            {
                date: "May 2026 Graduation",
                title: "Clubs",
                description: "ALPFA, SASE, SHPE"
            }
        ]
    }
]

const experiences: Experience[] = [
    {
        company: "BNY",
        title: "Software Engineer Intern",
        image: "bny-logo-2.png",
        date: "June 2025 - August 2025",
        location: "Pittsburgh, PA"
    },
    {
        company: "Fifth Third Bank",
        title: "Software Engineer Intern",
        image: "fitb-logo.png",
        date: "January 2025 - May 2025",
        location: "Cincinnatti, OH"
    },
    {
        company: "University of Florida",
        title: "Undergraduate Researcher",
        image: "university-of-florida-logo.png",
        date: "August 2023 - December 2024",
        location: "Gainesville, FL"
    }
]

const projects: Project[] = [
    {
        title: "Insert Project 1",
        subtitle: "Insert Subtitle 1",
        image: "snapcart.png",
        date: "Inset Date",
        description: "Insert Description"
    },
    {
        title: "Insert Project 2",
        subtitle: "Insert Subtitle 2",
        image: "snapcart.png",
        date: "Inset Date",
        description: "Insert Description"
    },
    {
        title: "Insert Project 3",
        subtitle: "Insert Subtitle 3",
        image: "snapcart.png",
        date: "Inset Date",
        description: "Insert Description"
    }
]

const AidanOuckama = () => {
    return (
        <>

            <Header />

            <Divider /> 

            <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 p-8 gap-5">
              <h1 className="text-black text-4xl font-extralight uppercase">education</h1>

                {
                    education.map((school, i) => (
                        <>
                            <div className="flex flex-col justify-center items-center w-full h-1/4">
                                <EducationCard 
                                    school={school.school}
                                    major={school.major}
                                    image={school.image}
                                    subtitles={school.subtitles}
                                />
                            </div>

                            { i != education.length - 1 ? (<div className="w-0.5 h-12 bg-black"/>) : (<></>) }
                        </>
                    ))
                }

            </div>

            <Divider /> 

            <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100 p-8 gap-5">
              <h1 className="text-black text-4xl font-extralight uppercase">experience</h1>

              {
                experiences.map((experience, i) => (
                    <>
                        <div className="group flex flex-row justify-center items-center w-full h-1/6">
                            <ExperienceCard 
                                company={experience.company}
                                title={experience.title}
                                image={experience.image}
                                date={experience.date}
                                location={experience.location}
                            />
                        </div>

                        { i != experiences.length - 1 ? (<div className="w-0.5 h-12 bg-black"/>) : (<></>) }
                    </>
                ))
              }

            </div>

            <Divider />

            <Socials />

            <Divider /> 

            <div 
                className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-100 p-8 gap-5
                           lg:h-screen"
            >
              <h1 className="text-black text-4xl font-extralight uppercase">projects</h1>

              <div 
                className="flex flex-col justify-center items-center w-full h-5/6
                           lg:grid lg:grid-rows-1 lg:grid-cols-3 "
              >
                
                {
                    projects.map((project, i) => (
                        <ProjectCard
                            key={i}
                            title={project.title}
                            subtitle={project.subtitle}
                            image={project.image}
                            date={project.date}
                            description={project.description}
                        />
                    ))
                }

              </div>

            </div>

            <Divider />

            <Footer />

        </>
    )
}

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100">
            <div 
                className="flex flex-col justify-evenly items-center w-full h-1/2 bg-black bg-opacity-40 px-24 py-16
                           md:flex-row"
            >
                <img 
                    src="/pfpSteve.jpg"
                    className="w-1/2 h-full object-cover rounded-full shadow-xl
                               md:w-1/5"
                />
                <div 
                    className="flex flex-col justify-center items-center w-1/2 h-full gap-2
                               md:items-start md:gap-10"
                > 
                    <div>
                        <h1 
                            className="hidden text-6xl text-gray-100 font-bold
                                       md:block"
                        >
                            my name is
                        </h1>
                        <div 
                            className="flex flex-row justify-center items-center w-full
                                       md:justify-start"
                        >
                            <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-0">s</h1>
                            <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-100">t</h1>
                            <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-200">e</h1>
                            <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-300">p</h1>
                            <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-400">h</h1>
                            <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-500">e</h1>
                            <h1 className="text-6xl text-black font-bold animate-pulse animation-delay-600">n</h1>
                        </div>
                    </div>

                    <p 
                        className="text-md text-black font-bold opacity-80
                                   md:text-3xl"
                    >
                        and im a <span className="text-yellow-400">computer science student</span> <br />
                        with a passion for <span className="text-yellow-400"> software engineering</span> <br />
                        and <span className="text-yellow-400"> cloud infrastructure</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

const Socials = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-36 bg-gray-100 p-8 gap-5">
            <h1 className="text-black text-4xl font-extralight uppercase">socials</h1>
            <div className="flex flex-row justify-evenly items-center w-full h-full gap-3">
                <SocialIcon url="https://www.linkedin.com/in/stephenblacedavis/" icon={<Linkedin color="black" size={36} />} />
                <SocialIcon url="https://www.github.com/mod-io" icon={<Github color="black" size={36} />} />
            </div>            
        </div>
    )
}

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-end w-full h-12 bg-gray-100 p-12">
            <h1 className="text-black font-semibold">@stephendavis</h1>
        </div>
    )
}

export default AidanOuckama;