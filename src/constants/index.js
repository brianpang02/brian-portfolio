import {
mobile,
backend,
creator,
web,
javascript,
html,
css,
reactjs,
tailwind,
git,
figma,
java,
csharp,
python,
mySql,
bizera,
psa,
nus,
threejs,
ecommerce,
clothes,
bank,
parking
} from "../assets";

export const navLinks = [
{
    id: "about",
    title: "About",
},
{
    id: "work",
    title: "Work",
},
{
    id: "contact",
    title: "Contact",
},
];

const services = [
{
    title: "Web Developer",
    icon: web,
},
{
    title: "Mobile App Developer (Android)",
    icon: creator,
},
{
    title: "React JS Developer",
    icon: mobile,
},
{
    title: "FullStack Developer",
    icon: backend,
},

];

const technologies = [
{
    name: "HTML 5",
    icon: html,
},
{
    name: "CSS 3",
    icon: css,
},
{
    name: "Java",
    icon: java,
},
{
    name: "C#",
    icon: csharp,
},
{
    name: "mySql",
    icon: mySql,
},
{
    name: "python",
    icon: python,
},
{
    name: "JavaScript",
    icon: javascript,
},
{
    name: "React JS",
    icon: reactjs,
},
{
    name: "Tailwind CSS",
    icon: tailwind,
},
{
    name: "Three JS",
    icon: threejs,
},
{
    name: "git",
    icon: git,
},
{
    name: "figma",
    icon: figma,
},
];

const experiences = [
{
    title: "Web Application Developer Intern",
    company_name: "Biz-Era Pte Ltd",
    icon: bizera,
    iconBg: "#5a9133",
    date: "Jan 2023 - Jun 2023",
    points: [
    "Involved in developing Web and Mobile based applications.",
    "Helped in the Research and Development of Azure Workloads such as AI, Image Processing, Machine Learning and IoT.",
    "Development of Mobile Apps.",
    "Development of Websites.",
    "Tested pre-existing systems.",
    ],
},
{
    title: "PSA Hackathon",
    company_name: "PSA",
    icon: psa,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Oct 2023",
    points: [
    "Participated in PSA 2023 Hackathon with a team of 3.",
    "Contributed to planning and brainstorming of the web application.",
    "Developed the front-end for the final product.",
    "Conducted testing of the web application.",
    ],
},
{
    title: "NUS Orbital",
    company_name: "NUS",
    icon: nus,
    iconBg: "#E6DEDD",
    date: "May 2024 - Jul 2024",
    points: [
    "Participated in NUS Orbital pairwork project.",
    "Researched consumer problems and planned project scope.",
    "Developed both front-end and back-end of the application.",
    "Conducted testing and documented the project.",
    ],
},
];

const testimonials = [
{
    testimonial:
    "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
},
{
    testimonial:
    "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
},
{
    testimonial:
    "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
},
];

const projects = [
    {
        name: "Clothes Website",
        description:
        "Frontend Web Application of an clothes website that facilitates browsing, searching and buying of fashion items online.",
        tags: [
        {
            name: "HTML",
            color: "blue-text-gradient",
        },
        {
            name: "CSS",
            color: "green-text-gradient",
        }
        ],
        image: clothes,
        hosted_link:"https://brianpang02.github.io/Clothes-Website/",
        source_code_link: "https://github.com/brianpang02/Clothes-Website",
    },
    {
        name: "Ecommerce Website",
        description:
        "Frontend Web Application of an ecommerce website that facilitates buying and selling of products between users.",
        tags: [
        {
            name: "HTML",
            color: "blue-text-gradient",
        },
        {
            name: "CSS",
            color: "green-text-gradient",
        },
        {
            name: "JavaScript",
            color: "pink-text-gradient",
        },
        ],
    image: ecommerce,
    hosted_link:"https://brianpang02.github.io/Ecommerce-Website/",
    source_code_link: "https://github.com/brianpang02/Ecommerce-Website",
    },
    {
        name: "Bank Website",
        description:
        "Frontend Web Application of a bank website that displays the features, operations and testimonials supporting the use of the bank.",
        tags: [
        {
            name: "HTML",
            color: "blue-text-gradient",
        },
        {
            name: "CSS",
            color: "green-text-gradient",
        },
        {
            name: "JavaScript",
            color: "pink-text-gradient",
        },
        ],
        image: bank,
        hosted_link:"https://brianpang02.github.io/Bank-Website/",
        source_code_link: "https://github.com/brianpang02/Bank-Website",
    },
    {
        name: "Parking Mobile App",
        description:
        "An easy to use mobile Application to help users easily find out about parking availabilities nearby or through searching.",
        tags: [
        {
            name: "Java",
            color: "blue-text-gradient",
        },
        {
            name: "XML",
            color: "green-text-gradient",
        },
        {
            name: "Firebase",
            color: "pink-text-gradient",
        },
        ],
        image: parking,
        hosted_link:"",
        source_code_link: "https://github.com/jihyun88888/Orbital-2024",
    },
];

export { services, technologies, experiences, testimonials, projects };
