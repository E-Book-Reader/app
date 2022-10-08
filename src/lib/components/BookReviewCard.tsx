import Identifiant from "./Identifiant";
import Rating from "./Rating";

const BookReviewCard = () => {
  return (
    <div className="flex flex-col gap-4 shadow-2xl bg-white rounded p-8">
      <div className="flex items-center justify-between">
        <div className="text-orange-400 font-bold text-xl">Review</div>
        <div>14 Aout 2022</div>
      </div>
      <Rating rating={3} size="5" />
      <Identifiant name="Chpsi" details="Paris, France" avatar="" />
      <div className="leading-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus amet
        feugiat egestas adipiscing tellus.
      </div>
    </div>
  );
};

export default BookReviewCard;
