const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'JBS',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ben salah Jawed',
  role: 'Intégrateur Web',
  // short description can be used as subtitle
  description:
    'Bonjour, je suis Jawed Ben salah, un intégrateur web passionné par la création de sites web modernes et réactifs. Je suis spécialisé dans le développement front-end et j\'adore transformer des maquettes en expériences utilisateur fluides.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/JawedBS',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Kasa',
    description: 'Application de location immobilière construite avec React. Ce projet m’a appris à gérer le routing, les composants réutilisables et la manipulation de données dynamiques.',
    stack: ['React', 'React Router', 'SASS'],
    sourceCode: 'https://github.com/JawedBS/Kasa.git', 
    livePreview: '',
  },
  {
    name: 'OhMyFood',
    description: 'Site vitrine responsive de menus gastronomiques avec animations CSS avancées. Ce projet m’a appris à travailler la structure HTML, le responsive design et les animations.',
    stack: ['HTML','Animations CSS'],
    sourceCode: 'https://github.com/JawedBS/OhMyFood.git',
    livePreview: '', 
  },
  {
    name: 'Nina Carducci',
    description: 'Optimisation SEO, accessibilité et performance pour un site de photographe. Analyse Lighthouse, SEO technique, et corrections sémantiques.',
    stack: ['HTML', 'SEO', 'Accessibilité', 'Lighthouse'],
    sourceCode: 'https://github.com/JawedBS/Nina-Carducci.git',
    livePreview: 'https://jawedbs.github.io/Nina-Carducci/',
  },
  {
  name: 'Printit',
  description: 'Modification d’un site vitrine pour une entreprise d’impression. Intégration et mise en page selon une maquette Figma.',
  stack: ['HTML', 'CSS', 'JavaScript'],
  sourceCode: 'https://github.com/JawedBS/Printit.git',
  livePreview: 'https://jawedbs.github.io/Printit/',
},
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'SASS',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jawedb93@gmail.com',
}

export { header, about, projects, skills, contact }
