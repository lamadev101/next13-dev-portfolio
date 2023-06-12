"use client"

import {motion} from 'framer-motion'
import { textVariant2 } from "../utils/motion";
import Image from 'next/image';

interface ToolsCardProps {
  icon: string;
  title: string;
}

const ToolsCard:React.FC<ToolsCardProps> = ({icon, title}) => {
  return (
    <motion.div variants={textVariant2} initial="hidden" whileInView="show" className="group">
      <div className="border-[1.5px] border-gray-400 hover:border-green-500 rounded-full p-4 overflow-hidden w-full">
        <Image
         src={icon} 
         alt={title}
         width={50}
         height={50}
         style={{width: "100%", height: "100%", objectFit: "cover"}}
         className="object-cover " 
        />
      </div>
      <h2 className="text-center group-hover:text-green-500 text-white mt-2">{title}</h2>
    </motion.div>
  )
}

export default ToolsCard