"use client"
import { motion } from 'framer-motion'
import { textVariant2 } from '../utils/motion';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  project: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, project }) => {
  return (
    <motion.div
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className="border-[1.5px] border-gray-400 hover:border-green-500 rounded-3xl p-8 group"
    >
      <h1 className="text-3xl text-white">{title}</h1>
      <p className="text-gray-400 mt-2">{subtitle}</p>
      <div className="text-white group-hover:underline mt-4">{project} Project</div>
    </motion.div>
  )
}

export default ServiceCard