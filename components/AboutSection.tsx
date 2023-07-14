import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Java" },
  { skill: "Python" },
  { skill: "R" },
  { skill: "SQL" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
  { skill: "Firebase" },
  { skill: "MongoDB" },
  { skill: "Express.js" },
  { skill: "Node.js" },
  { skill: "Tableau" },
  { skill: "Jakarta EE" },
  { skill: "Netbeans" },
  { skill: "WordPress" },
  { skill: "JQuery" },
  { skill: "Micrsoft Excel" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Michel and I am a{" "}
              <span className="font-bold text-red-500">{"highly ambitious"}</span>,
              <span className="font-bold text-red-500">{" self-motivated"}</span>, and
              <span className="font-bold text-red-500">{" driven"}</span> person who aspires to make an impact in the IT world.
            </p>
            <br />
            <p>
              I am a year 3 Computing student majoring in 
              Information Systems at the National University of Singapore. 
              I am always on the hunt for opportunities to expose myself to 
              the tech world and ways to learn and develop my skills.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, travelling, to filming and editing videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
            I strongly believe in{" "}
              <span className="font-bold text-teal-500">
              personal and professional growth
              </span>,{" "} 
              and I am constantly pushing myself to learn and improve. 
              I have a deep passion for innovation and technology, 
              and I am always looking for ways to push the boundaries 
              of what is possible. I am excited about the opportunities 
              that lie ahead in my career and am eager to explore 
              new avenues to continue my growth and development. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={300}
              height={300}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
