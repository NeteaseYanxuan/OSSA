/**
 * 组件demo的布局-块
 * @param {string} title 标题
 * @param {string} subTitle 二级 标题
 * @param {boolean} hidePd 是否将边距置0
 */

import React, { Component } from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
// import './index.scss'
import "./index.scss";

export default class DemoBlock extends Component<IProps> {
  render() {
    const rootClassName = ["block", "block__title", "block__subTitle"];
    const classObject = [
      {
        ["block--hide-padding"]: this.props.hidePd,
        ["block--hide-mb"]: this.props.hideMb,
      },
      {
        ["block__title--hide-padding"]: this.props.hidePd,
      },
    ];
    const { customStyle, className } = this.props;

    return (
      <View
        className={classNames(rootClassName[0], classObject[0], className)}
        style={customStyle}
      >
        <View className="block__header">
          {this.props.title && (
            <View className={classNames(rootClassName[1], classObject[1])}>
              {this.props.title}
            </View>
          )}
          {this.props.subTitle && (
            <View className={classNames(rootClassName[2])}>
              {this.props.subTitle}
            </View>
          )}
        </View>
        <View
          className={classNames({
            ["block__body"]: true,
            ["block__body--fullscreen"]: this.props.fullScreen,
          })}
        >
          {this.props.children}
        </View>
      </View>
    );
  }
}

interface IProps {
  title?: string;
  subTitle?: string;
  hidePd?: boolean;
  hideMb?: boolean;
  customStyle?: object;
  className?: string;
  fullScreen?: boolean;
}
