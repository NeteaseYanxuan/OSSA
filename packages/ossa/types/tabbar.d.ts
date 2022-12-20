import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";
import { IconProps } from "./icon";

export interface TabBarItemProps extends OsComponent {
  /**
   * 未选中图标
   * @desc 当`useCustomIcon`为`true`时，可传入自定义的`ReactChild`定制图标
   * @see https://ossa.miaode.com/docs/%E7%BB%84%E4%BB%B6/icon
   */
  icon: IconProps["type"] | ReactChild;
  /**
   * 选中图标
   * @desc 当`useCustomIcon`为`true`时，可传入自定义的`ReactChild`定制图标
   * @see https://ossa.miaode.com/docs/%E7%BB%84%E4%BB%B6/icon
   */
  selectedIcon: IconProps["type"] | ReactChild;
  /**
   * 文本内容
   */
  text: string;
  /**
   * 是否使用自定义图标
   * @default false
   */
  useCustomIcon?: boolean;
}
/**
 * 标签栏
 */
export interface TabBarProps extends OsComponent {
  /**
   * 标签栏数据配置
   */
  tabsArr: Array<TabBarItemProps>;
  /**
   * 是否固定在页面底部
   * @default false
   */
  isfixedBt?: boolean;
  /**
   * 激活项颜色
   * @default '#DD1A21'
   */
  activeColor?: string;
  /**
   * 默认颜色
   * @default '#7F7F7F'
   */
  defaultColor?: string;
  /**
   * icon与文案垂直间距
   * @default 0
   */
  space?: number;
  /**
   * 当前选中的标签索引值，从0开始
   * @default 0
   * @deprecated `value`属性在未来版本中将被删除，请使用`activeTabIdx`代替
   */
  value?: number;
  /**
   * 当前选中标签索引值，从0开始
   */
  activeTabIdx?: number;
  /**
   * 点击回调
   * @param item 当前点击的标签项数据
   * @param index 当前点击标签项索引
   */
  onClick?: (item: OsTabBarItemProps, index: number) => void;
}

declare const TabBar: ComponentClass<TabBarProps>;

export { TabBar };
