"use client"

import {motion} from 'framer-motion'
import { textVariant2 } from "../utils/motion";

interface ToolsCardProps {
  icon: string;
  title: string;
}

const ToolsCard:React.FC<ToolsCardProps> = ({icon, title}) => {
  return (
    <motion.div variants={textVariant2} initial="hidden" whileInView="show" className="group">
      <div className="border-[1.5px] border-gray-400 hover:border-green-500 rounded-full p-4 overflow-hidden w-full">
        <img
         src={icon} 
         alt={title}
         className="object-cover overflow-hidden" 
        />
      </div>
      <h2 className="text-center group-hover:text-green-500 text-white mt-2">{title}</h2>
    </motion.div>
  )
}

export default ToolsCard