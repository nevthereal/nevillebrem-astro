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

export const collections = {
  work,
};
