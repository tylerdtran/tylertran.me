// import Reactfrom 'react';
import './navbar.scss';
import { navbar_links } from '../../constants/constants';
import { Fade } from "react-awesome-reveal";
// import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { Link } from 'react-scroll';
// import { FaBars } from "react-icons/fa";
// import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {

    return (

        <Fade className="fade w-screen md:w-full" direction="down" duration={1000} triggerOnce={true} >
            <div className="navbar-main-container flex items-center space-between flex-start bg-grey p-6 ">
                <div className="navbar-container w-full block flex-grow md:gap-4 flex items-center w-auto">
                    {/* Make this into a list that is called from the array established in constants. */}
                    {navbar_links &&
                    navbar_links.map(({ name }, i) => {
                        return (
                            <Fade cascade direction="left" delay={800} triggerOnce={true} >
                                <li className="nav-item block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4">
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
                        <div className="nav-email">tylerduytran@gmail.com</div>
                    </a>
                </Fade>
            </div>
        </Fade>
    );
}

