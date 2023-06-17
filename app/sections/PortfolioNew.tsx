'use client'

import { useEffect, useState } from 'react';
import Heading from "../components/Heading";
import TitleBtn from "../components/TitleBtn";
import ProjectCardNew from "../components/ProjectCardNew";
import { projectCategory } from "../constant/data";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default function PortfolioNew({ projects }:any) {
  console.log("Projects", projects);

  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (projects === []) {
  //     setIsLoading(true);
  //   }
  // }, [projects]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <section className="h-auto md:min-h-[100vh] py-8">
      <TitleBtn title="portfolio" />
      <Heading
        ftitle="Featured"
        stitle="Projects"
      />

      {/* Tabbar */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {projectCategory.map(item => (
          <div
            key={item.id}
            className="cursor-pointer flex items-center justify-center text-white gap-2 border border-green-600 hover:bg-green-600 w-12 h-12 md:h-auto md:w-auto rounded-full md:rounded-md md:px-4 md:py-2"
          >
            <span className="text-3xl p-2 md:text-xl md:p-0">{item.icon}</span>
            <span className="hidden md:inline">{item.title}</span>
          </div>

        ))}
      </div>

      {/* Project list */}
      <div className="grid grid-cols-1 gap-8">
        {!projects ? <div>Comming Soon...</div> :projects.map((item: any) => (
          <ProjectCardNew
            key={item._id} {...item} />
        ))}
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const projects = await client.fetch(groq `*[_type == "project"]`);
  return {
    props: {
      projects,
    },
  };
}
