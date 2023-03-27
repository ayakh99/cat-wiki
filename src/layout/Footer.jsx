import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto grid w-full max-w-screen-2xl px-4.5 md:px-12 lg:px-24">
      <div className="rounded-tr-6xl rounded-tl-6xl bg-black py-9 px-6 text-white">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-y-4 md:flex-row md:items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              width="128"
              height="44"
              alt="Cat Wiki"
              className="contrast-150 invert"
            />
          </Link>

          <span className="flex items-center text-xs font-normal md:text-sm">
            <span className="text-xl">&copy;&nbsp;</span>
            created by&nbsp;
            <Link
              href="https://github.com/ayakh99"
              className="font-bold underline"
            >
              ayakh99
            </Link>
            &nbsp;- devChallenges.io 2023
          </span>
        </div>
      </div>
    </footer>
  );
}
