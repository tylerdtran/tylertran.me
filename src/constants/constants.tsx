
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
        description: 'lorem ipsum',
        githubURL: 'https://github.com/tylerdtran/meristream',
        websiteURL: 'https://github.com/tylerdtran/meristream',
        image: MeristreamSite,
        tags: ['Next.js', 'Vercel', 'MongoDB', 'TypeScript', 'Sass']
    },
    {
        name: 'Portfolio Website',
        description: 'lorem ipsum',
        githubURL: 'https://github.com/tylerdtran/tylertran.me',
        websiteURL: 'https://github.com/tylerdtran/tylertran.me',
        image: PortfolioWebsite,
        tags: ['React.js', 'TypeScript', 'Sass', 'Node.js', 'Tailwind CSS']
    },
    {  
        name: 'Retainify',
        description: 'lorem ipsum',
        githubURL: 'https://github.com/tylerdtran/Retainify',
        websiteURL: 'https://github.com/tylerdtran/Retainify',
        image: Retainify,
        tags: ['Flutter', 'Cohere AI LLM', 'Dart', 'Notion REST API', 'Apache Hive DB']
    },
    {  
        name: 'BruinClub',
        description: 'lorem ipsum',
        githubURL: 'https://github.com/tylerdtran/BClub',
        websiteURL: 'https://astounding-chebakia-393e9f.netlify.app/',
        image: BruinClubSite,
        tags: ['React', 'CSS', 'Node.js', 'Google Firebase', 'React Bootstrap', 'Netlify']
    }
]

export { navbar_links, network_links, work_experience, project_links }