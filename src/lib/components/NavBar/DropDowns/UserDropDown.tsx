import React from "react";
import {
  UserIcon,
  AdjustmentsHorizontalIcon as SettingsIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";

import DropDownMenu from "../../../../core/components/DropDownMenu";
import OptionsGroup, {
  OptionsGroupType,
} from "../../../../core/components/DropDownMenu/interfaces/OptionsGroupInterface";
import { useMainContext } from "../../../contexts/providers/MainContextProvider";
import { useNavigate } from "react-router-dom";

const UserDropDown = () => {
  const mainContext = useMainContext();

  const navigate = useNavigate();

  const userIconDropDownOptions: OptionsGroup[] = [
    {
      id: "1",
      type: OptionsGroupType.NORMAL,
      options: [
        {
          id: "1",
          value: mainContext.content.user ? (
            <div className="flex gap-2">
              <UserIcon className="h-4 w-4" />
              {mainContext.content.user.username}
            </div>
          ) : (
            "login"
          ),
          onInteract: () => {
            if (!mainContext.content.user) navigate("login");
            else navigate("/users/" + mainContext.content.user.id);
          },
        },
      ],
    },
  ];

  if (mainContext.content.user) {
    userIconDropDownOptions[0].options.push({
      id: "2",
      value: (
        <div className="flex gap-2 text-red-400">
          <ArrowLeftOnRectangleIcon className="h-4 w-4" />
          logout
        </div>
      ),
      onInteract: () => navigate("/logout/"),
    } as any);
  }

  return (
    <DropDownMenu options={userIconDropDownOptions}>
      <UserIcon className="h-6 w-6" />
    </DropDownMenu>
  );
};

export default UserDropDown;
