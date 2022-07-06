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
          title: "Radio 单选框",
          id: "radio",
        },
        {
          title: "Checkbox 复选框",
          id: "checkbox",
        },
        {
          title: "Switch 开关",
          id: "switch",
        },
        {
          title: "Rate 评分",
          id: "rate",
        },
        {
          title: "Input 输入框",
          id: "input",
        },
        {
          title: "Stepper 步进器",
          id: "stepper",
        },
        {
          title: "Search 搜索",
          id: "search",
        },
        {
          title: "DatePicker 时间选择器",
          id: "datePicker",
        },
        {
          title: "Upload 图片上传",
          id: "upload",
        },
        {
          title: "Picker 选择器",
          id: "picker",
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
      <View className="index page">
        <DemoHeader title="数据录入" icon="data-entry"></DemoHeader>
        {list.map((item) => (
          <View data-id={item.id} onClick={this.onClick} key={item.id}>
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
