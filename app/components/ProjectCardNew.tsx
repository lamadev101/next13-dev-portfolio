"use client"
import Link from "next/link"
import { BsGithub } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { textVariant2 } from "../utils/motion"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

interface ProjectCardProps {
  _id: string;
  title: string;
  githubUrl: string;
  webappUrl: string;
  screenshot: {
    _type: string;
    asset: any;
  };
  body: any;
  _createdAt: string;
  _updatedAt: string;
  type: string;
}

const ProjectCardNew: React.FC<ProjectCardProps> = ({ body, title, githubUrl, webappUrl, screenshot, type }) => {
  console.log(body)

  return (
    <motion.div
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className="rounded-md shadow-2xl drop-shadow-md backdrop-blur shadow-black overflow-hidden hover:shadow-gray-800 hover:bg-black flex flex-col md:flex-row items-center col-span-12 border-[0.5px] border-gray-500 group"
    >
      <div className=" w-full p-4 bg-white md:m-4 col-span-4 relative">
        <Image
          src={urlForImage(screenshot).url()}
          alt={title}
          width={100}
          height={100}
          className="h-40 w-full overflow-hidden rounded-md opacity-80 object-cover"
        />
        {/* Navigation button */}
        <div className="hidden group-hover:flex items-center justify-center w-full h-full absolute left-0 right-0 top-0 mx-auto bg-gray-200 bg-opacity-50  backdrop-blur">
          <div className="flex items-center gap-5">
            <Link href={githubUrl} target="_blank">
              <div className="text-sm flex items-center gap-2 text-gray-700 hover:text-white hover:underline border-[1.5px] border-gray-700 hover:bg-gray-700 rounded-md px-3 py-2">
                <BsGithub />
                <span>Source Code</span>
              </div>
            </Link>
            <Link href={webappUrl} target="_blank">
              <div className="text-sm flex items-center gap-2 text-blue-500 hover:text-white hover:underline border-[1.5px] border-blue-500 hover:bg-blue-500 rounded-md px-3 py-2">
                <span>Live Demo</span>
                <FiExternalLink />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-4 pb-2 col-span-8">
        <h1 className="text-[#f1f5f8] text-2xl mb-4">{title}</h1>

        {/* Body content */}
        {body.map((item: any, index: string) => (
          <div key={index}>
            <p className="text-gray-400 text-sm">{item.children[0].text}</p>
          </div>
        ))}
        <p className="text-gray-300 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur necessitatibus voluptate incidunt, ex dolorum nostrum totam perferendis nihil mollitia inventore?</p>
      </div>
    </motion.div>
  )
}

export default ProjectCardNew