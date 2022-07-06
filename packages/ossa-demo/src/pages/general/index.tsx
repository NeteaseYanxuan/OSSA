import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { OsList } from "ossaui";
import DemoHeader from "../../components/demoHeader";

import "ossaui/dist/style/components/list.scss";

export default class Index extends Component<null, IState> {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          title: "Color 规范",
          id: "color",
        },
        {
          title: "Font 文字",
          id: "font",
        },
        {
          title: "Layout 布局",
          id: "layout",
        },
        {
          title: "Icon 图标",
          id: "icon",
        },
        {
          title: "Button 按钮",
          id: "button",
        },
      ],
    };
  }

  onClick(e) {
    const { id } = e.currentTarget.dataset;
    if (id === "font") {
      Taro.navigateTo({
        url: `/pages/general/${id}/index`,
      });
    } else {
      Taro.navigateTo({
        url: `/components/${id}/demo/index`,
      });
    }
  }

  render() {
    const { list } = this.state;
    return (
      <View className="index page">
        <DemoHeader title="基础组件" icon="general"></DemoHeader>
        {list.map((item) => (
          <View key={item.id} data-id={item.id} onClick={this.onClick}>
            <OsList rightIcon="arrows">{item.title}</OsList>
          </View>
        ))}
      </View>
    );
  }
}

interface IState {
  list: Array<NavItem>;
}

interface NavItem {
  id: string;
  title: string;
}
