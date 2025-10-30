import {
  faGears,
  faUsersGear,
  faSailboat,
  faStethoscope,
  faFireExtinguisher,
  faBriefcaseMedical,
  faEye,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

export const exps = [
  {
    title: "Web Development",
    content: (
      <ul>
        <li>Framework/libraries : ReactJS, Django</li>
        <li>DBMS : MySQL, SQLite</li>
        <li>Languages : Javascript, Python, PHP</li>
      </ul>
    ),
  },
  {
    title: "Kitchen Staff",
    content: (
      <ul>
        <li>Ingredients preparations</li>
        <li>Implemented FIFO and FEFO procedures</li>
        <li>Collaborated with cross-functional teams</li>
      </ul>
    ),
  },
  {
    title: "Warehouse Staff",
    content: (
      <ul>
        <li>FIFO procedures implementation</li>
        <li>Ensuring the inventory items are in the best condition</li>
        <li>Implemented planned maintenance system</li>
      </ul>
    ),
  },
  {
    title: "Ship Engineering Cadet",
    content: (
      <ul>
        <li>Assisting engineers in various projects onboard</li>
        <li>Adherence to engineering standards and regulations</li>
        <li>Gaining hands-on experience of vessel operations</li>
      </ul>
    ),
  },
];

export const imocerts = [
  { title: "eng-iv", icon: faGears },
  { title: "erm", icon: faUsersGear },
  { title: "scrb", icon: faSailboat },
  { title: "mc", icon: faStethoscope },
  { title: "aff", icon: faFireExtinguisher },
  { title: "mfa", icon: faBriefcaseMedical },
  { title: "sat", icon: faEye },
  { title: "bst", icon: faShieldHalved },
];

export const ibmcerts = [
  {
    img: "data-fundamentals",
    link: "https://www.credly.com/badges/1ceed3d0-49c8-4610-9cc2-1519de8615af/public_url",
    alt: "Data Fundamentals",
    loadImg: "lazy",
  },
  {
    img: "digital-literacy",
    link: "https://www.credly.com/badges/96dec135-d7c6-4c2e-9f7e-c8fda0b039d8/public_url",
    alt: "Digital Literacy",
    loadImg: "lazy",
  },
  {
    img: "digital-mindset",
    link: "https://www.credly.com/badges/919ec838-5054-4778-b048-ee378346eaa8/public_url",
    alt: "Digital Mindset",
    loadImg: "lazy",
  },
  {
    img: "explore-emerging-tech",
    link: "https://www.credly.com/badges/4c335ca0-367e-430f-9ef0-050cba61a29f/public_url",
    alt: "Explore Emerging Tech",
    loadImg: "lazy",
  },
  {
    img: "ai-literacy",
    link: "https://www.credly.com/badges/c40b096a-e706-481a-be71-f1c107f15340/public_url",
    alt: "AI Literacy",
    loadImg: "lazy",
  },
  {
    img: "artificial-intelligence-fundamentals",
    link: "https://www.credly.com/badges/b9b4e2b4-6091-4cd1-991c-025ed48bbe0e/public_url",
    alt: "AI Fundamentals",
    loadImg: "lazy",
  },
  {
    img: "lifelong-professional-skills",
    link: "https://www.credly.com/badges/64267e32-37c8-4d81-bcf9-e8b4dc428417/public_url",
    alt: "Lifelong Professional Skills",
    loadImg: "lazy",
  },
];
