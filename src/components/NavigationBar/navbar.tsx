import './navbar.scss';
import { navbar_links } from '../../constants/constants';

export default function Navbar() {
    return (
        <div className="navbar">
            <h1>Tyler Tran</h1>
            {/* Make this into a list that is called from the array established in constants. */}
            {navbar_links &&
              navbar_links.map(({ name }, i) => {
                return (
                    <li className="nav-item">
                        {name}
                    </li>
                )
              })}
            <a 
            href="mailto:tylerduytran@gmail.com"
            aria-label="Email Tyler Tran"
            target="_blank"
            rel="noreferrer"
            >
                 <div id="nav-email">tylerduytran@gmail.com</div>
            </a>
        </div>
    );
}

