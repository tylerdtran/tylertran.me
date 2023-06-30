// import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { IconImages } from '../exports'
import { project_links } from '../../constants/constants'
// import { Element } from 'react-scroll'
import './Projects.scss'

export default function Projects() {
  return (
    <div id="outer-project-container" >
      <div id="main-container">
        <Fade direction="up" triggerOnce={true}>
          <div id="title-container">
            <div className="experience-name" id="title">Projects</div>
          </div>
        </Fade>
        <div id="project-container">
          {project_links &&
            project_links.map(
              ({ name, description, githubURL, websiteURL, image, tags }) => {
                return (
                  <Fade direction="up" key={name} triggerOnce={true}>
                    <div id="project-background">
                      <div id="column-wrapper">
                        <div id="project-column-1">
                          <div id="project-title-container">
                            <h1 className="project-name" id="project-title">{name}</h1>
                          </div>
                          <div id="project-description-container">
                            <h2 id="project-description">{description}</h2>
                          </div>
                          <div id="project-tags">
                            {tags.map((tag) => {
                              return (
                                <li key={tag} className="tag">
                                  {tag}
                                </li>
                              )
                            })}
                          </div>
                        </div>
                        <div id="project-column-2">
                          {image && (
                            <div id="project-vid">
                              <img src={image} alt="project"></img>
                            </div>
                          )}
                          <div id="external-link-container">
                            <a
                              id="project-github-url"
                              href={githubURL}
                              aria-label={name}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <IconImages name="GitHub" />
                            </a>
                            <a
                              id="project-website-url"
                              href={websiteURL}
                              aria-label={name}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <IconImages name="Website" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                )
              }
            )}
        </div>
      </div>
    </div>
  )
}

// import React from 'react';
// import './Projects.scss';
// import { project_links } from '../../constants/constants';
// import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import { Fade, Slide } from "react-awesome-reveal";

// export default function Projects() {
//   return (
//       <div id="Projects" className="main-container h-screen flex flex-col items-center justify-center">
//         <Fade>
//             <h1 className="title-name">Projects</h1>
//         </Fade>
//         <div className="flex flex-col justify-center items-center gap-4">
//           {project_links &&
//             project_links.map(
//               ({ name, description, githubURL, websiteURL, image, tags }) => {
//                 return (
//                     <Slide direction="right" triggerOnce={true} duration={1500}>
//                     <div className="project-background border-2 border-black">
//                       <div className="column-wrapper">
//                         <div className="project-column-1">
//                           <div className="project-title-container">
//                             <h1 className="project-title">{name}</h1>
//                           </div>
//                           <div className="project-description-container">
//                             <h2 className="project-description">{description}</h2>
//                           </div>
//                           <div className="project-tags flex flex-row gap-4">
//                             {tags.map((tag) => {
//                               return (
//                                 <div key={tag} className="tag">
//                                   {tag}
//                                 </div>
//                               )
//                             })}
//                           </div>
//                         </div>
//                         <div className="project-column-2">
//                             {image && (
//                             <div id="project-vid" >
//                               <img className="project-image" src={image} alt="website"></img>
//                             </div>
//                             )}
//                           <div className="external-link-container">
//                             <a
//                               className="project-github-url"
//                               href={githubURL}
//                               aria-label={name}
//                               target="_blank"
//                               rel="noreferrer"
//                             >
//                             </a>
//                             <a
//                               className="project-website-url"
//                               href={websiteURL}
//                               aria-label={name}
//                               target="_blank"
//                               rel="noreferrer"
//                             >
//                             </a>
//                           </div>
//                           <GitHubIcon />
//                           <OpenInNewIcon />
//                         </div>
//                       </div>
//                     </div>
//                     </Slide>
//                 )
//               }
//             )}
//         </div>
//       </div>
//   )
// }