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
        role: 'Co-Founder/Software Engineer',
        image: MeristreamLogo,
        employer: 'Meristream, LLC.',
        date: 'June 2023 - Present',
        description: [
            '• Co-Founder and Full-Stack Developer for the Meristream web and mobile application.',
            '• Established a Subscription as a Service (SaaS) using the Stripe API and Supabase PostgreSQL (Prisma ORM) to manage user subscriptions/device logins.',
            '• Implemented the Front-End Design of the Meristream Website using Next.js, TypeScript, and Sass.',
            '• Co-assisted my fellow Co-Founder/Composer Aidan Vass, in the development of the Spa Music Algorithm using RNBO software'
        ]
    },
    {
        role: 'Front-End Developer',
        image: TeachLA,
        employer: 'ACM TeachLA @ UCLA', 
        date: 'April 2023 - Present',
        description: [
            '• Developed engaging web modules about the topic of recursion utilizing Typescript and SCSS to enhance interactive learning experiences for high school students.', 
            '• Worked under strategic and rigorous sprint plans for both my individual and group projects, ensuring timely completion of tasks.',
            '• Leveraged git/github for robust pull request monitoring and maintaining code integrity.'
        ]
    }
]

const project_links = [
    
    {
        name: 'Meristream',
        description: 'Meristream is a subscription music streaming service that allows for you to play endlesss streams of sonically rich music at a fraction of the cost of other services.',
        githubURL: 'https://github.com/tylerdtran/meristream',
        websiteURL: 'https://github.com/tylerdtran/meristream',
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
 