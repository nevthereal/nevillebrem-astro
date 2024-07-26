import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    desc: z.string(),
    tech: z.array(z.string()),
    link: z.string().url(),
    ghLink: z.string().url().nullable(),
  }),
});

const socials = defineCollection({
  type: "data",
  schema: z.object({
    link: z.string().url(),
    title: z.string(),
    body: z.string(),
    icon: z.string(),
  }),
});

export const collections = {
  work,
  socials,
};
