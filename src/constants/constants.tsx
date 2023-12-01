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
        url: 'https://www.facebook.com/tyler.tran.56863'
    }
]

const work_experience = [
    {
        role: 'Software Engineering Intern',
        image: MeristreamLogo,
        employer: 'Daily Bruin',
        date: 'June 2023 - September 2023',
        description: [
            '• Implemented an automated data synchronization solution using a CI/CD Pipeline for the Daily Bruin content management system, resulting in a 42% latency reduction for real-time updates and deployment time by 20%.',
            '• Spearheaded a team in developing an internal sources citation manager for journalists, utilizing MongoDB and Docker containerization to improve accessibility for Daily Bruin Staff to efficiently cite sources up to 30% faster.',
            '• Deployed and maintained Gallery-maker on Kubernetes, enabling Photo team to publish photo galleries and resolved authentication issue by reconfiguring Django admin access.',
            ]
    }, 
    {
        role: 'Software Developer',
        image: TeachLA,
        employer: 'ACM TeachLA @ UCLA', 
        date: 'April 2023 - Present',
        description: [
           '• Constructed a web-based integrated development environment (IDE) featuring in-browser support for Python, JavaScript, HTML, and React using TypeScript and Go for seamless multi-language coding and development.',
           '• Implemented reusable component modules for demonstrations of recursive problem solving methods on the ACM RecursionLab for over 1,000 students across Los Angeles high schools to interact with.',
           '• Debugged critical issues within the front-end UI and restructured the existing codebase to run automated error checks, reducing runtime compilation errors by 26%.'
        ]
    },
    {
        role: 'Software Engineering Intern',
        image: MeristreamLogo,
        employer: 'Meristream',
        date: 'June 2023 - September 2023',
        description: [
            '• Architected a scalable database infrastructure to handle over 100,000 users of relational data between subscriptions, customers, and user transactions.',
            '• Utilized Next.js server-side rendering to optimize page load times by over 15% and reduce internal memory usage by 23%.',
            '• Integrated Prisma Object Relational Mapping to efficiently model: user data, user subscriptions, active device logins, transaction history, and construct relations within the Supabase PostgreSQL Database.',
            '• Established secure communication between front-end UI states, Stripe API and Supabase by developing an Express.js API to ensure reliable, idempotent operations for secure data transmission.',
            '• Configured AWS IoT Device Management services to enforce login restrictions for IoT devices, leveraging selected payment options for enhanced security and access control.'
        ]
    }
]

const project_links = [
    
    {
        name: 'Meristream',
        description: 'Meristream is a subscription music streaming service that allows for you to play endlesss streams of sonically rich music at a fraction of the cost of other services.',
        githubURL: 'https://www.meristream.com/',
        websiteURL: 'https://www.meristream.com/',
        image: MeristreamSite,
        tags: ['Next.js', 'PostgreSQL', 'Prisma ORM', 'Stripe API', 'Supabase']
    },
    {
        name: 'Portfolio Site',
        description: 'This Portfolio website was built by Tyler Tran. I built this website using React, TypeScript, and Sass. I used Tailwind CSS and MaterialUI for styling. I used React awesome reveal for transitions and animations. ',
        githubURL: 'https://github.com/tylerdtran/tylertran.me',
        websiteURL: 'https://www.tylertran.me/',
        image: PortfolioWebsite,
        tags: ['React.js', 'TypeScript', 'Sass', 'Vercel', 'Tailwind CSS']
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
 