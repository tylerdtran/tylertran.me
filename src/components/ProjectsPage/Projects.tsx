import React from 'react';
import './Projects.scss';
import { project_links } from '../../constants/constants'
import './Projects.scss'

export default function Projects() {
  return (
      <div className="main-container">
            <div id="title">Projects</div>
        <div >
          {project_links &&
            project_links.map(
              ({ name, description, githubURL, websiteURL, tags }) => {
                return (
                    <div id="project-background">
                      <div id="column-wrapper">
                        <div id="project-column-1">
                          <div id="project-title-container">
                            <h1 id="project-title">{name}</h1>
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
                          <div id="external-link-container">
                            <a
                              id="project-github-url"
                              href={githubURL}
                              aria-label={name}
                              target="_blank"
                              rel="noreferrer"
                            >
                            </a>
                            <a
                              id="project-website-url"
                              href={websiteURL}
                              aria-label={name}
                              target="_blank"
                              rel="noreferrer"
                            >
                            </a>
                          </div>
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