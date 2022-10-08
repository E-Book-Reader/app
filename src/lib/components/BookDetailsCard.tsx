const BookDetailsCard = () => {
  return (
    <div className="flex flex-col gap-4 shadow-2xl bg-white rounded p-8">
      <div className="text-orange-400 font-bold text-xl">Details</div>
      <div className="grid grid-rows-2 grid-cols-2 justify-between content-between gap-4">
        <div>
          <div className="text-gray-300 text-sm">Pageback</div>
          <div className="text-black  text-lg">423 Pages</div>
        </div>
        <div>
          <div className="text-gray-300 text-sm">Language</div>
          <div className="text-black  text-lg">English</div>
        </div>
        <div>
          <div className="text-gray-300 text-sm">Publisher</div>
          <div className="text-black  text-lg">Grifin Publish, 2019</div>
        </div>
        <div>
          <div className="text-gray-300 text-sm">Owner</div>
          <div className="text-black  text-lg">@raiden</div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsCard;
