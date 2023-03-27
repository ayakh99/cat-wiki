import { getAllCats, getImages } from "@/lib/cats";
import getTopSearches from "@/lib/views";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import ContentLoader from "react-content-loader";

export default async function TopCats() {
  const searchData = getTopSearches();
  const catsData = getAllCats();
  const [cats, topResults] = await Promise.all([catsData, searchData]);

  const topDetails = topResults
    .slice(0, 10)
    .map((t) => cats.filter((b) => b.id === t))
    .flat();

  const images = topDetails.map((c) => getImages(c.id));
  const topImages = (await Promise.all(images))
    .map((i) => i.slice(0, 1))
    .flat();

  return (
    <div className="mx-auto flex flex-col items-start gap-8 lg:gap-20">
      <h1 className="text-xl font-bold md:text-2xl lg:text-4xl">
        Top 10 searched breeds
      </h1>
      <ul className="flex flex-col gap-14">
        {topDetails.map((cat, i) => (
          <li
            key={i}
            className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-12"
          >
            <Suspense
              fallback={
                <ContentLoader
                  height="170"
                  width="170"
                  style={{ minWidth: 170 }}
                  viewBox="0 0 180 180"
                >
                  <rect x="0" y="0" rx="12" ry="12" width="170" height="170" />
                </ContentLoader>
              }
            >
              <Image
                src={topImages[i].url}
                width="170"
                height="170"
                className="aspect-square rounded-3xl object-cover"
                alt={`${cat.name} cat`}
              />
            </Suspense>
            <div className="flex flex-col items-start">
              <h2 className="relative mb-2 text-center text-lg font-semibold before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary-600 before:transition-transform before:duration-500 hover:before:scale-x-100 md:mb-6 md:text-left md:text-xl lg:text-3xl">
                <Link href={`/breeds/${cat.id}`}>
                  {i + 1}. {cat.name}
                </Link>
              </h2>
              <p className="text-base font-medium lg:text-lg">
                {cat.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
