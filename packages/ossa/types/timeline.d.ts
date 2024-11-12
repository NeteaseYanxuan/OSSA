import { ComponentClass, ReactNode } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

interface BaseTimelineItem {
  /**
   * 标题
   */
  title: ReactNode;
  /**
   * 子项内容
   */
  content?: ReactNode[];
  /**
   * 预置的图标类型
   * @see https://ossa.miaode.com/docs/%E7%BB%84%E4%BB%B6/icon
   */
  icon?:
    | "richscan"
    | "inform"
    | "phone"
    | "search"
    | "return"
    | "share"
    | "share-circle"
    | "close"
    | "compile"
    | "delete"
    | "collect"
    | "like"
    | "upload-delete"
    | "grade"
    | "choose"
    | "record"
    | "check"
    | "check-irrevocable"
    | "arrows"
    | "search-little"
    | "detail-home"
    | "detail-cart"
    | "close-native"
    | "pull-down-big"
    | "home"
    | "subject"
    | "classify"
    | "cart"
    | "user"
    | "shopping-mall"
    | "my-group-buying"
    | "choose-disable"
    | "check-disable"
    | "add-disable"
    | "subtract-disable"
    | "arrows-disable"
    | "collect-selected"
    | "choose-selected"
    | "close-native-pressed"
    | "grade-selected"
    | "check-selected"
    | "home-pressed"
    | "subject-pressed"
    | "cart-pressed"
    | "user-pressed"
    | "return-pressed"
    | "share-pressed"
    | "close-pressed"
    | "compile-pressed"
    | "delete-pressed"
    | "like-selected"
    | "classify-pressed"
    | "share-circle-pressed"
    | "detail-home-pressed"
    | "detail-cart-pressed"
    | "my-group-buying-select"
    | "shopping-mall-select"
    | "delete-input"
    | "add"
    | "add-disable"
    | "avatar"
    | "invisible"
    | "service"
    | "visible"
    | "subtract-disable"
    | "subtract"
    | "voice"
    | "voice-close"
    | "photo"
    | "sort"
    | "sort-high"
    | "sort-low"
    | "subject"
    | "close-h5"
    | "add-photo";
  /**
   * icon 颜色
   */
  color?: "green" | "red" | "yellow";
  /**
   * 图标颜色
   * @default #7F7F7F
   */
  iconColor?: string;
}
interface TimelineProps extends OsComponent {
  /**
   * 最后一项是否为未完成态
   * @default false
   */
  pending?: boolean;
  /**
   * 需展示的内容
   */
  items: Array<BaseTimelineItem>;

  /**
   * 点击 item 触发的事件
   * @param {number} current 当前点击的 item 的索引值
   * @param {MouseEvent} event
   */
  onClick?: CommonEventFunction;
}

declare const Timeline: ComponentClass<TimelineProps>;

export { Timeline, TimelineProps };
