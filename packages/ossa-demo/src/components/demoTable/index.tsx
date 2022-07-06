/**
 * 组件demo的布局-api组件
 * @param {object} list 渲染数据
 * @param {string} list.title 标题
 * @param {array<string>} list.head 表头
 * @param {array<object>} list.data 列表数据
 */

import React, { Component } from "react";
import { View } from "@tarojs/components";
import classNames from "classnames";
// import './index.scss'
import "./index.scss";

export default class DemoTable extends Component<IProps> {
  render() {
    const rootClassName = [
      "table",
      "table__title",
      "table__content",
      "table__head",
      "table__head__item",
    ];
    const list = this.props.list || {};

    if (!list) {
      return null;
    }
    const { head, data, title } = list;
    const styleObj = {};
    if (head && head.length) {
      styleObj["width"] = 100 / head.length + "%";
    }
    const tdStyleObj = {};
    if (data && data.length) {
      tdStyleObj["width"] = 100 / data.length + "%";
    }

    return (
      <View className={classNames(rootClassName[0])}>
        {title && (
          <View className={classNames(rootClassName[1])}>
            {this.props.list.title}
          </View>
        )}
        <View className={classNames(rootClassName[2])}>
          {head && head.length ? (
            <View className={classNames(rootClassName[3])}>
              {head.map((item: string) => (
                <View
                  style={styleObj}
                  key={item}
                  className={classNames(rootClassName[4])}
                >
                  {item}
                </View>
              ))}
            </View>
          ) : null}
          {data && data.length ? (
            <View>
              {data.map((item: Array<string>, index) => (
                <View className='table__tr' key={index}>
                  {item["list"].map((item1: string) => (
                    <View className='table__td' key={item1} style={tdStyleObj}>
                      {item1}
                    </View>
                  ))}
                </View>
              ))}
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

interface DemoTableData {
  title: string;
  head: string[];
  data: any[];
}

interface IProps {
  list: DemoTableData;
}
