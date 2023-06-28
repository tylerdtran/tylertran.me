
import SCC from '../images/SCC-logo.png';
import TeachLA from '../images/TeachLA-logo.png';
import Meristream from '../images/Meristream-logo.png';



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
    }
]

const work_experience = [ 
    {
        role: 'Co-Founder/Software Engineer',
        image: Meristream,
        employer: 'Meristream, Inc.',
        date: 'June 2023 - Present',
        description: ['lorem ipsum']
    },
    {
        role: 'Development Team Member',
        image: TeachLA,
        employer: 'ACM TeachLA @ UCLA', 
        date: 'April 2023 - Present',
        description: ['lorem ipsum']
    }, 
    {
        role: 'Student ITS Help Desk',
        image: SCC, 
        employer: 'Santiago Canyon College',
        date: 'May 2021 - October 2022',
        description: ['lorem ipsum']
    }
]

const project_links = [
    {
        name: 'Meristream',
        description: 'lorem ipsum',
        githubURL: 'https://github.com/tylerdtran/meristream',
        websiteURL: '',
        image: '',
        video: '',
        tags: ['React', 'Node.js', 'Express', 'MongoDB']
    },
    {  
        name: 'Retainify',
        description: 'lorem ipsum',
        githubURL: 'https://github.com/tylerdtran/Retainify',
        websiteURL: 'null',
        image: '',
        video: '',
        tags: ['React', 'Node.js', 'Express', 'MongoDB']
    },
    {  
        name: 'BruinClub',
        description: 'lorem ipsum',
        githubURL: 'https://github.com/tylerdtran/BClub',
        websiteURL: 'https://astounding-chebakia-393e9f.netlify.app/',
        image: '',
        video: '',
        tags: ['React', 'Node.js', 'Express', 'MongoDB']
    }
]

export { navbar_links, network_links, work_experience, project_links }