
// import { Element } from 'react-scroll'
import { Fade } from 'react-awesome-reveal'

import { work_experience } from '../../constants/constants'
import './Experience.scss'

export const Experience = () => {
  return (
    <div id="Experience">
    <div id="outer-experience-container">
      <Fade direction="up" triggerOnce={true}>
        <div id="experience-main-container">
          <div id="experience-header-container">
            <div className="experience-name" id="experience-header">Experience</div>
          </div>
          {work_experience.map((experienceObj, i) => (
            <div key={i} id="experience-object-container">
              <div id="experience-image-container">
                {experienceObj.image && (
                  <img id="experience-image" src={experienceObj.image} alt="experience-proj"/>
                )}
              </div>
              <div id="experience-text-container">
                <div id="experience-title">{experienceObj.role}</div>
                <div id="experience-employer">{experienceObj.employer}</div>
                <div id="experience-date">{experienceObj.date}</div>
                {experienceObj.description.map((description, i) => {
                  return (
                    <div key={i} id="experience-description">
                      {description}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
    </div>
  )
}

// // import React, { useState }from 'react';/
// import './Experience.scss';
// import { work_experience } from '../../constants/constants';
// import { Slide, Reveal } from 'react-awesome-reveal';

// export default function Experience(){
//     // const [selected, setSelected] = useState(work_experience[0]);
//     // const [selectedIdx, setSelectedIdx] = useState<number | undefined>();

//     return (
//         <div id="Experience" className="experience-main-container h-screen flex flex-col items-center justify-center">
//           {/* <div id=""> */}
//           <Reveal className="experience-header-container" triggerOnce={true}>
//             <h1 className="experience-header experience-name uppercase">Experience</h1>
//           </Reveal>

//           <Slide direction="up" delay={500} triggerOnce={true}>
//             <div className="experience-inner-container flex flex-col justify-center items-center gap-4">
//             {work_experience.map(
//               (experienceObj, i) => {
//                 return (
//                   <div className="job-container grid grid-rows-4 grid-flow-col gap-2 border-2 border-black w-3/6" key={i}>
//                     <div className='image-container row-span-4'>
//                         <img className="job-image" src={experienceObj.image} alt="Experience" />
//                     </div>
//                     <div className='information-container col-span-3'>
//                         <h1>{experienceObj.role}</h1>
//                         <h2>{experienceObj.employer}</h2>
//                         <h3>{experienceObj.date}</h3>
//                     </div>
//                     <div className="job-paragraph-container row-span-3 col-span-3">
//                         {experienceObj.description.map((description: string, i: number) => {
//                             return <p key={i}>{description}</p>
//                         })}
//                         </div>

//                   </div>
//                 )
//               }
//             )}
//             </div>
//           </Slide>
//         </div>
//     );
// }