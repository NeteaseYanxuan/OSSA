import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

interface BadgeProps extends OsComponent {
  type?: string;
  info?: any;
  max?: number;
  isShow?: boolean;
  className?: string;
  children?: ReactChild;
  customStyle?: Object;
  onClick?: CommonEventFunction;
}

declare const Badge: ComponentClass<BadgeProps>;

export { Badge, BadgeProps };
