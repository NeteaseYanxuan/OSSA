import { ComponentClass } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

interface IconProps extends OsComponent {
  type: string;
  size?: number;
  color?: string;
  className?: string;
  customStyle?: object;
  onClick?: CommonEventFunction;
}

declare const Icon: ComponentClass<IconProps>;

export { Icon, IconProps };
