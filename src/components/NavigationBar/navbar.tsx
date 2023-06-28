import './navbar.scss';
import { navbar_links } from '../../constants/constants';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

export default function Navbar() {
    return (
        <div className="navbar flex items-center justify-between flex-wrap bg-teal-500 p-6 sticky top-0">
            <AccessibilityNewIcon />
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            {/* Make this into a list that is called from the array established in constants. */}
            {navbar_links &&
              navbar_links.map(({ name }, i) => {
                return (
                    <li className="nav-item block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        <a href="{$name}">
                        {name}
                        </a>
                    </li>
                )
              })}
            </div>
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

