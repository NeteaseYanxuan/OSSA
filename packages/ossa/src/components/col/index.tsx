import React, { CSSProperties, createContext, useContext } from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
import { OsColProps } from "../../../types/index";
import { DataContext } from '../row/UserContext';

function getStyleObj(context: any) {
  const _styleObj: CSSProperties = {};
  const { gutter } = context;
  _styleObj.paddingLeft = `${(gutter as number) / 2}px`;
  _styleObj.paddingRight = `${(gutter as number) / 2}px`;

  return _styleObj;
}

function getClassObject(props: OsColProps, context: any) {
  const { span, offset } = props;
  const { gutter } = context;
  const _classObject = {
    [`ossa-col-${span}`]: true,
    [`ossa-col-gutter`]: !!gutter,
    [`ossa-col-offset-${offset}`]: true,
  };

  return _classObject;
}

function onClick(e: any, props: OsColProps) {
  props.onClick?.(e);
}

export default function Col(props: OsColProps) {
  const rootClassName = 'ossa-col'; //组件
  const context = useContext(DataContext) as any;
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
