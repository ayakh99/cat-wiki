import Image from "next/image";
import Link from "next/link";

export default function Header({ children }) {
  return (
    <header className="mx-auto w-full max-w-screen-2xl px-4.5 pt-3.5 lg:px-24 lg:pt-6">
      <Link href="/">
        <Image src="/logo.svg" width="128" height="44" alt="Cat Wiki" />
      </Link>
      {children}
    </header>
  );
}
