import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";

/**
 * @name 预设颜色色块属性
 */
interface ColorProps extends OsComponent {
  /**
   * 颜色的标题
   */
  title: string;
}

declare const Color: ComponentClass<ColorProps>;

export { Color, ColorProps };
