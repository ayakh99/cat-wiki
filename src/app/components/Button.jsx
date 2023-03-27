import Link from "next/link";

export default function Button({ content, href, color }) {
  return (
    <button
      className={`relative flex items-center gap-2 text-xs font-bold uppercase ${
        color ?? "text-primary-600 opacity-60"
      }  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary-600 before:transition-transform before:duration-500 hover:before:scale-x-100 md:text-sm lg:text-base`}
    >
      <Link href={href ?? "#"}>
        {content}
        <span aria-hidden className="translate-y-px">
          &rarr;
        </span>
      </Link>
    </button>
  );
}
