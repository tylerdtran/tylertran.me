import React from 'react'
import { SideBar, IconImages } from '../exports'
import { network_links } from '../../constants/constants'
import './SocialSidebar.scss'

export default function SocialSideBar() {
  return (
    <SideBar location="right">
      <div id="social-list">
        {network_links &&
          network_links.map(({ url, name }) => (
            <li key={name}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                <IconImages name={name} />
              </a>
            </li>
          ))}
      </div>
    </SideBar>
  )
}