import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const conciertos = defineCollection({
  loader: file("./src/data/conciertos.json"),
  schema: z.object({
    titulo: z.string().optional(),
    titulo_en: z.string().optional(),
    fecha: z.coerce.date(),
    fecha_fin: z.coerce.date().optional(),
    fecha_aproximada: z.boolean().default(false),
    hora: z.string().optional(),
    ciudad: z.string(),
    lugar: z.string(),
    direccion: z.string().optional(),
    pais: z.string(),
    pais_en: z.string().optional(),
    // Cada valor es un id de una entrada de `repertorio`, o texto libre si la obra
    // aún no está en esa colección. Se resuelve a mano en la plantilla con getEntry,
    // porque reference() envuelve cualquier string sin validar que exista.
    programa: z.array(z.string()).default([]),
    estado: z.enum(["confirmado", "por_confirmar"]),
    boleteria_url: z.string().url().optional(),
  }),
});

const repertorio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/repertorio" }),
  schema: z.object({
    titulo: z.string(),
    titulo_en: z.string().optional(),
    compositor: z.string(),
    anio_composicion: z.string(),
    anio_composicion_en: z.string().optional(),
    duracion_aprox: z.string().optional(),
    duracion_aprox_en: z.string().optional(),
    curiosidad: z.string().optional(),
    // Reemplaza la detección por regex sobre el título (frágil y atada al
    // español) para marcar estrenos/encargos aún sin título definitivo.
    estreno: z.boolean().default(false),
  }),
});

const discografia = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/discografia" }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      anio_lanzamiento: z.string(),
      portada: image().optional(),
      // Mismo criterio que `programa` en conciertos: id de `repertorio` o texto libre.
      tracklist: z.array(z.string()).default([]),
      plataformas: z
        .array(z.object({ nombre: z.string(), url: z.string().url() }))
        .default([]),
      estado: z.enum(["lanzado", "proximamente"]),
    }),
});

export const collections = { conciertos, repertorio, discografia };
