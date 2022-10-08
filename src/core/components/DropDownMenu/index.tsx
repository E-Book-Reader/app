import React, { useRef } from "react";

import OptionsGroup, {
  OptionsGroupType,
} from "./interfaces/OptionsGroupInterface";

import DropDownOptionsGroupNormal from "./components/DropDownOptionsGroupNormal";
import DropDownOptionsGroupSelect from "./components/DropDownOptionsGroupSelect";
import DropDownOptionsGroupSettings from "./components/DropDownOptionsGroupSettings";
import {
  NormalOptionInterface,
  SelectOptionInterface,
  SettingOptionInterface,
} from "./interfaces/OptionInterface";
import useOutsideCallback from "../../hooks/useOutsideCallback";

interface SlectProps {
  children: JSX.Element;
  options: OptionsGroup[];
}

const DropDownMenu = ({ children, options: groups }: SlectProps) => {
  const [isOpened, setIsOpened] = React.useState<boolean>(false);

  const ref: any = useRef();
  const toggleMenu = () => setIsOpened(!isOpened);

  useOutsideCallback(ref, () => setIsOpened(false));

  return (
    <div className="relative select-none">
      <div onClick={toggleMenu} className="cursor-pointer">
        {children}
      </div>
      {isOpened ? (
        <div
          className="flex flex-col gap-2 bg-neutral-800 absolute py-2 z-10 w-auto"
          ref={ref}
        >
          {groups.map((group, i) => {
            switch (group.type) {
              case OptionsGroupType.NORMAL:
                return (
                  <div key={group.id}>
                    <DropDownOptionsGroupNormal
                      options={group.options as NormalOptionInterface[]}
                    />
                    {i !== groups.length - 1 ? (
                      <div className="border-b-[1px] border-b-gray-600 w-auto"></div>
                    ) : null}
                  </div>
                );
              case OptionsGroupType.SETTINGS:
                return (
                  <div key={group.id}>
                    <DropDownOptionsGroupSettings
                      options={group.options as SettingOptionInterface[]}
                    />
                    {i !== groups.length - 1 ? (
                      <div className="border-b-[1px] border-b-gray-600 w-auto"></div>
                    ) : null}
                  </div>
                );
              case OptionsGroupType.SELECT:
                return (
                  <div key={group.id}>
                    <DropDownOptionsGroupSelect
                      options={group.options as SelectOptionInterface[]}
                    />
                    {i !== groups.length - 1 ? (
                      <div className="border-b-[1px] border-b-gray-600 w-auto"></div>
                    ) : null}
                  </div>
                );
            }
          })}
        </div>
      ) : null}
    </div>
  );
};

export default DropDownMenu;
