import Heading from "../components/Heading"
import ProjectCard from "../components/ProjectCard"
import TitleBtn from "../components/TitleBtn"

const Portfolio = () => {
  return (
    <section className="min-h-[100vh] py-8">
      <TitleBtn title="portfolio"/>
      <Heading
        ftitle="Featured"
        stitle="Projects"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1,2,3,4,5].map(item=>(
          <ProjectCard
            key={item} id={item} title={""} snap={undefined}          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio