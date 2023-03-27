import { getImages } from "@/lib/cats";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import ContentLoader from "react-content-loader";

export default async function TopSearches({ data, topResults, loading }) {
  if (loading) return <LoadingSkeleton />;

  const topDetails = topResults
    .slice(0, 10)
    .map((t) => data.filter((b) => b.id === t))
    .flat();

  const images = topDetails.map((c) => getImages(c.id));
  const topImages = (await Promise.all(images))
    .map((i) => i.slice(0, 1))
    .flat();

  const displayedResults = topResults && topImages ? topDetails : CONTENT;

  const decoStyle =
    "relative z-0 before:absolute before:left-0 before:bottom-0 before:-z-[1] before:h-4/5 before:w-16 before:-translate-x-2 before:-translate-y-[10%] before:rounded-xl before:bg-secondary-300 md:before:-translate-x-1/4";

  return (
    <div className="grid w-full grid-cols-2 grid-rows-2 justify-between justify-items-center gap-4 md:grid-cols-4 md:grid-rows-1">
      {displayedResults.slice(0, 4).map((res, i) => (
        <div
          className="group flex cursor-pointer flex-col gap-3 lg:gap-5"
          key={res.id}
        >
          <Link
            href={`/breeds/${res.id}`}
            className={i === 0 ? decoStyle : undefined}
          >
            <Suspense
              fallback={
                <ContentLoader
                  key={i}
                  height="260"
                  width="100%"
                  viewBox="0 0 240 280"
                >
                  <rect x="0" y="234" rx="3" ry="3" width="100" height="12" />{" "}
                </ContentLoader>
              }
            >
              <Image
                className="aspect-square rounded-xl object-cover transition-transform duration-1000 group-hover:scale-110"
                src={topImages[i].url}
                width="220"
                height="220"
                alt={`${res.name} cat`}
              />
            </Suspense>
          </Link>
          <span className="text-xs md:text-sm lg:text-lg">{res.name}</span>
        </div>
      ))}
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid w-full grid-cols-2 grid-rows-2 justify-between justify-items-center gap-4 md:grid-cols-4 md:grid-rows-1">
      {[1, 2, 3, 4].map((i) => (
        <ContentLoader key={i} height="260" width="100%" viewBox="0 0 240 280">
          <rect x="0" y="234" rx="3" ry="3" width="100" height="12" />
          <rect x="0" y="0" rx="12" ry="12" width="220" height="220" />
        </ContentLoader>
      ))}
    </div>
  );
}

const CONTENT = {
  topDetails: [
    {
      name: "Bengal",
      id: "beng",
    },
    {
      name: "Savannah",
      id: "sava",
    },
    {
      name: "Norwegian Forest Cat",
      id: "norw",
    },
    {
      name: "Selkirk Rex",
      id: "srex",
    },
  ],
  topImages: [
    "https://cdn2.thecatapi.com/images/Rl39SPjDO.png",
    "https://cdn2.thecatapi.com/images/G_2zGI5Wu.jpg",
    "https://cdn2.thecatapi.com/images/-ZBBqoWNQ.jpg",
    "https://cdn2.thecatapi.com/images/B2YB13Ydq.jpg",
  ],
};
