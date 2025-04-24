const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/JawedBS/cleanfolio.git',
  title: 'JBS',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ben salah Jawed',
  role: 'Intégrateur Web',
  // short description can be used as subtitle
  description:
  "Je suis Jawed Ben Salah, intégrateur web passionné par le détail qui change tout. Avant de coder, j’ai appris à transmettre : expliquer des concepts scientifiques, les rendre clairs et vivants. Aujourd’hui, j’applique cette même exigence dans mes interfaces. J’aime transformer des maquettes en expériences intuitives, lisibles et accessibles. Chaque ligne de code est un choix, chaque interaction raconte quelque chose. Mon objectif : un web à la fois beau, rapide et humain.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/JawedBS',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  // if you want to add a project, follow the format below
  {
    name: 'OhMyFood',
    description:
  "Site vitrine responsive de menus gastronomiques avec animations CSS avancées. J’ai construit ce projet de A à Z en m’appliquant à rendre l’expérience fluide et vivante. Il m’a permis de plonger dans les transitions CSS complexes et de maîtriser le responsive design jusque dans les moindres détails.",
    stack: ['HTML','Animations CSS', 'SASS'],
    sourceCode: 'https://github.com/JawedBS/OhMyFood.git',
    livePreview: 'https://ohmyfood-jbs.netlify.app/', 
  },
  {
    name: 'Nina Carducci',
    description:
  "Optimisation d’un site de photographe pour améliorer son SEO, ses performances et son accessibilité. J’ai mené une analyse complète via Lighthouse et mis en place des optimisations techniques concrètes : balises sémantiques, structure ARIA, amélioration du temps de chargement. Ce projet m’a appris à rendre un site vraiment performant… sans sacrifier l’esthétique.",
    stack: ['HTML', 'SEO', 'Accessibilité', 'Référencement'],
    sourceCode: 'https://github.com/JawedBS/Nina-Carducci.git',
    livePreview: 'https://nina-carducci-jbs.netlify.app/',
  },
  {
  name: 'Printit',
  description:
  "Refonte visuelle d’un site vitrine à partir d’une maquette Figma. Mon rôle : intégrer chaque section au pixel près tout en assurant une cohérence d’ensemble. Ce projet m’a permis de perfectionner ma rigueur en intégration HTML/CSS et de travailler la lisibilité d’un site professionnel.",
  stack: ['HTML', 'CSS', 'JavaScript'],
  sourceCode: 'https://github.com/JawedBS/Printit.git',
  livePreview: 'https://jawedbs.github.io/Printit/',
},
];

const skills = {
  languages: ['HTML', 'CSS', 'SASS', 'JavaScript'],
  frameworks: ['React', 'Redux'],
  tools: ['Git', 'GitHub'],
  others: ['Accessibilité', 'Référencement SEO'],
  intro:
    "Voici les technologies que j’utilise au quotidien pour construire des interfaces modernes, accessibles et performantes.",
}

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jawedb93@gmail.com',
  cta: "Un projet, une idée, ou juste envie de discuter ? Écris-moi :)",
}
const extra = {
  title: 'À propos de moi, autrement',
  content: [
    {
      heading: 'Pourquoi je code',
      text: "Parce que j’aime transformer des idées abstraites en interfaces concrètes. Parce que le code est une forme de création, de structure et de liberté. Et aussi... parce que c’est kiffant quand tout marche sans bug 😅.",
    },
    {
      heading: 'Ma vision du web',
      text: "Un bon site est comme un bon livre : il se lit facilement, il donne envie d’aller plus loin, et il laisse une impression durable. Pour moi, un bon dev sait à la fois coder, penser à l’utilisateur, et aimer les détails.",
    },
    {
      heading: 'Parcours express',
      text:
        "→ 1 an comme technicien de laboratoire à l’hôpital Avicenne – rigueur, méthode, précision scientifique.\n" +
        "→ 5 ans en médiation scientifique chez Les Petits Débrouillards, dont 6 mois en tant que chargé de projet – pédagogie, vulgarisation, coordination terrain.\n" +
        "→ Responsable de médiation dans un musée – transmettre, organiser et mettre en scène le savoir pour tous les publics.\n" +
        "→ Reconverti dans le développement web : je suis aujourd’hui intégrateur, passionné par le pixel perfect, l’accessibilité, et l’expérience utilisateur fluide.",
    },
    {
      heading: 'Références & Fun facts',
      text: "Je code souvent avec des OST de Dragon Ball Z ou du Lofi.\nMon deck Yu-Gi-Oh préféré ? Les Héros Élémentaires.\nMa team Pokémon de cœur ? Gallame, Zeraora, Jungko, Simiabraz, Aligatueur et Cizayox.\nJe suis autant Sinbad que Vegeta Ultra Ego – selon l’humeur du jour.",
    },
  ],
}


export { header, about, projects, skills, contact, extra }
