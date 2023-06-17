import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "screenshot",
      title: "Screenshot",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "githubUrl",
      title: "Github URL",
      type: "string",
    }),
    defineField({
      name: "webappUrl",
      title: "WebApp URL",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        }
      ]
    }),
  ],
})