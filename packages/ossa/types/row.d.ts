import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

interface RowProps extends OsComponent {
  type?: string
  justify?: string
  align?: string
  wrap?: string
  gutter?: string | number
  onClick?: CommonEventFunction;
}

declare const Row: ComponentClass<RowProps>;

export { Row, RowProps };
