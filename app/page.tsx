import { FiDownloadCloud } from "react-icons/fi";
import { Contact, Experience, Intro, Portfolio, Profile, Services, Skills } from "./sections";
import { getProject } from "@/lib/sanity.client";

export default async function Home() {

  const projects = await getProject()

  return (
    <main className="grid grid-cols-1 md:grid-cols-10 relative">
      <div className="h-[100vh] md:col-span-3 md:sticky top-0 bg-[#1F2125] px-4">
        <Profile/>
      </div>
      <div className="col-span-7 space-y-12 pb-40 px-4 md:px-8">
        <Intro/>
        <Experience/>
        <Skills/>
        <Services/>
        <Portfolio projects={projects} />
        <Contact/>
      </div>

      <div className="fixed top-4 right-4 hidden md:block animate-bounce">
        <a 
          href="assets/Resume.pdf" 
          download
          className="flex items-center gap-2 rounded-xl border-[1.5px] border-green-500 hover:bg-green-500 text-green-500 px-3 py-2 hover:text-white"
        >
          <FiDownloadCloud/>
          <span>Resume</span>
        </a>
      </div>
    </main>
  )
}

