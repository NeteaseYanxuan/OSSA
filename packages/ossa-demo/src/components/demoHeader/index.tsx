/* eslint-disable jsx-quotes */
/**
 * 组件demo的布局-头
 * @param {string} title 标题
 */

import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import { OsIcon } from "ossaui";

// import 'ossaui/dist/style/components/icon.scss'
import "./index.scss";

export default class DemoHeader extends Component<IProps> {
  onClick() {
    if (this.props.onClick) {
      this.props.onClick();
      return;
    }
    Taro.navigateTo({
      url: "/pages/index/index",
    });
  }

  render() {
    const rootClassName = ["header", "header__title"];
    const classObejct =
      Taro.getEnv() !== Taro.ENV_TYPE.WEB ? "hide-split-line" : "";
    const { icon } = this.props;

    return (
      <View className={classNames(rootClassName[0], classObejct)}>
        {Taro.getEnv() === Taro.ENV_TYPE.WEB && (
          <OsIcon type="detail-home" onClick={this.onClick.bind(this)}></OsIcon>
        )}
        {Taro.getEnv() !== Taro.ENV_TYPE.WEB && icon && (
          <OsIcon
            type={icon}
            size={44}
            customStyle={{ marginRight: Taro.pxTransform(18) }}
          ></OsIcon>
        )}
        <View className={classNames(rootClassName[1])}>{this.props.title}</View>
      </View>
    );
  }
}

interface IProps {
  title?: string;
  icon?: string;
  onClick?: () => {};
}
