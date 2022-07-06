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
          title: "Css 样式动画",
          id: "animate",
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
        <DemoHeader title='动画' icon='animate'></DemoHeader>
        {list.map((item) => (
          <View data-id={item.id} onClick={this.onClick} key={item.id}>
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
