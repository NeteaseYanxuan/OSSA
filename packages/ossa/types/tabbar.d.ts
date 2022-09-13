import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";

export interface TabBarItemProps extends OsComponent {
  icon: string | ReactChild;
  selectedIcon: string | ReactChild;
  text: string;
  useCustomIcon?: boolean;
}
export interface TabBarProps extends OsComponent {
  tabsArr: Array<TabBarItemProps>;
  isfixedBt?: boolean;
  activeColor?: string;
  defaultColor?: string;
  space?: number;
  value?: number;
  onClick?: (v: object) => void;
}

declare const TabBar: ComponentClass<TabBarProps>;

export { TabBar };
