"use client"
import { motion} from 'framer-motion'
import { textVariant2 } from '../utils/motion';

interface EduExpCardProps {
  date: string;
  company: string;
  job: string;
}

const EduExpCard:React.FC<EduExpCardProps> = ({date, company, job}) => {
  return (
    <motion.div
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className="group relative border-l-[0.5px] border-gray-500 hover:border-green-500 ml-4"
    >
      <div className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-gray-400 group-hover:bg-green-500"/>
      <div className="ml-6 md:ml-12 space-y-6">
        <div className="text-gray-400 group-hover:text-gray-300">{date}</div>
        <h1 className="text-white text-2xl">{company}</h1>
        <h2 className="text-gray-200">{job}</h2>
      </div>
    </motion.div>
  )
}

export default EduExpCard