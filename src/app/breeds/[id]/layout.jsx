import { getCat } from "@/lib/cats";

export async function generateMetadata({ params: { id } }) {
  const cat = await getCat(id);

  return { title: `Cat Wiki | ${cat.name ?? "Not found"}` };
}

export default function CatLayout({ children }) {
  return <>{children}</>;
}
