import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import DemoListRow from "../../components/demoListRow";

import "./index.scss";
import logo from "../../assets/img/logo.png";

export default class Index extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "基础组件",
          desc: "包含按钮、图标、布局",
          id: "general",
        },
        {
          title: "数据录入",
          desc: "包含单选框、复选框、输入框、选择、时间选择等",
          id: "dataEntry",
          icon: "data-entry",
        },
        {
          title: "操作反馈",
          desc: "包含对话框、动作面板、加载、轻提示",
          id: "feedback",
        },
        {
          title: "数据展示",
          desc: "包含列表、轮播、标记、徽章、通告栏、图片预览",
          id: "dataDisplay",
          icon: "data-display",
        },
        {
          title: "导航组件",
          desc: "包含导航栏、标签栏、标签页",
          id: "navigation",
        },
        {
          title: "动画",
          desc: "包含一些基础动画、转场动画、文字动画等",
          id: "animate",
        },
        {
          title: "业务组件",
          desc: "包含一些倒计时等",
          id: "business",
        },
      ],
    };
  }

  onShareAppMessage() {
    return {
      title: "OSSA UI",
      path: "/pages/index/index",
    };
  }

  onClick(e) {
    const { id } = e.currentTarget.dataset;

    Taro.navigateTo({
      url: `/pages/${id}/index`,
    });
  }

  render() {
    const { list } = this.state;
    return (
      <View className='index page page-home'>
        <View className='index-head'>
          <Image className='index-head__img' src={logo}></Image>
          <View className='index-head__texts'>
            <View className='index-head__title'>OSSA</View>
            <View className='index-head__desc'>
              Taro官方推荐的企业级UI库
            </View>
          </View>
        </View>
        <View className='index__body'>
          {list.map((item: NavItem) => (
            <View
              key={item.id}
              data-id={item.id}
              onClick={this.onClick}
              className='index__list'
            >
              <DemoListRow
                title={item.title}
                subTitle={item.desc}
                leftIcon={item.icon ? item.icon : item.id}
                showSplitLine={false}
                leftIconSize={44}
                rightIcon='arrows'
                title-class='list-item-title'
              ></DemoListRow>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

interface State {
  list: Array<NavItem>;
}

interface Props {}

interface NavItem {
  id: string;
  title: string;
  desc: string;
  icon?: string;
}
