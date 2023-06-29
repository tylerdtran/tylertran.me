import React from 'react';
import './Projects.scss';
import { project_links } from '../../constants/constants';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Projects() {
  return (
      <div className="main-container h-screen flex flex-col items-center justify-center">
        <h1 className="title-name">Projects</h1>
        <div className="flex flex-col justify-center items-center gap-4">
          {project_links &&
            project_links.map(
              ({ name, description, githubURL, websiteURL, image, tags }) => {
                return (
                    <div className="project-background border-2 border-black">
                      <div className="column-wrapper">
                        <div className="project-column-1">
                          <div className="project-title-container">
                            <h1 className="project-title">{name}</h1>
                          </div>
                          <div className="project-description-container">
                            <h2 className="project-description">{description}</h2>
                          </div>
                          <div className="project-tags flex flex-row gap-4">
                            {tags.map((tag) => {
                              return (
                                <div key={tag} className="tag">
                                  {tag}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                        <div className="project-column-2">
                            {image && (
                            <div id="project-vid" >
                              <img className="project-image" src={image} alt="website"></img>
                            </div>
                            )}
                          <div className="external-link-container">
                            <a
                              className="project-github-url"
                              href={githubURL}
                              aria-label={name}
                              target="_blank"
                              rel="noreferrer"
                            >
                            </a>
                            <a
                              className="project-website-url"
                              href={websiteURL}
                              aria-label={name}
                              target="_blank"
                              rel="noreferrer"
                            >
                            </a>
                          </div>
                          <GitHubIcon />
                          <OpenInNewIcon />
                        </div>
                      </div>
                    </div>
                )
              }
            )}
        </div>
      </div>
  )
}