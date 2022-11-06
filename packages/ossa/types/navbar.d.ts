import { ComponentClass, ReactChild } from "react";
import { IconProps } from "./icon";
import OsComponent from "./base";

export interface NavBarItemProps extends OsComponent {
  id: number;
  text: string;
}
export interface NavBarProps extends OsComponent {
  /**
   * 导航标题
   */
  title?: string;
  /**
   * 展示类型
   * @desc
   * - "2column": 两列均分
   * - "3column": 三列均分
   * - "custom": 自定义
   * @default "3column"
   */
  type?: "2column" | "3column" | "custom";
  /**
   * icon的颜色，仅当使用ossa提供的icon时有效
   * @default "#7f7f7f"
   */
  iconColor?: string;
  middleSlot?: ReactChild;
  leftIcons?: Array<IconProps["type"]>;
  leftTexts?: Array<NavBarItemProps>;
  leftSlot?: ReactChild;
  rightTexts?: Array<NavBarItemProps>;
  rightIcons?: Array<IconProps["type"]>;
  rightSlot?: ReactChild;
  showSplitLine?: boolean;
  onLeftIconClick?: (item: string) => {};
  onLeftTextClick?: (id: number) => {};
  onRightIconClick?: (item: string) => {};
  onRightTextClick?: (id: number) => {};
}

declare const NavBar: ComponentClass<NavBarProps>;

export { NavBar };
