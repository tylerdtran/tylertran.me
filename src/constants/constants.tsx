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
        role: 'Full-Stack Software Engineering Intern',
        image: MeristreamLogo,
        employer: 'Meristream',
        date: 'June 2023 - August 2023',
        description: [
            '• Constructed a scalable database infrastructure to handle over 100,000 users of relational data between subscriptions, customers and user transactions.',
            '• Utilized server-side rendering (SSR) through Next.js to optimize page load times by over 15% and reduce internal memory usage by 23%.',
            '• Leveraged Prisma Object Relational Mapping to efficiently model user data, handle user subscriptions, active device logins, and transaction history, and to construct relations within the PostgreSQL Database.',
            '• Established secure communication between the front-end UI states, Stripe API and Supabase via a self-developed Express.js API with webhooks, ensuring reliable, idempotent operations for secure data transmission.'
        ]
    },
    {
        role: 'Software Developer',
        image: TeachLA,
        employer: 'ACM TeachLA @ UCLA', 
        date: 'April 2023 - Present',
        description: [
            '• Created engaging web modules about the topic of recursion utilizing Typescript and SCSS to enhance interactive learning experiences for high school students.', 
            '• Designed and implemented reusable component modules for demonstrations of factorials and total cost computations and function call stack on the ACM RecursionLab, illustrating recursive problem-solving abilities.',
            '• Devised a strategic sprint plan for both my individual and group projects; leveraging github for issue announcements, and pull request monitoring.'
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
 