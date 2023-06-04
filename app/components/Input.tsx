'use client'

import {motion} from 'framer-motion'
import { textVariant2 } from '../utils/motion';

interface InputProps {
  id: string;
  placeholder: string;
  type?: string;
  label: string;
}
const Input:React.FC<InputProps> = ({id, placeholder, type="text", label}) => {
  return (
    <motion.div
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className="flex flex-col gap-3 w-full"
    >
      <label
       htmlFor={id}
       className="text-white text-lg"
      >
        {label} <span className="text-red-700">*</span>
      </label>
      <input
       type={type}
       placeholder={placeholder}
       id={id}
       required
       className="border-[1.5px] border-green-500 rounded-3xl h-12 pl-4 text-white outline-none bg-[#212428] focus:shadow-3xl shadow-green-500"
      />
    </motion.div>
  )
}

export default Input