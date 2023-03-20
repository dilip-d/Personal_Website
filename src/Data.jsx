import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin, FaAws } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiMongodb, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BsGit, BsGithub, BsMedium } from "react-icons/bs";
import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/work7.jpg";
import work2 from "./assets/work8.jpg";
import work7 from "./assets/work9.jpg";
import work8 from "./assets/work11.jpg";
import work9 from "./assets/work12.jpg";
import work3 from "./assets/wb4.jpg";
import work4 from "./assets/wb1.jpg";
import work5 from "./assets/wb2.jpg";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <a href="https://github.com/dilip-d" target='_blank' style={{color:'white'}}><BsGithub /></a>,
  <a href="https://www.instagram.com/dilip_damodharan/" target='_blank' style={{color:'white'}}><FaInstagram /></a>,
  <a href="https://www.linkedin.com/in/dilip-dhamodharan-8b9245188/" target='_blank' style={{color:'white'}}><FaLinkedin /></a>,
  // <a href="https://medium.com"><BsMedium /></a>

]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Dilip D"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+919311591685"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "dilipdofficial@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <FaReact />, <SiTailwindcss />, <SiRedux />, <BsGit />, <FaNodeJs />, <SiMongodb />, <FaAws />, <FaSass />, <FaFigma />,]

export const experiences = [
  {
    id: 1,
    year: "2023",
    position: "Intern Web Developer",
    company: "Service Oriented Application"
  },
  // {
  //   di: 2,
  //   year: "2021",
  //   position: "Junior Web Developer",
  //   company: "shop.com.mm"
  // },
  {
    id: 3,
    year: "2022",
    position: "Intern Web Developer",
    company: "Ecommerce Application"
  }
]
export const finishes = [
  {
    id: 1,
    number: '1+',
    itemName: "Years Of Experience"
  },
  // {
  //   id: 2,
  //   number: "150+",
  //   itemName: "Satisfied Customers"
  // },
  {
    id: 3,
    number: "10+",
    itemName: "Designed Items"
  },
  // {
  //   id: 4,
  //   number: "117+",
  //   itemName: "Clients Served"
  // }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
    url: "https://github.com/dilip-d/B-Fit-Pro"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
    url: "https://github.com/dilip-d/Mini_Project"
  },
  {
    id: 3,
    img: work7,
    name: "project 3",
    category: "web",
    url: "https://github.com/dilip-d/ToDo-App"
  },
  {
    id: 4,
    img: work8,
    name: "project 4",
    category: "web",
    url: "https://github.com/dilip-d/Netflix_React_Clone"
  },
  {
    id: 5,
    img: work9,
    name: "project 5",
    category: "web",
    url: "https://github.com/dilip-d/Olx_Clone"
  },
  {
    id: 6,
    img: work3,
    name: "project 6",
    category: "design"
  },
  {
    id: 7,
    img: work4,
    name: "project 7",
    category: "design"
  },
  {
    id: 8,
    img: work5,
    name: "project 8",
    category: 'design'
  }
]


export const workNavs = [
  "All", "Web", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Dotspace Business Park Laham Commercial Complex, Kazhakkoottam, Kerala 695585"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "dilipdofficial@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+919311591685"
  }
]
