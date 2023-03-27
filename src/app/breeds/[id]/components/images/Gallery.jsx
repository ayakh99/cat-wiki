"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ContentLoader from "react-content-loader";
import NextJsImage from "./NextJsImage";

export default function Gallery({ images, cat, loading }) {
  if (loading) return <LoadingSkeleton />;

  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState(0);

  const displayed = images.slice(1, 9);
  const slides = displayed.map((i) => ({
    src: i.url,
    width: i.width,
    height: i.height,
  }));

  return (
    <div className="grid w-full grid-cols-2 grid-rows-4 justify-between justify-items-center gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-8">
      {displayed.map((res, i) => (
        <div
          key={res.id}
          className="cursor-pointer overflow-hidden rounded-xl transition-shadow hover:shadow-lg"
          onClick={() => {
            setOpen(true);
            setOffset(i);
          }}
        >
          <Image
            className="aspect-square object-cover"
            src={res.url}
            width="278"
            height="278"
            alt={`${cat} cat`}
          />
        </div>
      ))}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides.slice(offset).concat(slides.slice(0, offset))}
        render={{
          slide: NextJsImage,
        }}
      />
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid w-full grid-cols-2 grid-rows-4 justify-between justify-items-center gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-8">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        return (
          <div key={i}>
            <ContentLoader height="100%" width="100%" viewBox="0 0 280 280">
              <rect x="0" y="0" rx="12" ry="12" height="278" width="278" />
            </ContentLoader>
          </div>
        );
      })}
    </div>
  );
}
