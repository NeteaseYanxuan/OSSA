import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { OsList } from "ossaui";
import DemoHeader from "../../components/demoHeader";

export default class Index extends Component<null, IState> {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          title: "NavBar 导航栏",
          id: "navBar",
        },
        {
          title: "TabBar 标签栏",
          id: "tabbar",
        },
        {
          title: "Tab 选项卡",
          id: "tabs",
        },
      ],
    };
  }

  onClick(e) {
    const { id } = e.currentTarget.dataset;
    Taro.navigateTo({
      url: `/components/${id}/demo/index`,
    });
  }

  render() {
    const { list } = this.state;
    return (
      <View className='index page'>
        <DemoHeader title='导航组件' icon='navigation'></DemoHeader>
        {list.map((item) => (
          <View data-id={item.id} key={item.id} onClick={this.onClick}>
            <OsList rightIcon='arrows'>{item.title}</OsList>
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
