import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";

interface RateProps extends OsComponent {
  type?: string;
  title?: string;
  icon?: string;
  selectedIcon?: string;
  color?: string;
  selectedIconColor?: string;
  options?: Array<string>;
  value?: number;
  isShowResult?: boolean;
  onChange?: (item: object) => void;
}

declare const Rate: ComponentClass<RateProps>;

export { Rate, RateProps };
