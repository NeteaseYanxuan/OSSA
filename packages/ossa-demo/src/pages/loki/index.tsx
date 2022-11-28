/* eslint-disable jsx-quotes */
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
          title: "抽奖转盘",
          desc: "",
          id: "turntable",
        },
        {
          title: "九宫格",
          desc: "",
          id: "ninegrid",
        },
      ],
    };
  }

  onShareAppMessage() {
    return {
      title: "OSSA Loki",
      path: "/pages/loki/index",
    };
  }

  onClick(e) {
    const { id } = e.currentTarget.dataset;

    Taro.navigateTo({
      url: `/pages/loki/${id}/index`,
    });
  }

  render() {
    const { list } = this.state;
    return (
      <View className="index page page-home">
        <View className="index-head">
          <Image className="index-head__img" src={logo}></Image>
          <View className="index-head__texts">
            <View className="index-head__title">OSSA / LOKI</View>
            <View className="index-head__desc">
              <span>功能强大</span>且<span>专业可靠</span>的营销组件
            </View>
          </View>
        </View>
        <View className="index__body">
          {list.map((item: NavItem) => (
            <View
              key={item.id}
              data-id={item.id}
              onClick={this.onClick}
              className="index__list"
            >
              <DemoListRow
                title={item.title}
                subTitle={item.desc}
                leftIcon={item.icon ? item.icon : item.id}
                showSplitLine={false}
                leftIconSize={44}
                rightIcon="arrows"
                title-class="list-item-title"
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
