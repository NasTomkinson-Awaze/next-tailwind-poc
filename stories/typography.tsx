import React from "react";
import { Explainer } from "./explainer";

const typeSizes: string[] = [
  "text-xs",
  "text-sm",
  "text-base",
  "text-lg",
  "text-xl",
  "text-2xl",
  "text-3xl",
  "text-4xl",
];

export const Typography = () => {
  return (
    <>
      <Explainer
        title="Typography"
        description="Typography is assigned via classes."
        usage="text-{ xs | sm | base | lg | xl | 2xl | 3xl | 4xl }"
      ></Explainer>
      <div className="flex flex-col justify-start items-start gap-5">
        {typeSizes.map((size) => {
          // const sizeClass = `text-${size}`;
          return (
            <div key={size} className="flex flex-col gap-2">
              <div className="border-b border-current mb-1 mt-2 text-sm text-neutral-400">
                Size: {size}
              </div>
              <span className={size}>
                The quick brown fox jumps over the lazy dog.
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};
