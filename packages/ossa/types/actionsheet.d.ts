import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";
import { OsCommonFunction } from "./common";

/**
 * @name 动作面板 
 * @description 从底部弹出的动作菜单面板。 
 * @see https://ossa.miaode.com/docs/%E7%BB%84%E4%BB%B6/actionsheet
 */
interface ActionsheetProps extends OsComponent {
  /**
   * @prop 面板标题
   */
  title?: string;
  /**
   * @prop 是否显示弹窗
   */
  isShow: boolean;
  /**
   * @prop 取消按钮文本
   */
  cancelText?: string;
  /**
   * @function onClose 关闭面板回调
   */
  onClose?: OsCommonFunction;
}

/**
 * @name 操作面板数据项
 * @description 在操作面板的每一个数据项的结构
 */
interface ActionsheetItemProps extends OsComponent {
  /**
   * @prop 面板数据项标题
   */
  title: string;
  /**
   * @prop 该数据项是否禁止操作
   */
  disabled?: boolean;
  /**
   * @function onClose 关闭面板回调
   */
  onClick?: OsCommonFunction;
}

declare const Actionsheet: ComponentClass<ActionsheetProps>;
declare const ActionsheetItem: ComponentClass<ActionsheetItemProps>;

export { Actionsheet, ActionsheetProps, ActionsheetItem, ActionsheetItemProps };
