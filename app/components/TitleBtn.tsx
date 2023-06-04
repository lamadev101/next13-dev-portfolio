"use client"
import {motion} from 'framer-motion'
import { navVariants } from '../utils/motion';

interface TitleBtnProps{
  title:string;
}

const TitleBtn:React.FC<TitleBtnProps> = ({title}) => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="uppercase rounded-3xl border border-gray-500 hover:border-gray-600 w-[max-content] px-4 py-1"
    >
      <span className="text-white text-sm">{title}</span>
    </motion.div>
  )
}

export default TitleBtn