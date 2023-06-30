
// import SCC from '../images/SCC-logo.png';
import TeachLA from '../images/TeachLA-logo.png';
import MeristreamLogo from '../images/Meristream-logo.png';
import Retainify from '../images/Retainify-presentation.png';
import MeristreamSite from '../images/meristream.png';
import BruinClubSite from '../images/BruinClubSite.png';
import PortfolioWebsite from '../images/TylerTranWebsite.png';

// create an array of constants for the navbar
const navbar_links = [ 
    {
        name: 'Home'
    }, 
    {
        name: 'About'  
    },
    {
        name: 'Experience'
    },
    {
        name: 'Projects'
    }
]

const network_links = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/tylerdtran/' 
    },
    {
        name: 'GitHub',
        url: 'https://github.com/tylerdtran'
    },
    {
        name: 'Email',
        url: 'mailto:tylerduytran@gmail.com'
    },
    {
        name: 'Facebook',
        url: 'mailto:tylerduytran@gmail.com'
    }
]

const work_experience = [ 
    {
        role: 'Co-Founder/Software Engineer',
        image: MeristreamLogo,
        employer: 'Meristream, Inc.',
        date: 'June 2023 - Present',
        description: ['lorem ipsum']
    },
    {
        role: 'Front-End Developer',
        image: TeachLA,
        employer: 'ACM TeachLA @ UCLA', 
        date: 'April 2023 - Present',
        description: ['lorem ipsum']
    }
]

const project_links = [
    
    {
        name: 'Meristream',
        description: 'Meristream is a subscription music streaming service that allows for you to play sonically rich spa music at a fraction of the cost of other services.',
        githubURL: 'https://github.com/tylerdtran/meristream',
        websiteURL: 'https://github.com/tylerdtran/meristream',
        image: MeristreamSite,
        tags: ['Next.js', 'Vercel', 'MongoDB', 'TypeScript', 'Sass']
    },
    {
        name: 'Portfolio Site',
        description: 'This Portfolio website was built by Tyler Tran. I built this website using React, TypeScript, and Sass. I used Tailwind CSS and MaterialUI for styling. I used React awesome reveal for transitions and animations. ',
        githubURL: 'https://github.com/tylerdtran/tylertran.me',
        websiteURL: 'https://github.com/tylerdtran/tylertran.me',
        image: PortfolioWebsite,
        tags: ['React.js', 'TypeScript', 'Sass', 'Node.js', 'Tailwind CSS']
    },
    {  
        name: 'Retainify',
        description: 'Retainify seamlessly integrates into your student workflow by taking your class notes and automically generating free-response review questions from the Cohere AI Large Language Models 🧠. ',
        githubURL: 'https://github.com/tylerdtran/Retainify',
        websiteURL: 'https://github.com/tylerdtran/Retainify',
        image: Retainify,
        tags: ['Flutter', 'Cohere AI LLM', 'Dart', 'Notion REST API', 'Apache Hive DB']
    },
    {  
        name: 'BruinClub',
        description: 'BClub revolutionizes the way Bruins and clubs at UCLA connect by providing a cutting-edge platform. It offers an intuitive interface for club profile pages, seamless event calendars, convenient club interest forms, and robust search and filtering capabilities.',
        githubURL: 'https://github.com/tylerdtran/BClub',
        websiteURL: 'https://astounding-chebakia-393e9f.netlify.app/',
        image: BruinClubSite,
        tags: ['React', 'CSS', 'Node.js', 'Google Firebase', 'React Bootstrap', 'Netlify']
    }
]

export { navbar_links, network_links, work_experience, project_links }
 