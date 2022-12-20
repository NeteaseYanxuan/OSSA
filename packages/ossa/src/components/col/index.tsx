import React, { CSSProperties, useContext } from "react";
import { ITouchEvent, View } from "@tarojs/components";
import classNames from "classnames";
import type { OsColProps } from "../../../types/index";
import type { DataContextProps } from "../../../types/row";
import { DataContext } from '../row/UserContext';


function getStyleObj(context: DataContextProps): CSSProperties {
  const _styleObj: CSSProperties = {};
  const { gutter } = context;
  _styleObj.paddingLeft = `${(gutter as number) / 2}px`;
  _styleObj.paddingRight = `${(gutter as number) / 2}px`;

  return _styleObj;
}

function getClassObject(props: OsColProps, context: DataContextProps): Record<string, any> {
  const { span, offset } = props;
  const { gutter } = context;
  const _classObject = {
    [`ossa-col-${span}`]: true,
    [`ossa-col-gutter`]: !!gutter,
    [`ossa-col-offset-${offset}`]: true,
  };

  return _classObject;
}

function onClick(e: ITouchEvent, props: OsColProps): void {
  props.onClick?.(e);
}

export default function Col(props: OsColProps) {
  const rootClassName = 'ossa-col'; //组件
  const context = useContext<DataContextProps>(DataContext);
  const classObject = getClassObject(props, context); //组件修饰
  const styleObject = Object.assign(
    getStyleObj(context),
    props.customStyle
  );

  const {
    className,
  } = props;

  return (
    <View
      className={classNames(rootClassName, classObject, className)}
      style={styleObject}
      onClick={(e) => onClick(e, props)}
    >
      {props.children}
    </View>
  );
}

Col.defaultProps = {
  span: '24',
  offset: '0',
  gutter: '0',
};

Col.options = {
  addGlobalClass: true,
};
