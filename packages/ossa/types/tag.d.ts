import { ComponentClass, CSSProperties } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

interface TagProps extends OsComponent {
  /**
   * 展示类型
   * @desc
   * - "radius": 圆角矩形
   * - "primary": 方角矩形
   * @default "radius"
   */
  type?: "radius" | "primary";
  /**
   * 标签色值
   * @desc
   * - "normal": #B4B4B4
   * - "warning": #F48F18
   * - "error": #DD1A21
   * - 其他合法色值
   */
  color?: "normal" | "warning" | "error" | string & {};
  /**
   * 点击回校
   */
  onClick?: CommonEventFunction;
  /**
   * 背景颜色
   */
  bgColor?: string;
  /**
   * 渐变色起始色值，必须与`endBgColor`联用，优先级比`bgColor`高
   */
  startBgColor?: string;
  /**
   * 渐变色结束色值，必须与`startBgColor`联用，优先级比`bgColor`高
   */
  endBgColor?: string;
  /**
   * 显示向右箭头
   * @default false
   * @support type="normal"
   */
  showArrow?: boolean;
  /**
   * tag尺寸大小
   * @default "normal"
   * @support type="normal"
   */
  size?: "middle" | "large";
  /**
 * 边框颜色
 */
  border?: string;
  
}

declare const Tag: ComponentClass<TagProps>;

export { Tag, TagProps };
