import { ComponentClass, ReactChild, ReactNode } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import { number } from "prop-types";
import OsComponent from "./base";

interface TabsProps extends OsComponent {
  type?: string;
  renderHeader: any;
  // onClick?: () => {}
}

interface TabsHeaderProps extends OsComponent {
  type?: string;
  size?: string;
  showSplitLine?: boolean;
  duration?: number;
  scroll?: boolean;
  value?: number;
  bgColor?: string;
  space?: number;
}

interface TabsHeaderItemProps extends OsComponent {
  type?: string;
  size?: string;
  index: number;
  current?: number;
  color?: string;
  selectedColor?: string;
  text?: string;
  icon?: string;
  selectedIcon?: string;
  custom?: boolean;
  renderCustom?: any;
  renderSelectedCustom?: any;
  onClick?: (v: number) => void;
}

interface TabsPanelProps extends OsComponent {
  index: number;
  current?: number;
  customStyle?: object;
  onClick?: (v: object) => void;
}

declare const Tabs: ComponentClass<TabsProps>;
declare const TabsHeader: ComponentClass<TabsHeaderProps>;
declare const TabsHeaderItem: ComponentClass<TabsHeaderItemProps>;
declare const TabsPanel: ComponentClass<TabsPanelProps>;

export {
  Tabs,
  TabsHeader,
  TabsHeaderItem,
  TabsPanel,
  TabsProps,
  TabsHeaderProps,
  TabsHeaderItemProps,
  TabsPanelProps,
};
