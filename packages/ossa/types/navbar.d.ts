import { ComponentClass, ReactChild } from "react";
import { IconProps } from "./icon";
import OsComponent from "./base";

export interface NavBarItemProps extends OsComponent {
  id: number;
  text: string;
}
export interface NavBarProps extends OsComponent {
  title?: String;
  type?: String;
  iconColor?: string;
  middleSlot?: ReactChild;
  leftIcons?: Array<IconProps["type"]>;
  leftTexts?: Array<NavBarItemProps>;
  leftSlot?: ReactChild;
  rightTexts?: Array<NavBarItemProps>;
  rightIcons?: Array<IconProps["type"]>;
  rightSlot?: ReactChild;
  showSplitLine?: boolean;
  onLeftIconClick?: (item: string) => {};
  onLeftTextClick?: (id: number) => {};
  onRightIconClick?: (item: string) => {};
  onRightTextClick?: (id: number) => {};
}

declare const NavBar: ComponentClass<NavBarProps>;

export { NavBar };
