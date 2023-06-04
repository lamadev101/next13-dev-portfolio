'use client'

import { motion } from 'framer-motion'
import { textContainer, textVariant, textVariant2 } from '../utils/motion';

interface HeadingProps {
  ftitle: string;
  stitle: string;
}

const Heading: React.FC<HeadingProps> = ({ ftitle, stitle }) => {
  return (
    <motion.p
      variants={textContainer}
      className="text-[2rem] md:text-[4rem] flex items-center gap-2 my-4"
    >
      {/* {Array.from(ftitle).map((letter, index) => (
        <motion.span
          variants={textVariant(2)}
          key={index}
          className="text-white"
        >
          {letter === '' ? '\u00A0' : letter}
        </motion.span>
      ))} */}
      <span className="text-white">{ftitle}</span>
      <span className="text-green-500">{stitle}</span>
    </motion.p>
  )
}

export default Heading