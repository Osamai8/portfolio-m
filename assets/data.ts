// Ground-truth portfolio content from the supplied Framer body; keep data separate from presentation.

import { TimelineEntry, ListEntry, StackItem, SkillGroup } from "./type";


// export const projects: Project[] = [
//   { title: 'Brandify', category: 'Agency Website', image: project1Image, href: '#contact' },
//   { title: 'Shiro', category: 'Personal Portfolio', image: project2Image, href: '#contact' },
//   { title: 'Vivid', category: 'App Showcase', image: project3Image, href: '#contact' },
//   { title: 'Capture', category: 'Video Agency', image: project1Image, href: '#contact' },
// ];

export const experience: TimelineEntry[] = [
  {
    location: 'Gurgaon, Haryana, IN',
    title: 'Frontend Developer',
    subtitle: 'Dhwani Rural Information System pvt. ltd.',
    dates: 'Jun 2022 - May 2026',
    body: [
      "Architected and shipped scalable applications and reusable component systems, reducing new feature development time by 20% and improving consistency across products.",
      "Built data-intensive platforms and interactive visualizations with React, Plotly.js, REST/GraphQL APIs, and large structured datasets.",
      "Integrated and optimized application state, API caching, and lazy loading with Redux and Zustand, reducing API failures by 15% and server costs by 18%.",
      "Developed production features spanning real-time communication, authentication, API integrations, and complex role-based workflows, supporting platforms used by thousands to millions of users.",
      "Improved production reliability by implementing Sentry and error boundaries, catching around 90% of application crashes before user impact."
    ],
  },
  {
    location: 'Gurgaon, Haryana, IN',
    title: 'React Developer Intern',
    subtitle: 'Dhwani Rural Information System pvt. ltd.',
    dates: 'Mar 2022 - June 2022',
    body: [
      "Developed and tested responsive React components across Chrome, Firefox, and Safari, contributing to reliable production releases.",
      "Integrated REST APIs and collaborated on debugging and data-flow issues, helping reduce the sprint bug backlog by 12%.",
      "Worked closely with senior developers during feature development, code reviews, debugging, and Agile sprint planning.",
      "Contributed to improving sprint velocity by 10% through active participation in planning, daily standups, and development workflows."
    ],
  }
];

export const education: TimelineEntry[] = [
  {
    location: 'Bareilly, UP, IN',
    title: 'Bachelor of Technology in Computer Science',
    subtitle: 'Future Institute of Engineering and Technology',
    dates: '2017 – 2021',
    body: []// ['Focused on advanced web technologies, user experience design, and front-end development.'],
  },
  {
    location: 'Bareilly, UP, IN',
    title: 'Senior Secondary in PCM (Physics, Chemistry and Mathematics)',
    subtitle: 'Airforce Senior Secondary School',
    dates: '2016 – 2017',
    body: []// ['Emphasized visual communication, design principles, and digital media.'],
  },
];

export const certifications: ListEntry[] = [
  { title: 'Certified Web Developer (CWD)', meta: 'International Web Association, 2021', action: 'View', href: '#contact' },
  { title: 'User Experience (UX) Design Certification', meta: 'Nielsen Norman Group, 2018', action: 'View', href: '#contact' },
  { title: 'Advanced HTML5 and CSS3 Specialist', meta: 'W3Schools, 2016', action: 'View', href: '#contact' },
  { title: 'Google Analytics Individual Qualification (GAIQ)', meta: 'Google, 2015', action: 'View', href: '#contact' },
];

export const stack: StackItem[] = [
  { title: 'Framer', description: 'No-code web design.', tone: 'blue', glyph: 'F' },
  { title: 'Design', description: 'General Design Tool', tone: 'orange', glyph: 'D' },
  { title: 'Managment', description: 'Project Managment', tone: 'green', glyph: 'M' },
  { title: 'Payments', description: 'Payment Platform', tone: 'violet', glyph: 'P' },
  { title: 'Meetings', description: 'Collaboration', tone: 'cobalt', glyph: 'M' },
  { title: 'Calls', description: 'Communication', tone: 'amber', glyph: 'C' },
];

export const awards: ListEntry[] = [
  { title: 'Site of the day', meta: 'Awwwards, 2023', action: 'Visit', href: '#contact' },
  { title: 'Site of the month', meta: 'Awwwards, 2020', action: 'Visit', href: '#contact' },
  { title: 'Website of the day', meta: 'CSS Design Awards, 2018', action: 'Visit', href: '#contact' },
  { title: 'Site of the day', meta: 'FWA, 2016', action: 'Visit', href: '#contact' },
];

export const recommendations = [
  { name: 'Jane Smith', role: 'Chief Marketing Officer at Digital Innovations Agency', quote: "Sam's design expertise and innovative approach have been pivotal to our agency's success. His ability to blend creativity with functionality is unmatched, and he consistently delivers projects that exceed client expectations." },
  { name: 'Michael Brown', role: 'Founder of Creative Solutions Studio', quote: "Sam is an exceptional web designer with a keen eye for detail and a deep understanding of user experience. His designs are not only visually stunning but also highly functional, making him an invaluable asset to any team." },
  { name: 'Lisa Turner', role: 'Senior Developer at TechWave LLC', quote: "Working with Sam was a pleasure. His collaborative spirit and technical skills made our projects run smoothly and efficiently. Sam's designs always struck the perfect balance between aesthetics and usability." },
];

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    tone: 'blue',
    skills: [
      { name: 'React.js', emphasized: true },
      { name: 'Next.js', emphasized: true },
      { name: 'Angular.js' },
      { name: 'Redux' },
      { name: 'Zustand' },
      { name: 'TanStack Query' },
      { name: 'Plotly.js' },
      { name: 'Context API' },
      { name: 'ShadCN' },
    ],
  },
  {
    category: 'Languages',
    tone: 'amber',
    skills: [
      { name: 'TypeScript', emphasized: true },
      { name: 'JavaScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    category: 'Backend',
    tone: 'green',
    skills: [
      { name: 'Node.js', emphasized: true },
      { name: 'Express.js' },
      { name: 'GraphQL' },
      { name: 'REST APIs' },
      { name: 'MongoDB' },
      { name: 'Socket.io' },
      { name: 'OAuth' },
      { name: 'JWT' },
    ],
  },
  {
    category: 'Cloud',
    tone: 'coral',
    skills: [{ name: 'AWS S3' }, { name: 'Docker' }, { name: 'CI/CD' }],
  },
  {
    category: 'Styling',
    tone: 'purple',
    skills: [
      { name: 'Tailwind CSS', emphasized: true },
      { name: 'Ant Design' },
      { name: 'MUI' },
      { name: 'Sass' },
    ],
  },
  {
    category: 'Tools',
    tone: 'teal',
    skills: [
      { name: 'Vite' },
      { name: 'Webpack' },
      { name: 'Git' },
      { name: 'Jest' },
      { name: 'React Testing Library' },
      { name: 'Sentry' },
      { name: 'Web Analytics' },
    ],
  },
];




