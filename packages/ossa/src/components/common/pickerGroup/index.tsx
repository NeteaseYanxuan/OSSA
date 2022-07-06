import React, { Component, FC } from "react";
import { View, CustomWrapper } from "@tarojs/components";
import classNames from "classnames";
//引入组件对应的 类型文件 .d.ts
import { OsPickerGroupProps } from "../../../../types/index";

const LINE_HEIGHT = 43;
const TOP = LINE_HEIGHT * 2;
// const MASK_HEIGHT = LINE_HEIGHT * 5;

function getStyleObj(props: OsPickerGroupProps) {
  const _styleObj = {};
  return Object.assign({}, _styleObj, props.customStyle);
}

function getClassObject(props: OsPickerGroupProps) {
  const _classObject = {};
  return _classObject;
}

class PickerGroup extends Component<OsPickerGroupProps> {
  static defaultProps = {
    columnId: "0",
  };
  touchEnd: boolean = false;

  preY: number;

  startY: number;

  hadMove: boolean;

  constructor(props) {
    super(props);
  }

  getPosition() {
    const transition = this.touchEnd ? 0.3 : 0;
    const translateY = (this.props.height || 0) + "px";
    return `transform: translate3d(0, ${translateY}, 0);transition: transform ${transition}s;`;
  }

  formulaUnlimitedScroll(range, absoluteHeight, direction) {
    const { height = 0, onUpdateHeight, columnId = "0" } = this.props;
    const factor = direction === "up" ? 1 : -1;

    this.touchEnd = false;

    // 点击超过范围，点击到补帧时，先跳到另一端的补帧
    onUpdateHeight &&
      onUpdateHeight(-range * factor * LINE_HEIGHT + height, columnId);

    // 再做过渡动画
    setTimeout(() => {
      this.touchEnd = true;
      const index = Math.round(absoluteHeight / -LINE_HEIGHT) + range * factor;
      const relativeHeight = TOP - LINE_HEIGHT * index;
      onUpdateHeight && onUpdateHeight(relativeHeight, columnId, true);
    }, 0);
  }

  render() {
    const onTouchStart = (e) => {
      // 记录第一次的点击位置
      this.startY = e.changedTouches[0].clientY;
      this.preY = e.changedTouches[0].clientY;
      this.hadMove = false;
      if (this.props.onTouchStart) {
        this.props.onTouchStart(e);
      }
    };

    const onTouchMove = (e) => {
      const { columnId = "0", height = 0 } = this.props;
      const y = e.changedTouches[0].clientY;
      const deltaY = y - this.preY;
      this.preY = y;
      this.touchEnd = false;
      if (Math.abs(y - this.startY) > 10) this.hadMove = true;
      let newPos = height + deltaY;

      const hourRecycle =
        (this.props.type === "time" && this.props.columnId === "0") ||
        (this.props.type === "complete" && this.props.columnId === "3");
      const minuteRecycle =
        (this.props.type === "time" && this.props.columnId === "1") ||
        (this.props.type === "complete" && this.props.columnId === "4");
      // 处理时间选择器的无限滚动
      if (hourRecycle) {
        // 数字 28 来自于 4 格补帧 + 0 ～ 23 的 24 格，共 28 格
        if (newPos > TOP - LINE_HEIGHT * 2) {
          newPos = TOP - LINE_HEIGHT * 26 + deltaY;
        }
        if (newPos < TOP - LINE_HEIGHT * 27) {
          newPos = TOP - LINE_HEIGHT * 3 + deltaY;
        }
      } else if (minuteRecycle) {
        if (newPos > TOP - LINE_HEIGHT * 2) {
          newPos = TOP - LINE_HEIGHT * 62 + deltaY;
        }
        if (newPos < TOP - LINE_HEIGHT * 63) {
          newPos = TOP - LINE_HEIGHT * 3 + deltaY;
        }
      }

      if (this.props.onUpdateHeight)
        this.props.onUpdateHeight(newPos, columnId);
      if (this.props.onTouchMove) {
        this.props.onTouchMove(e);
      }
      e.preventDefault();
      e.stopPropagation();
    };

    const onTouchEnd = (e) => {
      const {
        type,
        range = [],
        height = 0,
        onUpdateHeight,
        onColumnChange,
        columnId = "0",
      } = this.props;
      const max = 0;
      const min = -LINE_HEIGHT * (range.length - 1);
      // const endY = e.changedTouches[0].clientY

      this.touchEnd = true;

      // touchEnd 时的高度，可能带小数点，需要再处理
      let absoluteHeight;

      if (!this.hadMove) {
        /** 点击 */
        // 屏幕高度
        // const windowHeight = window.innerHeight
        // // picker__mask 垂直方向距离屏幕顶部的高度
        // const relativeY = windowHeight - MASK_HEIGHT / 2

        // absoluteHeight = height - TOP - (endY - relativeY)

        // // 处理时间选择器的无限滚动
        // if (this.props.type === 'time') {
        //   if (this.props.columnId === '0') {
        //     // 点击上溢出
        //     // absoluteHeight 是相对模块中点来算的，所以会算多半行，这时要减去这半行，即2.5行
        //     if (absoluteHeight > -LINE_HEIGHT * 2.5) {
        //       this.formulaUnlimitedScroll(24, absoluteHeight, 'up')
        //       return
        //     }
        //     // 点击下溢出
        //     if (absoluteHeight < -LINE_HEIGHT * 28.5) {
        //       this.formulaUnlimitedScroll(24, absoluteHeight, 'down')
        //       return
        //     }
        //   } else if (this.props.columnId === '1') {
        //     // 点击上溢出
        //     if (absoluteHeight > -LINE_HEIGHT * 2.5) {
        //       this.formulaUnlimitedScroll(60, absoluteHeight, 'up')
        //       return
        //     }
        //     // 点击下溢出
        //     if (absoluteHeight < -LINE_HEIGHT * 64.5) {
        //       this.formulaUnlimitedScroll(60, absoluteHeight, 'down')
        //       return
        //     }
        //   }
        // }
        return;
      } else {
        /** 滚动 */
        absoluteHeight = height - TOP;
      }

      // 边界情况处理
      if (absoluteHeight > max) absoluteHeight = 0;
      if (absoluteHeight < min) absoluteHeight = min;

      // 先按公式算出 index, 再用此 index 算出一个整数高度
      const index = Math.round(absoluteHeight / -LINE_HEIGHT);
      const relativeHeight = TOP - LINE_HEIGHT * index;

      if (this.props.type === "date" || this.props.type === "complete") {
        if (this.props.columnId === "0") {
          this.props.onUpdateDay &&
            this.props.onUpdateDay(
              +this.props.range[index].replace(/[^0-9]/gi, ""),
              0
            );
        }
        if (this.props.columnId === "1") {
          this.props.onUpdateDay &&
            this.props.onUpdateDay(
              +this.props.range[index].replace(/[^0-9]/gi, ""),
              1
            );
        }
        if (this.props.columnId === "2") {
          this.props.onUpdateDay &&
            this.props.onUpdateDay(
              +this.props.range[index].replace(/[^0-9]/gi, ""),
              2
            );
        }
      }

      onUpdateHeight &&
        onUpdateHeight(
          relativeHeight,
          columnId,
          type === "time" || type === "date"
        );
      onColumnChange && onColumnChange(relativeHeight, columnId, e);
      if (this.props.onTouchEnd) {
        this.props.onTouchEnd(e);
      }
    };

    const rootClassName = "picker-group"; //组件
    const classObject = getClassObject(this.props); //组件修饰
    const styleObject = getStyleObj(this.props);
    const range = this.props.range || [];

    return (
      <View
        className={classNames(rootClassName, classObject, this.props.className)}
        style={styleObject}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        catchMove
      >
        <View className='picker-group__items' style={this.getPosition()}>
          {range.map((item, index) => {
            const groupOffset = this.props.height || 0;
            const offestRange = [
              LINE_HEIGHT * index + groupOffset,
              LINE_HEIGHT * (index + 1) + groupOffset,
            ];
            const currentIndexRange = [LINE_HEIGHT * 2, LINE_HEIGHT * 3];
            const isInclude = !(
              offestRange[0] >= currentIndexRange[1] ||
              offestRange[1] <= currentIndexRange[0]
            );
            return (
              <View
                className={classNames({
                  ["picker-group__item"]: true,
                  ["picker-group__item--highlight"]: isInclude,
                })}
                key={index + item}
              >
                {item}
              </View>
            );
          })}
        </View>
        <View
          className={classNames(
            "picker-group__mask",
            "picker-group__mask--top"
          )}
        ></View>
        <View
          className={classNames(
            "picker-group__mask",
            "picker-group__mask--bottom"
          )}
        ></View>
        <View className={classNames("picker-group__indicator")}></View>
      </View>
    );
  }
}

const OsPickerGroup: FC<OsPickerGroupProps> = (props) => {
  return (
    <CustomWrapper>{React.createElement(PickerGroup, props)}</CustomWrapper>
  );
};

export default OsPickerGroup;
