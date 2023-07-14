import { createClient, groq } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false
});

export async function getProject() {
  try {
    const projects = await client.fetch(
      groq`*[_type == "project"]`,
    )
    return projects
  } catch (error) {
    return "Network error: Connection lost."
  }

}
