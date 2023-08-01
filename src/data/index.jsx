import Moon1 from '../assets/Moon1.PNG'
import LMJ1 from '../assets/LMJ1.PNG'
import MyFreeWorks1 from '../assets/MyFreeWorks1.PNG'
import Sems from '../assets/Sems.png'
import TOWN from '../assets/TOWN.png'
import vitrine_design from '../assets/vitrine-design.png'
import lucy from '../assets/LUCY.png'
import votrelogo from '../assets/votrelogo.png'
import rano from '../assets/rano.png'
import lana from '../assets/lana.png'
import anna from '../assets/anna.png'
import legal from '../assets/legal.png'
import trustful from '../assets/trustful.PNG'
import safZone from '../assets/safZone.png'
import ebookyo from '../assets/e-bookyo.png'
import lens from '../assets/lens.PNG'

export const myName = 'Valdès AGBOKONI'

export const navigationElements = [
  {
    id: 'accueil',
    title: 'Accueil',
    href: '#',
  },

  {
    id: 'abouteMe',
    title: 'A Propos',
    href: '#about-me',
  },

  {
    id: 'skills',
    title: 'Skills',
    href: '#skills',
  },

  {
    id: 'portfolio',
    title: 'Portfolio',
    href: '#portfolio',
  },

  {
    id: 'contact',
    title: 'Contact',
    href: '#contact',
  },
]

export const typerwriterElements = [
  myName,
  'Développeur web.',
  'Designer graphique.',
]

export const statistiquesElements = [
  {
    id: '1',
    value: '+3',
    text: "Ans d'expériences",
  },

  {
    id: '2',
    value: '+15',
    text: 'Clients satisfaits',
  },

  {
    id: '3',
    value: '+20',
    text: 'Projets réalisés',
  },
]

export const skillsElements = [
  {
    id: 'HTML-5',
    name: 'HTML5',
    icone: 'fa-brands fa-html5 fa-2x text-primary',
    level: 89,
  },
  {
    id: 'WordPress',
    name: 'WordPress',
    icone: 'fa-brands fa-wordpress-simple fa-2x text-primary',
    level: 35,
  },

  {
    id: 'CSS-3',
    name: 'CSS3',
    icone: 'fa-brands fa-css3-alt fa-2x text-primary',
    level: 77,
  },

  {
    id: 'JavaScript',
    name: 'JavaScript',
    icone: 'fa-brands fa-js fa-2x text-primary',
    level: 82,
  },
  {
    id: 'React',
    name: 'React Js',
    icone: 'fa-brands fa-react fa-2x text-primary',
    level: 79,
  },

  {
    id: 'Express',
    name: 'Express Js',
    // icone: 'fa-brands fa-react fa-2x text-primary',
    level: 52,
  },
  {
    id: 'Node',
    name: 'Node.js',
    icone: 'fa-brands fa-node fa-2x text-primary',
    level: 54,
  },
  {
    id: 'MongoDB',
    name: 'MongoDB',
    icone: 'fa-sharp fa-solid fa-server fa-2x text-primary',
    level: 51,
  },

  {
    id: 'PHP',
    name: 'PHP',
    icone: 'fa-brands fa-php fa-2x text-primary',
    level: 25,
  },

  {
    id: 'MySql',
    name: 'MySQL',
    icone: 'fa-solid fa-database fa-2x text-primary',
    level: 25,
  },

  {
    id: 'Laravel',
    name: 'Laravel',
    icone: 'fa-brands fa-laravel fa-2x text-primary',
    level: 25,
  },

  {
    id: 'Photoshop',
    name: 'Photoshop',
    icone: 'fa-solid fa-image fa-2x text-primary',
    level: 38,
  },

  {
    id: 'Illustrator',
    name: 'Illustrator',
    icone: 'fa-solid fa-bezier-curve fa-2x text-primary',
    level: 35,
  },
]

export const typesDeSitesElements = [
  {
    id: 'all',
    title: 'All',
  },

  {
    id: 'vitrine',
    title: 'Site vitrine',
  },

  {
    id: 'portfolio',
    title: 'Portfolio',
  },

  {
    id: 'OnePage_landing',
    title: 'Site onepage/Landing page',
  },

  {
    id: 'e_commerce',
    title: 'Site e-commerce',
  },

  {
    id: 'marketplace',
    title: 'Marketplace',
  },
]

export const portfolioElements = [
  {
    id: 'legal',
    title: 'Legal',
    link: 'https://legal.valdesagbokoni.com/',
    description:
      "Legal est un site vitrine pour une agence/entreprise spécialisée dans le droit. Grâce à cette vitrine, les potentiels clients ont facilement accès aux informations voulues et une facilité à entrer en contact avec les membres de l'équipe de l'agence pour de potentiels services.",
    cover: legal,
    type: 'Site vitrine',
  },

  {
    id: 'TOWN-Portfolio',
    title: 'Carla TOWN',
    link: 'https://carlatown.valdesagbokoni.com/',
    description:
      'Un peu comme le projet Clarita, Carla, photographe, a eu droit à un portfolio. Le sien par contre est multipage et a une section blog (simulées bien entendu).',
    cover: TOWN,
    type: 'Portfolio',
  },
  {
    id: 'Sems-Portfolio',
    title: 'Sems Clarita',
    link: 'https://semsclarita.valdesagbokoni.com/',
    description:
      "Sems Clarita: Ici nous avons un prototype de portfolio pour une Brand Designer, j'ai nommée, Clarita.",
    cover: Sems,
    type: 'Portfolio',
  },

  {
    id: 'Votre-LOGO',
    title: 'Design agency',
    link: 'https://site-vitrine-multipage.valdesagbokoni.com/',
    description:
      "Ce projet est un site vitrine pour une agence fictive de design web. C'est un site vitrine multipage (simulation).",
    cover: votrelogo,
    type: 'Site vitrine',
  },

  {
    id: 'MyFreeWorks',
    title: 'MyFreeWorks',
    link: 'https://myfreeworks.valdesagbokoni.com/',
    description:
      "Ce site est en quelques sortes une marketplace. Vous pouvez y vendre différents objets. Cependant, sa construction n'est pas encore finalisée😉",
    cover: MyFreeWorks1,
    type: 'Marketplace',
  },
  {
    id: 'LUCY-TOWNSEND',
    title: 'LUCY TOWNSEND',
    link: 'https://portfolio-multipage.valdesagbokoni.com/',
    description:
      'Ce projet est un portfolio multipage pour une personne fictive (simulation).',
    cover: lucy,
    type: 'Portfolio',
  },

  {
    id: 'MoonStore',
    title: 'MoonStore',
    link: 'https://moonstore.valdesagbokoni.com/',
    description:
      "MoonStore, est un projet personnel: un site e-commerce minimaliste. Je me suis plus concentré sur le backend que sur l'aspect visuel, pour évaluer mes aptitudes avec React Js.",
    cover: Moon1,
    type: 'Site e-commerce',
  },
  {
    id: 'vitrine-design',
    title: 'SMMA agency',
    link: 'https://vitrine-design.valdesagbokoni.com/',
    description:
      "Ce projet est un site vitrine pour une agence fictive de design web. C'est un site vitrine onepage.",
    cover: vitrine_design,
    type: 'Site vitrine',
  },

  {
    id: 'rano',
    title: 'RANO',
    link: 'https://rano.valdesagbokoni.com/',
    description:
      "Ce projet est un site onepage/landing page dédié à la présentation d'une nouvelle application mobile. Avec un design moderne et attrayant, j'ai mis en avant les fonctionnalités uniques de cette application et les avantages qu'elle offre. Le site offre une expérience immersive avec des visuels captivants, des animations fluides et des informations claires pour attirer l'attention des visiteurs.",
    cover: rano,
    type: 'Site onepage/Landing page',
  },

  {
    id: 'lana',
    title: 'LANA',
    link: 'https://lana.valdesagbokoni.com/',
    description:
      "Découvrez un site vitrine captivant conçu spécialement pour les passionnés de l'art visuel. Présentant le travail exceptionnel d'un talentueux artiste visuel ( fictif ), ce site est une vitrine numérique mettant en avant sa créativité, son expertise et son style unique. Chaque élément visuel est soigneusement sélectionné pour évoquer des émotions et captiver votre imagination.",

    cover: lana,
    type: 'Site vitrine',
  },

  {
    id: 'anna',
    title: 'Anna Peterson',
    link: 'https://anna-peterson.valdesagbokoni.com/',
    description:
      "Ce projet est un portfolio professionnel complet qui permet aux visiteurs d'explorer le travail et les réalisations d'une personne fictive talentueuse dans le domaine de la photographie. C'est une vitrine attrayante et informative qui met en valeur les compétences et l'expertise d'Anna Peterson pour attirer l'attention des potentiels employeurs, clients ou partenaires de projet.",

    cover: anna,
    type: 'Portfolio',
  },

  {
    id: 'La-Maison-Jungle',
    title: 'La maison jungle',
    link: 'https://lmj.valdesagbokoni.com/',
    description:
      "Ce projet a été réalisé avec les mêmes objectifs que MoonStore, à la différence près qu'il est niché dans la vente de plante.",
    cover: LMJ1,
    type: 'Site e-commerce',
  },

  {
    id: 'trustful',
    title: 'Agence TRUSTFUL',
    link: 'https://trustful.valdesagbokoni.com/',
    description:
      "Découvrez Trustful, le site vitrine captivant d'une agence de rédaction. Plongez dans l'univers de la création de contenu de qualité et explorez leurs services d'écriture professionnels.",
    cover: trustful,
    type: 'Site vitrine',
  },

  {
    id: 'lens',
    title: 'Robbie Lens',
    link: 'https://robbie-lens.valdesagbokoni.com/',
    description:
      "Explorez l'univers captivant de la photographie de Robbie Lens à travers ce portfolio qui met en avant son parcours, ses services, ses tarifs et vous transporte avec ses réalisations époustouflantes, composées d'images d'une qualité exceptionnelle.",
    cover: lens,
    type: 'Portfolio',
  },

  {
    id: 'safZon',
    title: 'safZon',
    link: 'https://safZon.valdesagbokoni.com/',
    description:
      "Découvrez SafZone, le site vitrine captivant d'une agence de protection rapprochée. Plongez dans l'univers de la sécurité de premier ordre et explorez nos services de protection personnalisés.",
    cover: safZone,
    type: 'Site vitrine',
  },

  {
    id: 'e-bookyo',
    title: 'E-bookyo',
    link: 'https://e-bookyo.valdesagbokoni.com/',
    description:
      "Explorez à travers E-bookyo, le livre du moment. De par son design conçu pour cause, E-bookyo, une landing page,  vous présente les différents sommets qu'atteint la littérature de nos jours en vous laissant découvrir par la même occasion les aventures d'Herry Khan, auteur de ce chef-d'oeuvre.",
    cover: ebookyo,
    type: 'Site onepage/Landing page',
  },
]

export const Networks = [
  {
    id: 'comeup',
    name: 'ComeUp',
    link: 'https://comeup.com/profil/valdesagb',
    cover: 'https://comeup.com/favicon.png',
  },

  {
    id: 'github',
    name: 'GitHub',
    link: 'https://github.com/ValdesAGB',
    icone: 'bi bi-github',
  },

  {
    id: 'mail',
    name: 'Gmail',
    link: 'valdesagbokoni01@gmail.com',
    icone: 'bi bi-envelope-at',
  },

  {
    id: 'linkedin',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/valdesagb/',
    icone: 'bi bi-linkedin ',
  },
]

export const formulaireElements = [
  {
    id: 'name',
    title: 'Nom et prénom *',
    inputType: 'text',
    divClass: 'col-md mb-4',
  },

  {
    id: 'mail',
    title: 'Adresse mail *',
    inputType: 'email',
    divClass: 'col-md mb-4 ',
  },
  {
    id: 'subject',
    title: 'Sujet *',
    inputType: 'text',
    divClass: 'col-12 mb-4 ',
  },
  {
    id: 'message',
    title: 'Message *',
    divClass: 'col-12 mb-3',
  },
]
