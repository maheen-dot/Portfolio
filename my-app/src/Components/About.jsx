import react from 'react'
import { FaReact,FaNodeJs,} from 'react-icons/fa';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiGithub 
} from "react-icons/si";
import { FaServer } from "react-icons/fa"; // for Express (since no official icon)


const skills = [
  { name: "React", icon: <SiReact className="text-sky-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express", icon: <FaServer className="text-gray-400" /> }, // substitute
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Github", icon: <SiGithub className="text-gray-200" /> }
];

const About = () => {
    return (
        <div id='about' className='bg-gray-950 flex flex-col text-white'>

  {/* First Card */}
  <div className='object-contain w-170 h-70 mb-10 ml-20 bg-gray-950 rounded-3xl shadow-2xl shadow-purple-400 text-center flex flex-col items-center justify-center'>
    <h2 className='text-4xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-light mb-4'>
      About Me
    </h2>
    <p className='max-w-xl text-center text-lg leading-relaxed'>
      I'm Maheen Farhat, a passionate Full Stack Web Developer...
    </p>
  </div>

  {/* Second Card */}
  <div className='object-contain w-170 h-70 self-end mr-20 shadow-2xl shadow-purple-400 mb-20 bg-gray-950 rounded-3xl text-center flex flex-col items-center justify-center'>
    <h2 className='text-4xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-light mb-12'>
      My Skills
    </h2>
    <ul className='flex justify-center gap-4 max-w-xl'>
      {skills.map((skill) => (
        <li key={skill.name} className='flex flex-col items-center'>
          <div className='text-4xl mb-2'>{skill.icon}</div>
          <span className='text-sm'>{skill.name}</span>
        </li>
      ))}
    </ul>
  </div>

</div>

    )
}
export default About