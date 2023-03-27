import { Suspense } from "react";
import { getAllCats } from "@/lib/cats";
import getTopSearches from "@/lib/views";
import Divider from "@/layout/Divider";
import Button from "./Button";
import TopSearches from "./TopSearches";

export default async function Featured() {
  const searchData = getTopSearches();
  const catsData = getAllCats();
  const [cats, topResults] = await Promise.all([catsData, searchData]);

  return (
    <div className="rounded-br-6xl rounded-bl-6xl bg-primary-100 p-7 pb-10 text-primary-600 lg:p-28 lg:pt-14">
      <div className="mx-auto max-w-4xl lg:max-w-5xl">
        <h2 className="mb-2 text-xs md:text-xl">Most Searched Breeds</h2>
        <Divider />
        <div className="mb-7 flex items-end justify-between lg:mb-12">
          <h2 className="mt-4 max-w-[11.5rem] self-start text-lg font-bold leading-tight md:mt-9 md:max-w-lg md:self-auto md:text-3xl lg:text-5xl">
            66+ breeds for you to discover
          </h2>
          <Button content="See more" href="/breeds" />
        </div>

        <Suspense fallback={<TopSearches loading={true} />}>
          <TopSearches data={cats} topResults={topResults} />
        </Suspense>
      </div>
    </div>
  );
}
