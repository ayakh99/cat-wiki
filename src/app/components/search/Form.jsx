"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Form({
  term,
  setTerm,
  openModal,
  disabled,
  mobile,
  inputRef,
}) {
  return (
    <form
      className={`${inputRef && "border border-black md:hidden md:border-0"} 
      relative flex items-center justify-between rounded-full bg-white py-1.5 px-3 md:py-3 md:px-5 lg:py-5 lg:px-7`}
      onClick={() => (mobile ? openModal() : null)}
    >
      <input
        type="text"
        value={disabled || mobile ? "" : term}
        disabled={(disabled || mobile) ?? false}
        onChange={(e) => setTerm(e.target.value)}
        className="w-11/12 border-0 p-0 text-xs placeholder-primary-600 focus:ring-0 md:text-lg"
        placeholder="Search"
        ref={inputRef}
      />

      <MagnifyingGlassIcon className="h-4 w-4 text-primary-600 md:h-5 md:w-5 md:cursor-pointer lg:h-6 lg:w-6" />
    </form>
  );
}
