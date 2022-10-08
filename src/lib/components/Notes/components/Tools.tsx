import React from "react";
import {
  TrashIcon,
  MapPinIcon as MarkIcon,
  PencilIcon as TextIcon,
  PaintBrushIcon as MarkerIcon,
  CursorArrowRaysIcon as CursorIcon,
} from "@heroicons/react/24/solid";

const Tools = () => {
  const [selected, setSelected] = React.useState<number>(0);

  const Icons = [CursorIcon, TextIcon, MarkerIcon, MarkIcon, TrashIcon];

  return (
    <div className="w-full h-20 drop-shadow-lg flex items-center rounded-lg bg-white overflow-hidden">
      {Icons.map((Icon, i) => (
        <div
          key={i}
          className={
            "flex items-center justify-center h-20 cursor-pointer border-r-2 border-r-gray-300 flex-1" +
            " " +
            {
              /*selected
              ? "fill-orange-400"
          : "fill-black"*/
            }
          }
          onClick={setSelected.bind(null, i)}
        >
          <Icon className="w-6 h-6 fill-inherit" />
        </div>
      ))}
    </div>
  );
};

export default Tools;
