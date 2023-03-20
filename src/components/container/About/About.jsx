import React from 'react'
import "./About.scss";
import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from "../../../assets/7.jpg"

const About = () => {

  return (
    <div className="container " id='about'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <p>Self motivated and skilled Full Stack Developer with expertise in the MERN Stack. Proficient in front-end development, including React and its libraries, as well as back-end development using Node.js, Express, and MongoDB.</p>
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            )
          })}
          <motion.a href='https://res.cloudinary.com/dcu1hocim/image/upload/v1679290134/Resume/Dilip_D_CV_ct87sg.pdf' download="https://res.cloudinary.com/dcu1hocim/image/upload/v1679290134/Resume/Dilip_D_CV_ct87sg.pdf"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default About