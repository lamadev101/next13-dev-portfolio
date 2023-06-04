"use client"

import {motion} from 'framer-motion'

import Heading from "../components/Heading"
import ServiceCard from "../components/ServiceCard"
import TitleBtn from "../components/TitleBtn"
import { Skills } from "../constant/data"
import { fadeIn } from '../utils/motion'

const Services = () => {
  return (
    <motion.section variants={fadeIn('left', 'tween', 0.2, 1)} className="min-h-[100vh] py-8 pr-8">
      <TitleBtn title="services"/>
      <Heading
        ftitle="My"
        stitle="Specializations"
      />

      <div className="space-y-6">
        {Skills.map(item=>(
          <ServiceCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </motion.section>
  )
}

export default Services