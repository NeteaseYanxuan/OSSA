import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";

interface ColorProps extends OsComponent {
  title: string;
}

declare const Color: ComponentClass<ColorProps>;

export { Color, ColorProps };
