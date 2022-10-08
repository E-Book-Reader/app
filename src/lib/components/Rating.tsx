import React from "react";

import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";

interface RatingProps {
  size?: "5" | "8";
  rating: number;
}

//5:20 8:32

const Rating = ({ size = "5", rating }: RatingProps) => {
  React.useEffect(() => {
    if (rating > 5 || rating < 0)
      throw new Error("[Rating-Component] invalid rating provided");
  }, [rating]);

  return (
    <div className="flex gap-2">
      {new Array(rating).fill(0).map((_, i) => (
        <SolidStarIcon
          key={i}
          className={`"w-${size} h-${size} fill-yellow-500`}
        />
      ))}
      {/*new Array(5 - rating).fill(0).map(() => (
        <OutlineStarIcon className={`"w-${size} h-${size}`} />
      ))*/}
    </div>
  );
};

export default Rating;
