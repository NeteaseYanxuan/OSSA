import { ComponentClass } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

interface TagProps extends OsComponent {
  type?: "radius" | "primary";
  color?: string;
  customStyle?: object;
  onClick?: CommonEventFunction;
  bgColor?: string;
  startBgColor?: string;
  endBgColor?: string;
  showArrow?: boolean;
}

declare const Tag: ComponentClass<TagProps>;

export { Tag, TagProps };
