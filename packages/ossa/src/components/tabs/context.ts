import { createContext } from "react";
import { TabsProps } from "../../../types/tabs";

export type TabsConfig = {
  /**
   * 类型
   * @desc 与`TabsProps`的`type`相同
   * @default "horizontal"
   */
  type?: TabsProps["type"];
  /**
   * 尺寸
   * @desc
   * - default: 默认尺寸,高度60px
   * - large: 大尺寸,高度80px
   */
  size?: TabsProps["size"]
};
export const tabsConfigContext = createContext<TabsConfig>({});

export const TabsConfigProvider = tabsConfigContext.Provider;
export const TabsConfigConsumer = tabsConfigContext.Consumer;
