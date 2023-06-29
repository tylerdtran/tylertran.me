// import React, { useState }from 'react';/
import './Experience.scss';
import { work_experience } from '../../constants/constants';
import { Slide, Reveal } from 'react-awesome-reveal';

export default function Experience(){
    // const [selected, setSelected] = useState(work_experience[0]);
    // const [selectedIdx, setSelectedIdx] = useState<number | undefined>();

    return (
        <div className="experience-main-container h-screen flex flex-col items-center justify-center">
          {/* <div id="experience-header-container  text-9xl uppercase font-black"> */}
          <Reveal triggerOnce={true}>
            <h1 className="experience-header title-name uppercase">Experience</h1>
          </Reveal>
          {/* </div> */}
          {/* <div id="job-selection-column">
            <ul>
              {work_experience.map((experienceObj, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setSelected(experienceObj)
                    setSelectedIdx(i)
                  }}
                  id={`job-title-container-${
                    selected.employer === experienceObj.employer
                  }`}
                >
                  <div id="employer-text">{experienceObj.employer}</div>
                </li>
              ))}
            </ul>
            <hr id={`selected-index-${selectedIdx}`} />
            <div id="experience-column">
              <div>
                <h1>{selected.role}</h1>
                <h2>{selected.date}</h2>
              </div>
              {selected.description.map((description: string, i: number) => {
                return <p key={i}>{description}</p>
              })}
            </div>
          </div> */}
          <Slide direction="up" delay={500} triggerOnce={true} className="experience-inner-container flex flex-col justify-center items-center gap-4">
            {work_experience.map(
              ({ role, image, employer, date, description }, i) => {
                return (
                  <div className="job-container grid grid-rows-4 grid-flow-col gap-2 border-2 border-black w-3/6" key={i}>
                    <div className='image-container row-span-4'>
                        <img className="job-image" src={image} alt={image} />
                    </div>
                    <div className='information-container col-span-3'>
                        <h1>{role}</h1>
                        <h2>{employer}</h2>
                        <h3>{date}</h3>
                    </div>
                    <div className="job-paragraph-container row-span-3 col-span-3">
                        {description.map((description: string, i: number) => {
                            return <p key={i}>{description}</p>
                        })}
                        </div>

                  </div>
                )
              }
            )}
          </Slide>
        </div>
    );
}