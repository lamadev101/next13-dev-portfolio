import Heading from "../components/Heading"
import TitleBtn from "../components/TitleBtn"
import ToolsCard from "../components/ToolsCard"
import { Tools } from "../constant/data"

const Skills = () => {
  return (
    <section className="min-h-[100vh] py-8">
      <TitleBtn title="skills"/>
      <Heading
        ftitle="Tools &"
        stitle="Technology"
      />

      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8">
        {Tools.map(item=>(
          <ToolsCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills