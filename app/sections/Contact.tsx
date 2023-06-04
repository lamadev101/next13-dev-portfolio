"use client"

import {motion} from 'framer-motion'

import Button from "../components/Button"
import Heading from "../components/Heading"
import Input from "../components/Input"
import TitleBtn from "../components/TitleBtn"
import { fadeIn, staggerContainer } from "../utils/motion"

const Contact = () => {
  return (
   <motion.section variants={fadeIn('right', 'tween', 0.2, 1)} className="max-h-[100vh] py-8">
      <TitleBtn title="contact me" />
      <Heading
        ftitle="Let's Work"
        stitle="Together!"
      />

      <form action="" className="mr-20 md:w-3/4 space-y-4 md:space-y-8">
        <div className="flex items-center flex-col md:flex-row gap-8 w-full">
          <Input
            id="fullname"
            placeholder="John Doe"
            label="Full Name"
          />
          <Input
            id="companyname"
            placeholder="xyz tech solution"
            label="Company Name"
          />
        </div>
        <div className="flex items-center flex-col md:flex-row gap-8 w-full">
          <Input
            id="email"
            placeholder="doejohn@gmail.com"
            label="Email"
            type="email"
          />
          <Input
            id="phone"
            placeholder="+977 970000000"
            label="Phone Number"
            type="number"
          />
        </div>
        <div className="space-y-4">
          <label htmlFor="message" className="text-white text-lg">Message </label>
          <textarea
            id="message"
            className="w-full h-40 rounded-3xl outline-none pl-6 pt-4 border-[1.5px] border-green-500 bg-[#212428] text-white"
            placeholder="Write your message..."
          />
        </div>
        <div className="w-[max-content]">
          <Button title="Send Message" />
        </div>
      </form>
    </motion.section>
  )
}

export default Contact