import { getCat, getImages } from "@/lib/cats";
import { Suspense } from "react";
import ContentLoader from "react-content-loader";
import CatImage from "./components/images/CatImage";
import Characteristics from "./components/Characteristics";
import Gallery from "./components/images/Gallery";
import NotFound from "@/app/not-found";

export default async function Cat({ params: { id } }) {
  const catData = getCat(id);
  const cat = await catData;

  if (Object.keys(cat).length === 0) return <NotFound />;

  const images = getImages(id);
  const catImages = await images;

  const decoStyle =
    "relative z-0 before:absolute before:left-0 before:bottom-0 before:-z-[1] before:h-4/5 before:w-16 before:-translate-x-1/4 before:-translate-y-[15%] before:rounded-xl before:bg-secondary-300";

  return (
    <>
      <div className="mx-auto flex max-w-4xl flex-col justify-between gap-8 md:flex-row lg:max-w-5xl lg:gap-20">
        <div className="flex-1 self-center md:self-auto">
          <div className={decoStyle}>
            <Suspense
              fallback={
                <ContentLoader height="100%" width="100%" viewBox="0 0 380 380">
                  <rect x="0" y="0" rx="12" ry="12" height="372" width="372" />
                </ContentLoader>
              }
            >
              <CatImage src={catImages[0]} alt={`${cat.name} cat`} />
            </Suspense>
          </div>
        </div>
        <Characteristics cat={cat} />
      </div>
      <div className="mt-20 mb-13">
        <h2 className="mb-10 text-2xl font-semibold">Other photos</h2>
        <Suspense fallback={<Gallery loading={true} />}>
          <Gallery images={catImages} cat={cat.name} />
        </Suspense>
      </div>
    </>
  );
}
