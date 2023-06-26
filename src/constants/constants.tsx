
import SCC from '../images/SCC-logo.png';
import TeachLA from '../images/TeachLA-logo.png';



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
        role: 'Development Team Member',
        image: TeachLA,
        employer: 'ACM TeachLA @ UCLA', 
        date: 'April 2023 - Present',
        description: 'lorem ipsum'
    }, 
    {
        role: 'Student ITS Help Desk',
        image: SCC, 
        employer: 'Santiago Canyon College',
        date: 'May 2021 - October 2022',
        description: 'lorem ipsum'
    }
]

const projectLinks = [
    {
        name: 'Meristream',
        description: 'lorem ipsum',
        GithubURL: '',
        WebsiteURL: '',
        image: '',
        video: '',
        tags: ['React', 'Node.js', 'Express', 'MongoDB']
    },
    {  
        name: 'Retainify',
        description: 'lorem ipsum',
        GithubURL: '',
        WebsiteURL: '',
        image: '',
        video: '',
        tags: ['React', 'Node.js', 'Express', 'MongoDB']
    },
    {  
        name: 'BruinClub',
        description: 'lorem ipsum',
        GithubURL: '',
        WebsiteURL: '',
        image: '',
        video: '',
        tags: ['React', 'Node.js', 'Express', 'MongoDB']
    }
]

export { navbar_links, network_links, work_experience, projectLinks}