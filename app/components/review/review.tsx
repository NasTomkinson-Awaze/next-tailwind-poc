import { StarIcon } from "@heroicons/react/24/solid";

interface ReviewProps {
  rating: number;
  className?: string;
}

export const Review = ({ rating, className }: ReviewProps) => {
  const ratingArray = new Array(Math.round(rating)).fill("");

  console.log(ratingArray);
  return (
    <div
      className={`relative flex flex-row flex-shrink flex-grow-0 justify-start gap-0.5 w-auto *:w-4 ${className}`}
    >
      {ratingArray.map(() => {
        return <StarIcon className="fill-primary" />;
      })}
    </div>
  );
};
