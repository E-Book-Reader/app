import {
  BookmarkIcon,
  ClockIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import Image from "./BlogComponents/Image";
import Rating from "./Rating";

interface ArticleCardProps {
  title: string;
  image: string;
  rating: number;
  /**
   * TODO make topics non
   */
  topics?: string[];
}

const ArticleCard = ({ title, image, rating, topics }: ArticleCardProps) => {
  return (
    <div className="bg-white flex flex-col gap-4 p-8 rounded shadow-lg">
      <img
        className="bg-orange-400 w-full h-40 rounded"
        src={image}
        alt={"article-image"}
      />
      <Rating rating={rating} size={"5"} />
      <div className="flex justify-between items-center">
        {/**
         * TODO: article title can't be too long, make it's overflow hidden with a 3 dots at the end if it's too long
         */}
        <div className="text-2xl font-bold">{title}</div>
        {/**
         * TODO: make it responsive, when size shrink instead of displaying three icons we display only three dots
         */}
        <div className="flex items-center justify-center gap-4">
          <ClipboardDocumentIcon className="h-6 w-6 cursor-pointer" />
          <BookmarkIcon className="h-6 w-6 cursor-pointer" />
          <ClockIcon className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
      {/**
       * TODO: when you click on a topic there is a hover effect
       * TODO: when you click on a topic it takes you to the articles page with a filter applied that research only in this topic
       */}
      <div className="flex gap-4 items-center">
        {topics?.map((topic, i) => (
          <div key={topic + "-" + i} className="text-base">
            #{topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleCard;
