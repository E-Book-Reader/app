import React from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  ListBulletIcon,
  Squares2X2Icon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

import { GlobeAltIcon } from "@heroicons/react/24/solid";

import DropDownMenu from "../../core/components/DropDownMenu";
import { OptionsGroupType } from "../../core/components/DropDownMenu/interfaces/OptionsGroupInterface";
import RadioButtons from "../../core/components/RadioButtons";
import { ViewContextWrapper } from "../contexts";

const Filter = ViewContextWrapper(({ viewContext }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = React.useState(true);
  const [tab, setTab] = React.useState<string>();
  const [filter, setFilter] = React.useState<string>("1");
  const [display, setDisplay] = React.useState<number>(0);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleDisplayChange = (newDisplay: number) => {
    setDisplay(newDisplay);
    switch (newDisplay) {
      case 0:
        viewContext.setContent({ ...viewContext.content, books: "grid" });
        break;
      case 1:
        viewContext.setContent({ ...viewContext.content, books: "row" });
        break;
    }
  };

  const handleTabChange = (newTab: string) => {
    /**
     * TODO: keep the search / params settings after navigation
     */
    console.log("called");
    setTab(newTab);
    switch (newTab) {
      case "1":
        navigate("/books");
        break;
      case "2":
        navigate("/books/global");
        break;
    }
  };

  const handleFilterChange = (newFilter: string) => {
    searchParams[newFilter === "" ? "delete" : "set"]("filter", newFilter);
    setSearchParams(searchParams);
    setFilter(newFilter);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    /**
     * TODO: serialize / parse search to avoid sql injections
     * TODO: put filters also in search params inorder to access them easly
     */
    const search = event.target.value;
    searchParams[search === "" ? "delete" : "set"]("search", search);
    setSearchParams(searchParams);
  };

  const tabs = [
    {
      id: "1",
      type: OptionsGroupType.SELECT,
      options: [
        {
          id: "1",
          value: "books",
          selected: tab === "1",
          onInteract: handleTabChange,
        },
        {
          id: "2",
          value: (
            <div className="flex gap-1 items-center">
              global <GlobeAltIcon className="w-5 h-5" />
            </div>
          ),
          selected: tab === "2",
          onInteract: handleTabChange,
        },
      ],
    },
  ];

  React.useEffect(() => {
    if (location.pathname.includes("global")) setTab("2");
    else setTab("1");
    setLoading(false);
  }, []);

  const filters = [
    {
      id: "1",
      type: OptionsGroupType.SELECT,
      options: [
        {
          id: "1",
          value: "Progress",
          selected: filter === "1",
          onInteract: handleFilterChange,
        },
        {
          id: "2",
          value: "Last Viewed",
          selected: filter === "2",
          onInteract: handleFilterChange,
        },
        {
          id: "3",
          value: "Most Relevant",
          selected: filter === "3",
          onInteract: handleFilterChange,
        },
      ],
    },
  ];

  return loading ? (
    <div>loading</div>
  ) : (
    <div className="w-full grid grid-cols-3">
      <DropDownMenu options={tabs}>
        <div className="flex gap-1">
          <ChevronDownIcon className="w-6 h-6" />
          {tabs[0].options.find((tb) => tb.id === tab)?.value}
        </div>
      </DropDownMenu>
      <input
        type="text"
        defaultValue={searchParams.get("search") || ""}
        placeholder="Bookname"
        onChange={handleSearch}
        className="bg-transparent outline-none"
      />
      <div className="flex gap-3 justify-end items-center">
        <div className="flex gap-2 justify-center items-center">
          <div className="text-gray-400 font-normal text-sm">sort:</div>
          <DropDownMenu options={filters}>
            <div className="flex gap-1">
              {filters[0].options.find((op) => op.id === filter)?.value}
              <ChevronDownIcon className="w-6 h-6" />
            </div>
          </DropDownMenu>
        </div>
        <RadioButtons
          style="rows"
          selected={display}
          setSelected={handleDisplayChange}
        >
          <Squares2X2Icon className="cursor-pointer h-5 w-5 fill-inherit" />
          <ListBulletIcon className="cursor-pointer h-5 w-5 fill-inherit" />
        </RadioButtons>
      </div>
    </div>
  );
});

export default Filter;
