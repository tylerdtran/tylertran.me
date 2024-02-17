import TeachLA from '../images/TeachLA-logo.png';
import MeristreamLogo from '../images/Meristream-logo.png';
import Retainify from '../images/Retainify-presentation.png';
import MeristreamSite from '../images/meristream.png';
import BruinClubSite from '../images/BruinClubSite.png';
import PortfolioWebsite from '../images/TylerTranWebsite.png';
import DailyBruinLogo from '../images/dailybruin_logo.png'
import NBCUniversalLogo from '../images/NBCUniversal_logo.jpeg'
import Little_Free_Libgen from '../images/Little_Free_Libgen.png'
import ColorCue from '../images/ColorCue.png'

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
        image: NBCUniversalLogo,
        employer: 'NBCUniversal Media, LLC',
        date: 'June 2024 - August 2024',
        description: [
            '• Incoming Summer Media Tech Intern for the Site Reliability and Automation Team.',
            ]
    }, 
    {
        role: 'Software Engineering Intern',
        image: DailyBruinLogo,
        employer: 'Daily Bruin',
        date: 'October 2023 - Present',
        description: [
            '• Implemented an automated data synchronization solution using a CI/CD Pipeline for the Daily Bruin content management system, resulting in a 42% latency reduction for real-time updates and deployment time by 20%.',
            '• Directed a team in developing an internal sources citation manager for journalists, utilizing MongoDB and Docker containerization to improve accessibility for Daily Bruin Staff to cite sources up to 30% faster.',
            '• Deployed and maintained Gallery-maker on Kubernetes, enabling Photo team to publish photo galleries and updating the Django model to streamline the relational data modeling.',
            ]
    }, 
    {
        role: 'Software Developer',
        image: TeachLA,
        employer: 'ACM TeachLA @ UCLA', 
        date: 'April 2023 - March 2024',
        description: [
           '• Constructed a web-based integrated development environment (IDE) featuring in-browser support for Python, JavaScript, HTML, and React using TypeScript and Go for seamless multi-language coding and development.',
           '• Implemented reusable component modules for demonstrations of recursive problem solving methods on the ACM RecursionLab for over 1,000 students across Los Angeles high schools to interact with.',
           '• Debugged critical issues within the front-end UI and established a DevOps CI/CD pipeline through Github Actions to run automated error checks, reducing runtime compilation errors by 26%.'
        ]
    },
    {
        role: 'Software Engineering Intern',
        image: MeristreamLogo,
        employer: 'Meristream',
        date: 'June 2023 - September 2023',
        description: [
            '• Implemented a scalable database infrastructure from scratch, tailored to manage relational data across subscriptions, customers, and user transactions, accommodating over 50,000 users.',
            '• Led the complete development cycle of the IoT device login enforcement restriction feature, and configured AWS IoT Device Management services to enhance security for selected payment options and access control.',
            '• Optimized page load times by 15% and reduce internal memory usage by 23% using Next.js server-side rendering.',
            '• Integrated Prisma Object Relational Mapping to efficiently model: user data, user subscriptions, active device logins, transaction history, and construct relations within the Supabase PostgreSQL Database.',
            '• Established secure communication between front-end UI states, Stripe API and Supabase by developing an Express.js API to ensure reliable, idempotent operations for secure data transmission.'
        ]

    }
]

const project_links = [
    {
        name: 'ColorCue',
        description: 'A firefox extension to help the web more accessible for color-blind individual.',
        githubURL: 'https://github.com/johnhoffm/ColorCue',
        websiteURL: 'https://devpost.com/software/colorcue',
        image: ColorCue,
        tags: ['JavaScript', 'TypeScript', 'CSS']
    }, 
    {
        name: 'Little Free Library',
        description: 'Little Free Libgen is composed of a network of library units with their contents easily accessible through a mobile app. Users can exchange a book by scanning the ISBN barcodes of the checked-in and checked-out books. This unlocks and locks the library while simultaneously updating the units catalog of currently present books. Each library units catalog can be explored on apps the main map page.',
        githubURL: 'https://github.com/tylerdtran/little-free-libgen',
        websiteURL: 'https://devpost.com/software/little-free-libgen',
        image: Little_Free_Libgen,
        tags: ['C++', 'MongoDB', 'React-Native', 'Node.js', 'MongoDB', 'Git']
    }, 
    {
        name: 'Meristream',
        description: 'Meristream is a subscription music streaming service that allows for you to play endlesss streams of sonically rich music at a fraction of the cost of other services.',
        githubURL: 'https://github.com/tylerdtran/meristream',
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
        websiteURL: 'https://devpost.com/software/retainify',
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

const blog_post = [
    { 
        title: 'My Latest Obsession with Cooking Traditional Cuisine',
        date: '12-22-2023',
        blog: 'I have been very much interested in the ideals of cantonese cooking lately. Namely the level of worksmanship and craft required to make it just right. Food tells me a story, a story that I am hoping to pass down to others in the near future. My mother is the best cook I have ever known. What she makes represents the true essence of what true cantonese/vietnamese cooking should be like. She finds a way to maximize the flavors in a dish while simultaneously maintaining balance and harmony through her own intuition. I would say the true premise of cantonese cooking is often rooted in the infusion of various sweet, savory/salty, and sour flavors characteristic of the food down in southern china. For me in my limited experience cooking, this very intuition is quite challenging to master, there must occur a extensive round of trial and error to master such flavors but what’s equally as important in cooking is having the taste for what’s delicious is largely acquired over years and years of eating that very food. After all traditional recipes are what they are because they work. Deviations such as the new wave of TikTok trends in cooking tend to deviate from what works in hopes of gaining attraction and being avant garde. But rather I’ve always found that something was off about the food I made when I followed such recipes. And that’s why I’m looking to tell stories and reinvest my interest in my culture and language through food.'
    }
]

export { navbar_links, network_links, work_experience, project_links, blog_post }
 