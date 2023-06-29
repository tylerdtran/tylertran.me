import './navbar.scss';
import { navbar_links } from '../../constants/constants';
import { Fade } from "react-awesome-reveal";
// import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { Link } from 'react-scroll';


export default function Navbar() {
    return (

        <Fade className="fade" direction="down" duration={1000} triggerOnce={true}>
            <div className="navbar-main-container flex items-center space-between justify-between flex-wrap bg-teal-500 p-6 ">
                <div className="navbar-container w-full block flex-grow gap-4 lg:flex lg:items-center lg:w-auto">
                    {/* Make this into a list that is called from the array established in constants. */}
                    {navbar_links &&
                    navbar_links.map(({ name }, i) => {
                        return (
                            <Fade direction="down" delay={100} triggerOnce={true}>
                                <li className="nav-item block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                    <Link
                                        activeClass="active"
                                        to={name}
                                        spy={true}
                                        smooth={true}
                                        offset={-140}
                                        duration={500}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            </Fade>
                        )
                    })}
                </div>
                <Fade direction="down" cascade={true} delay={100} triggerOnce={true}>
                    <a 
                    href="mailto:tylerduytran@gmail.com"
                    aria-label="Email Tyler Tran"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <div id="nav-email">tylerduytran@gmail.com</div>
                    </a>
                </Fade>
            </div>
        </Fade>
    );
}

