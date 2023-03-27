import { Suspense } from "react";
import Image from "next/image";
import { getAllCats } from "@/lib/cats";
import SearchForm from "./search/SearchForm";

export default async function Hero() {
  const catsData = getAllCats();
  const cats = await catsData;

  return (
    <div className="relative mt-6 h-48 p-7 pt-4 md:h-80 md:pt-7 lg:h-[33.75rem] lg:p-28">
      <Image
        src="/img/hero.png"
        fill
        className="w-full rounded-tr-6xl rounded-tl-6xl object-cover"
        alt="Cat Wiki"
      />
      <div className="mx-auto w-full max-w-4xl lg:max-w-5xl">
        <div className="relative z-10 w-1/2 max-w-[10rem] md:max-w-xs lg:max-w-sm">
          <div className="relative h-8 w-20 md:h-16 md:w-40 lg:h-20 lg:w-60">
            <Image
              src="/logo.svg"
              fill
              className="object-contain contrast-150 invert"
              alt="Hero"
            />
          </div>
          <p className="mt-2 mb-5 text-xs font-medium leading-tight text-white md:mt-3 md:mb-7 md:text-lg lg:mb-14 lg:text-2xl">
            Get to know more about your cat breed
          </p>

          <Suspense fallback={<SearchForm loading={true} />}>
            <SearchForm data={cats} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
