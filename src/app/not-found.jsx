import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center gap-10">
      <h1 className="text-4xl font-bold">404!</h1>
      <div className="relative">
        <Image src="/img/not-found.svg" width="150" height="300" alt="cat" />
        <div className="absolute left-full bottom-0 flex items-center gap-0.5">
          <QuestionMarkCircleIcon
            title="Image credit"
            className="h-3 w-3 text-secondary-300"
          />
          <span className="mt-1 block w-max text-[10px]">
            Image by{" "}
            <Link
              href="https://www.freepik.com/free-vector/flat-design-animals-silhouette-set_29331666.htm#page=2&query=cat&position=16&from_view=search&track=sph"
              className="text-primary-400"
            >
              Freepik
            </Link>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h2>The resource you requested was not found</h2>
        <Button href="/" content="Go back home" color="text-primary-600" />
      </div>
    </div>
  );
}
