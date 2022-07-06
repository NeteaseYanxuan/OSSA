import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

interface LoadingProps extends OsComponent {
  color?: string;
  size?: number;
  onClick?: CommonEventFunction;
  // onClick?: () => {}
}

declare const Loading: ComponentClass<LoadingProps>;

export { Loading, LoadingProps };
