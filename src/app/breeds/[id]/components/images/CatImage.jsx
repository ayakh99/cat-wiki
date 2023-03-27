"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "./NextJsImage";

export default function CatImage({ src, alt }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="cursor-pointer overflow-hidden rounded-3xl transition-shadow hover:shadow-lg"
      onClick={() => setOpen(true)}
    >
      <Image
        src={src.url}
        width="372"
        height="372"
        className="aspect-square rounded-3xl object-cover"
        alt={alt}
      />

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: src.url, width: src.width, height: src.height }]}
        render={{ slide: NextJsImage }}
        carousel={{
          finite: true,
        }}
      />
    </div>
  );
}
