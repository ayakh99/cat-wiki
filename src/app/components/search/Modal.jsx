"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Form from "./Form";

export default function Modal({ term, setTerm, results, closeModal }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (results.open) inputRef.current?.focus();
  }, [results.open]);

  return (
    <div
      className={`${
        results.open ? "flex" : "hidden"
      } fixed left-0 top-0 z-10 max-h-96 w-full flex-col rounded-3xl bg-white px-5 pt-2 text-primary-600 shadow-lg md:absolute md:top-16 md:max-h-56 md:px-3 md:pt-0 lg:top-20`}
    >
      <button
        className="mb-5 grid h-10 w-10 shrink-0 place-content-center self-end rounded-lg bg-primary-200/10 md:hidden"
        onClick={() => closeModal()}
      >
        <XMarkIcon className="h-5 w-5 text-primary-600" />
      </button>

      <Form term={term} setTerm={setTerm} inputRef={inputRef} />
      <ul className="scroll-area max-h-80 overflow-auto py-3 pr-3 md:max-h-56">
        {results.content.map((b) => (
          <li key={b.id}>
            <Link
              href={`/breeds/${b.id}`}
              className="block rounded-xl px-3 py-4 transition-colors hover:bg-primary-200/10"
            >
              {b.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
