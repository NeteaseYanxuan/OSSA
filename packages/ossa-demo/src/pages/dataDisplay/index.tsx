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
          title: "Badge 徽标",
          id: "badge",
        },
        {
          title: "Tag 标签",
          id: "tag",
        },
        {
          title: "List 列表",
          id: "list",
        },
        {
          title: "Carousel 走马灯",
          id: "carousel",
        },
        {
          title: "ImagePreview 图片预览",
          id: "imagePreview",
        },
        {
          title: "NoticeBar 通告栏",
          id: "noticeBar",
        },
        {
          title: "倒计时",
          id: "countdown",
        },
        {
          title: "时间轴",
          id: "timeline",
        },
      ],
    };
  }

  onClick(e) {
    const { id } = e.currentTarget.dataset;
    Taro.navigateTo({
      //url: `/pages/dataDisplay/${id}/index`
      url: `/components/${id}/demo/index`,
    });
  }

  render() {
    const { list } = this.state;
    return (
      <View className='index page'>
        <DemoHeader title='数据展示' icon='data-display'></DemoHeader>
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
  list: any;
}
