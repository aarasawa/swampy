import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    published: z.coerce.date(),
    slug: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    draft: z.boolean().optional().default(false),
    image: z.string().optional(),
    lang: z.string().optional(),
    prevTitle: z.string().default(''),
    prevSlug: z.string().default(''),
    nextTitle: z.string().default(''),
    nextSlug: z.string().default(''),
  }),
});

const books = defineCollection({
  loader: file("./src/content/books.json"),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    width: z.number(),
    height: z.number(),
    color: z.tuple([z.string(), z.string()]),
    deco: z.string(),
    rating: z.number().min(1).max(5),
    year: z.string(),
    genre: z.string(),
    status: z.string(),
    review: z.string(),
  }),
});

const films = defineCollection({
  loader: file("./src/content/films.json"),
  schema: z.object({
    title: z.string(),
    director: z.string(),
    year: z.number(),
    rating: z.number().min(1).max(5).optional(),
    status: z.enum(["Films", "Shows"]),
    genre: z.string().optional(),
    color: z.string().optional(),
    review: z.string().optional(),
  }),
});

export const collections = { posts, books, films };