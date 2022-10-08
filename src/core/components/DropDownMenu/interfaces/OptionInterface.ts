export enum OptionType {
  CLICKABLE,
  TOGGLE,
  OPTION,
}

/**
 * TODO: make onInteract better
 * onInteract will give 3 params:
 *  close: function to close the menu
 *  groupId: id of the group where the clicked option belong
 *  id: id of the clicked option
 */

export interface OptionInterface {
  id: string;
  value: JSX.Element | string;
  onInteract: (groupId: string, id: string, close: () => void) => void;
}

export interface NormalOptionInterface extends OptionInterface {}

export interface SettingOptionInterface extends OptionInterface {
  setting: boolean;
}

export interface SelectOptionInterface extends OptionInterface {
  selected: boolean;
}
