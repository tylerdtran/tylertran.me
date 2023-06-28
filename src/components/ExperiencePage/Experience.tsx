import React, { useState }from 'react';
import './Experience.scss';
import { work_experience } from '../../constants/constants';

export default function Experience(){
    const [selected, setSelected] = useState(work_experience[0]);
    const [selectedIdx, setSelectedIdx] = useState<number | undefined>();

    return (
        <div id="experience-main-container h-screen">
          <div id="experience-header-container">
            <div id="experience-header">Experience</div>
          </div>
          <div id="job-selection-column">
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
          </div>
          <div id="experience-inner-container">
            {work_experience.map(
              ({ role, image, employer, date, description }, i) => {
                return (
                  <div id="job-container" key={i}>
                    <br />
                    <h1>{role}</h1>
                    <img id="job-image" src={image} alt={image} />
                    <h2>{employer}</h2>
                    <h3>{date}</h3>
                    <div id="job-paragraph-container">
                      {description.map((description: string, i: number) => {
                        return <p key={i}>{description}</p>
                      })}
                    </div>
                  </div>
                )
              }
            )}
          </div>
        </div>
        // <div id="experience-main-container">
        //     <div id="experience-header-container">
        //         <h1> This is the Experience Page currently this is just a placeholder</h1>
        //     </div>
        // </div>
    );
}