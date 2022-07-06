import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

interface ListProps extends OsComponent {
  title?: string;
  type?: string;
  subTitle?: string;
  rightIcon?: string;
  leftIcon?: string;
  desc?: string;
  active?: string;
  showSplitLine?: boolean;
  color?: string;
  bgColor?: string;
  activeBgColor?: string;
  leftIconSize?: number;
  descColor?: string;
  onClick?: CommonEventFunction;
}

declare const List: ComponentClass<ListProps>;

export { List, ListProps };
