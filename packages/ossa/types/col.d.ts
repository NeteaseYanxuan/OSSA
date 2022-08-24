import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

interface ColProps extends OsComponent {
  span?: string | number
  offset?: string | number
  gutter?: string | number
  onClick?: CommonEventFunction;
}

declare const Col: ComponentClass<ColProps>;

export { Col, ColProps };
