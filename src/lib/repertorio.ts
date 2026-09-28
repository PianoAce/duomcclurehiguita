import { getEntry } from "astro:content";

export async function resolveProgramaItem(id: string): Promise<{ label: string; estreno: boolean }> {
  const entry = await getEntry("repertorio", id);
  if (!entry) return { label: id, estreno: false };
  return {
    label: entry.data.compositor,
    estreno: entry.data.estreno,
  };
}
