import { ComponentClass, ReactChild } from "react";
import OsComponent from "./base";
import { OsCommonFunction } from "./common";

interface ActionsheetProps extends OsComponent {
  title?: String;
  isShow: Boolean;
  cancelText?: String;
  onClose?: OsCommonFunction;
}

interface ActionsheetItemProps extends OsComponent {
  title: String;
  disabled?: Boolean;
  onClick?: OsCommonFunction;
}

declare const Actionsheet: ComponentClass<ActionsheetProps>;
declare const ActionsheetItem: ComponentClass<ActionsheetItemProps>;

export { Actionsheet, ActionsheetProps, ActionsheetItem, ActionsheetItemProps };
