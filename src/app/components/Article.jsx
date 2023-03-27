import Image from "next/image";
import Divider from "@/layout/Divider";
import Button from "./Button";

export default function Article() {
  return (
    <article className="relative flex max-w-5xl flex-col items-center justify-between gap-16 md:flex-row">
      <div className="max-w-md flex-1">
        <Divider />
        <h2 className="mt-4 text-4xl font-bold leading-tight lg:mt-6 lg:text-5xl">
          Why should you have a cat?
        </h2>
        <p className="mt-9 mb-6 text-base leading-tight lg:mt-11 lg:mb-16 lg:text-lg">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety levels
        </p>
        <Button content="Read more" />
      </div>
      <div className="grid w-full flex-1 grid-cols-2 grid-rows-3 content-start justify-items-end gap-4 lg:gap-7">
        <div className="lg:self-end">
          <Image
            src="/img/image-1.png"
            width="274"
            height="168"
            alt="sleeping cat"
          />
        </div>
        <div className="jutify-self-end row-span-3 md:justify-self-start">
          <Image
            src="/img/image-2.png"
            width="238"
            height="386"
            alt="cat in a carrier"
          />
        </div>
        <div className="row-span-2 row-start-2">
          <Image
            src="/img/image-3.png"
            width="196"
            height="294"
            style={{ width: "auto" }}
            alt="a cat and her human"
          />
        </div>
      </div>
    </article>
  );
}
