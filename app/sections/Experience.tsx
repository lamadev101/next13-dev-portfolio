import EduExpCard from "../components/EduExpCard"
import Heading from "../components/Heading"
import TitleBtn from "../components/TitleBtn"
import { EducationExperiences } from "../constant/data"

const Experience = () => {
  return (
    <section className="md:h-[100vh] py-8">
      <TitleBtn title="experiences"/>
      <Heading
        ftitle="Education &"
        stitle="Experience"
      />

      <div className="space-y-12 md:space-y-14 md:mt-12">
        {EducationExperiences.map(item=>(
          <EduExpCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience