import React from "react";
import {
  SunIcon,
  AdjustmentsHorizontalIcon as SettingsIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

import DropDownMenu from "../../../../core/components/DropDownMenu";
import OptionsGroup, {
  OptionsGroupType,
} from "../../../../core/components/DropDownMenu/interfaces/OptionsGroupInterface";
import { useViewContext } from "../../../contexts/providers/ViewContextProvider";
import { useSettingsContext } from "../../../contexts/providers/SettingsContextProvider";

const SettingsDropDown = () => {
  const settingsContext = useSettingsContext();
  const viewContext = useViewContext();

  const settingsIconDropDownOptions: OptionsGroup[] = [
    {
      id: "1",
      type: OptionsGroupType.SELECT,
      multiselect: false,
      options: [
        {
          id: "1",
          value: "dark",
          selected: viewContext.content.theme === "dark",
          onInteract: () =>
            viewContext.setContent({
              ...viewContext.content,
              theme: "dark",
            }),
        },
        {
          id: "2",
          value: "light",
          selected: viewContext.content.theme === "light",
          onInteract: () =>
            viewContext.setContent({
              ...viewContext.content,
              theme: "light",
            }),
        },
      ],
    },
    {
      id: "2",
      type: OptionsGroupType.SETTINGS,
      options:
        settingsContext.content.settings.map((setting, i) => {
          return {
            id: String(i + 1),
            value: setting.name,
            state: setting.status,
            onInteract: () => settingsContext.toggle(i),
          };
        }) || [],
    },
  ];

  return (
    <DropDownMenu options={settingsIconDropDownOptions}>
      <SettingsIcon className="h-6 w-6" />
    </DropDownMenu>
  );
};

export default SettingsDropDown;
