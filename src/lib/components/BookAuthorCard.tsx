import { EnvelopeIcon } from "@heroicons/react/20/solid";

import Identifiant from "./Identifiant";

const BookAuthorCard = () => {
  return (
    <div className="flex flex-col gap-4 shadow-2xl bg-white rounded p-8">
      <div className="text-orange-400 font-bold text-xl">Author</div>
      <Identifiant name="Raiden Johnson" details="Paris, France" avatar="" />
      <div className="leading-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus amet
        feugiat egestas adipiscing tellus.
      </div>
      <div className="flex justify-between items-center">
        <div className="text-orange-400 font-bold text-xs cursor-pointer">
          Books
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <EnvelopeIcon className="h-5 w-5" />
          <div className="text-xs">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default BookAuthorCard;
