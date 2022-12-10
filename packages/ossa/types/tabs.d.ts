import { ComponentClass, ReactChild, ReactNode } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";
import { IconProps } from "./icon";

/**
 * 标签页
 */
interface TabsProps extends OsComponent {
  /**
   * 类型
   * @desc
   * - "horizontal": 横向
   * - "vertical": 纵向
   * @default "horizontal"
   */
  type?: "horizontal" | "vertical";
  /**
   * 一个OsTabsHeader组件
   */
  renderHeader: any;
  /**
   * 尺寸
   * @desc
   * - default: 默认尺寸,高度60px
   * - large: 大尺寸,高度80px
   */
  size?: "default"|"large";
  // onClick?: () => {}
}
/**
 *
 */
interface TabsHeaderProps extends OsComponent {
  /**
   * 是否显示分割线
   * @default false
   */
  showSplitLine?: boolean;
  /**
   * 是否开启滚动
   * @default false
   */
  scroll?: boolean;
  /**
   * 当前选中索引
   * @default 0
   * @deprecated `value`属性在未来版本中将被删除，请使用`activeTabIdx`代替
   */
  value?: number;
  /**
   * 当前选中索引
   */
  activeTabIdx?: number;
  /**
   * 背景色
   * @default '#fafafa'
   */
  bgColor?: string;
  /**
   * 间距
   * @default 0
   */
  space?: number;
}

interface TabsHeaderItemProps extends OsComponent {
  /**
   * 当前项索引
   */
  index: number;
  /**
   * 当前激活索引
   * @default 0
   */
  current?: number;
  /**
   * 文字颜色
   * @default "#333333"
   */
  color?: string;
  /**
   * 激活 tab 的文字颜色
   * @default #DD1A21
   */
  selectedColor?: string;
  /**
   * 选项文案
   */
  text?: string;
  /**
   * 图标
   * @see https://ossa.miaode.com/docs/%E7%BB%84%E4%BB%B6/icon
   */
  icon?: IconProps["type"];
  /**
   * 激活图标
   * @see https://ossa.miaode.com/docs/%E7%BB%84%E4%BB%B6/icon
   */
  selectedIcon?: string;
  /**
   * 是否自定义渲染
   * @default false
   */
  custom?: boolean;
  /**
   * 自自定义标签项
   */
  renderCustom?: ReactNode;
  /**
   * 自定义选中标签项
   */
  renderSelectedCustom?: ReactNode;
  /**
   * 标签项点击回调
   * @param index 当前标签项索引
   */
  onClick?: (index: number) => void;
}

interface TabsPanelProps extends OsComponent {
  /**
   * 标签面板索引
   */
  index: number;
  /**
   * 当前标签面板索引
   * @default 0
   */
  current?: number;
  /**
   * 点击标签面板回调
   * @param index 点击标签面板的索引
   */
  onClick?: (index: number) => void;
}

declare const Tabs: ComponentClass<TabsProps>;
declare const TabsHeader: ComponentClass<TabsHeaderProps>;
declare const TabsHeaderItem: ComponentClass<TabsHeaderItemProps>;
declare const TabsPanel: ComponentClass<TabsPanelProps>;

export {
  Tabs,
  TabsHeader,
  TabsHeaderItem,
  TabsPanel,
  TabsProps,
  TabsHeaderProps,
  TabsHeaderItemProps,
  TabsPanelProps,
};
