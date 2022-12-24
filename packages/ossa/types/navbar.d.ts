import { ComponentClass, ReactChild } from "react";
import { IconProps } from "./icon";
import OsComponent from "./base";

export interface NavBarItemProps extends OsComponent {
  id: number;
  text: string;
}

/**
 * 导航栏
 */
export interface NavBarProps extends OsComponent {
  /**
   * 导航标题
   */
  title?: ReactChild;
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
  /**
   * 标题区域自定义插槽
   * @deprecated `middleSlot`属性将在未来的版本中被删除，请使用`title`替代
   */
  middleSlot?: ReactChild;
  /**
   * 左侧icon,取值参考OsIcon
   * @see https://ossa.miaode.com/docs/%E7%BB%84%E4%BB%B6/icon
   */
  leftIcons?: IconProps["type"][];
  /**
   * 当且仅当 leftIcons 为 custom 时生效，渲染自定义图标
   */
  leftCustomIcons?: IconProps["customIcon"][];
  /**
   * 左侧文案
   */
  leftTexts?: Array<NavBarItemProps>;
  /**
   * 自定义左侧内容，存在时覆盖leftIcons和leftTexts，但比custom优先级低
   */
  leftSlot?: ReactChild;
  /**
   * 右侧文案
   */
  rightTexts?: Array<NavBarItemProps>;
  /**
   * 右侧icon,取值参考OsIcon
   * @see https://ossa.miaode.com/docs/%E7%BB%84%E4%BB%B6/icon
   */
  rightIcons?: IconProps["type"][];
  /**
   * 当且仅当 rightIcons 为 custom 时生效，渲染自定义图标
   */
  rightCustomIcons?: IconProps["customIcon"][];

  /**
   * 自定义右侧内容，存在时覆盖rightIcons和rightTexts，但比custom优先级低，可选
   */
  rightSlot?: ReactChild;
  /**
   * 展示分割线
   * @default true
   */
  showSplitLine?: boolean;
  /**
   * 左侧图标点击回调
   * @param {IconProps["type"]} item 点击的图标类型id
   */
  onLeftIconClick?: (item: IconProps["type"]) => void;
  /**
   * 左侧文本点击回调
   * @param {number} id 该文本的id
   */
  onLeftTextClick?: (id: number) => void;
  /**
   * 右侧图标点击回调
   * @param {IconProps["type"]} item 点击的图标类型id
   */
  onRightIconClick?: (item: IconProps["type"]) => void;
  /**
   * 右侧文本点击回调
   * @param {number} id 该文本的id
   */
  onRightTextClick?: (id: number) => void;
}

declare const NavBar: ComponentClass<NavBarProps>;

export { NavBar };
