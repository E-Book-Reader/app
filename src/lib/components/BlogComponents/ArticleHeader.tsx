import {
  FlagIcon,
  ClipboardDocumentIcon,
  BookmarkIcon,
} from "@heroicons/react/24/solid";
import HandWritingEmoji from "../Emojis/HandWritingEmoji";

import Rating from "../Rating";

interface ArticleHeaderProps {
  id: string;
  date: Date;
  title: string;
  rating: string;
  author: string;
}

const ArticleHeader = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Rating rating={3} size="8" />
      <div className="w-full flex justify-between items-center">
        <div className="text-5xl font-bold text-black">
          An Entry To Algorithmic
        </div>
        {/**
         * TODO: make it responsive, when size shrink instead of displaying three icons we display only three dots
         */}
        <div className="flex justify-center items-center gap-4">
          <FlagIcon className="w-6 h-6 cursor-pointer" />
          <ClipboardDocumentIcon className="w-6 h-6 cursor-pointer" />
          <BookmarkIcon className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <HandWritingEmoji />
        <div className="text-2xl font-bold text-gray-500">Raiden</div>
        <div className="text-2xl font-bold text-gray-500">2 Days ago</div>
      </div>
    </div>
  );
};

export default ArticleHeader;
