import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";

export interface TabbarItemProps extends OsComponent {
  icon: string | ReactChild;
  selectedIcon: string | ReactChild;
  text: string;
  useCustomIcon?: boolean;
}
export interface TabbarProps extends OsComponent {
  tabsArr: Array<TabbarItemProps>;
  isfixedBt?: boolean;
  activeColor?: string;
  defaultColor?: string;
  space?: number;
  value?: number;
  onClick?: (v: object) => void;
}

declare const Tabbar: ComponentClass<TabbarProps>;

export { Tabbar };
