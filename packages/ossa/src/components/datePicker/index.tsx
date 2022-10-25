import React, { Component, ReactChild } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import { ITouchEvent } from "@tarojs/components/types/common";
//引入组件对应的 类型文件 .d.ts
import { OsDatePickerProps } from "../../../types/index";
import { PICKER_ITEM_HEIGHT as LINE_HEIGHT } from "../common/constant";
import OsPickerPopup from "../common/pickerPopup";
import OsPickerGroup from "../common/pickerGroup";
import * as dateHandle from "./date";

const TOP = LINE_HEIGHT * 2;

export default class DatePicker extends Component<OsDatePickerProps, any> {
  static defaultProps = {
    type: "selector",
    fields: "day",
  };

  // [2019, 8, 1, 18, 00]
  val: number[] = [];

  pickerDate: DatePickerData;

  touching: boolean;

  constructor(props) {
    super(props);
    this.handlePrpos();
    this.state = {
      popupShow: false,
      height: [],
    };
  }

  getStyleObj(props: OsDatePickerProps) {
    const _styleObj = {};
    return _styleObj;
  }

  getClassObject(props: OsDatePickerProps) {
    const _classObject = {};
    return _classObject;
  }

  showPicker() {
    if (this.props.disabled) return;
    const height = this.val.map((i, idx) => {
      let factor;
      if (this.props.type === "time") {
        factor = LINE_HEIGHT * 3;
      } else if (this.props.type === "date") {
        factor = 0;
        return TOP - LINE_HEIGHT * this.getDateArrIndex(i, idx) - factor;
      } else if (this.props.type === "complete") {
        if (idx <= 2) {
          factor = 0;
          return (
            TOP - LINE_HEIGHT * this.getCompleteDateArrIndex(i, idx) - factor
          );
        } else {
          factor = LINE_HEIGHT * 3;
          return TOP - LINE_HEIGHT * i - factor;
        }
      }

      return TOP - LINE_HEIGHT * i - factor;
    });
    this.setState({
      height,
      popupShow: true,
    });
  }

  // 点击确定
  onConfirm = (e: ITouchEvent) => {
    this.hidePicker();
    // 除了 multiSeclector，都在点击确认时才改变记录的下标值
    const indexArr = this.state.height.map((h) => (TOP - h) / LINE_HEIGHT);

    // value格式取决于type和fields
    // time: 00:00
    // date: 1970-1-1 or 1970-1 or 1970
    // complete: 1970-1-1 00:00
    const eventObj = this.getEventObj(e, "change", {
      value: "",
    });

    if (this.props.type === "time") {
      const rangeWithoutSuffix = [this.getHourRange(), this.getMinuteRange()];

      this.val = indexArr.map((n, i) => +rangeWithoutSuffix[i][n]);
      eventObj.detail.value = this.val.join(":");
    }

    if (this.props.type === "date") {
      this.val = indexArr.map((n, i) => this.getDateArrIndex(n, i, true));
      let tempValue;
      if (this.props.fields === "year") {
        tempValue = [this.val[0]];
      } else if (this.props.fields === "month") {
        tempValue = [this.val[0], this.val[1]];
      } else {
        tempValue = this.val;
      }
      eventObj.detail.value = tempValue.join("-");
    }

    if (this.props.type === "complete") {
      this.val = indexArr.map((n, i) => {
        return this.getCompleteDateArrIndex(n, i, true);
      });
      eventObj.detail.value = `${this.val[0]}-${this.val[1]}-${this.val[2]} ${this.val[3]}:${this.val[4]}`;
    }

    this.props.onConfirm && this.props.onConfirm(eventObj);
  };

  // 点击取消或蒙层
  onCancel = (e: ITouchEvent) => {
    this.hidePicker();
    this.props.onCancel && this.props.onCancel();
  };

  // 统一抛出的事件对象，和小程序对齐
  getEventObj(e: ITouchEvent, type: string, detail: any) {
    Object.defineProperties(e, {
      detail: {
        value: detail,
        enumerable: true,
      },
      type: {
        value: type,
        enumerable: true,
      },
    });
    return e;
  }

  reviseTime() {
    let { start = "", end = "" } = this.props;

    if (!this.verifyTime(start)) start = "00:00";
    if (!this.verifyTime(end)) end = "23:59";
    if (!dateHandle.compareTime(start, end)) return;

    let time = this.state.height.map((h) => (TOP - h) / LINE_HEIGHT);
    const range = [this.getHourRange(), this.getMinuteRange()];
    time = time.map((n, i) => range[i][n]).join(":");
    let height;
    if (!dateHandle.compareTime(start, time)) {
      // 修正到 start
      height = start.split(":").map((i) => TOP - LINE_HEIGHT * (+i + 4));
      this.setState({ height });
    } else if (!dateHandle.compareTime(time, end)) {
      // 修正到 end
      height = end.split(":").map((i) => TOP - LINE_HEIGHT * (+i + 4));
      this.setState({ height });
    }
  }

  // 供 PickerGroup 修改对应的 height 值
  onUpdateHeight(height, columnId, needRevise = false) {
    this.setState(
      (prevState) => {
        prevState.height[columnId] = height;
        return { height: prevState.height };
      },
      () => {
        // time picker 必须在规定时间范围内，因此需要在 touchEnd 做修正
        if (needRevise) {
          if (this.props.type === "time") {
            this.reviseTime();
          }
        }
      }
    );
  }

  onUpdateDay(value, fields) {
    this.pickerDate._updateValue[fields] = value;
  }

  renderDateSelector() {
    const pickerDate = this.pickerDate;
    if (!pickerDate) {
      return null;
    }

    const year = this.getDateRange(
      pickerDate._start.getFullYear(),
      pickerDate._end.getFullYear(),
      "年"
    );
    const month = this.getMonthRange("月");
    const day = this.getDayRange("日");
    let renderView: ReactChild | null;
    const { fields } = this.props;

    const { height } = this.state;

    if (fields === "year") {
      renderView = (
        <View className='ossa-group-container'>
          <OsPickerGroup
            type='date'
            customStyle={{
              width: Taro.pxTransform(750),
            }}
            range={year}
            height={height[0]}
            onUpdateDay={(...arg) => this.onUpdateDay(...arg)}
            onUpdateHeight={(...arg) => this.onUpdateHeight(...arg)}
            columnId='0'
            onTouchStart={() => (this.touching = true)}
            onTouchEnd={() => (this.touching = false)}
          />
        </View>
      );
    } else if (fields === "month") {
      if (height[1] < TOP - (month.length - 1) * LINE_HEIGHT) {
        setTimeout(() => {
          this.onUpdateHeight(TOP - (month.length - 1) * LINE_HEIGHT, 1);
        });
      }

      if (height[1] > TOP) {
        setTimeout(() => {
          this.onUpdateHeight(TOP, 1);
        });
      }
      renderView = (
        <View className='ossa-group-container'>
          <OsPickerGroup
            type='date'
            customStyle={{
              width: Taro.pxTransform(750 / 2),
            }}
            range={year}
            height={height[0]}
            onUpdateDay={(...arg) => this.onUpdateDay(...arg)}
            onUpdateHeight={(...arg) => this.onUpdateHeight(...arg)}
            columnId='0'
            onTouchStart={() => (this.touching = true)}
            onTouchEnd={() => (this.touching = false)}
          />
          <OsPickerGroup
            type='date'
            customStyle={{
              width: Taro.pxTransform(750 / 2),
            }}
            range={month}
            height={height[1]}
            onUpdateDay={(...arg) => this.onUpdateDay(...arg)}
            onUpdateHeight={(...arg) => this.onUpdateHeight(...arg)}
            columnId='1'
            onTouchStart={() => (this.touching = true)}
            onTouchEnd={() => (this.touching = false)}
          />
        </View>
      );
    } else if (fields === "day") {
      if (!this.touching) {
        if (height[1] < TOP - (month.length - 1) * LINE_HEIGHT) {
          setTimeout(() => {
            this.onUpdateHeight(TOP - (month.length - 1) * LINE_HEIGHT, 1);
          });
        }

        if (height[1] > TOP) {
          setTimeout(() => {
            this.onUpdateHeight(TOP, 1);
          });
        }

        if (height[2] < TOP - (day.length - 1) * LINE_HEIGHT) {
          setTimeout(() => {
            this.onUpdateHeight(TOP - (day.length - 1) * LINE_HEIGHT, 2);
          });
        }

        if (height[2] > TOP) {
          setTimeout(() => {
            this.onUpdateHeight(TOP, 2);
          });
        }
      }
      renderView = (
        <View className='ossa-group-container'>
          <OsPickerGroup
            type='date'
            customStyle={{
              width: Taro.pxTransform(750 / 3),
            }}
            range={year}
            height={height[0]}
            onUpdateDay={(...arg) => this.onUpdateDay(...arg)}
            onUpdateHeight={(...arg) => this.onUpdateHeight(...arg)}
            columnId='0'
            onTouchStart={() => (this.touching = true)}
            onTouchEnd={() => (this.touching = false)}
          />
          <OsPickerGroup
            type='date'
            customStyle={{
              width: Taro.pxTransform(750 / 3),
            }}
            range={month}
            height={height[1]}
            onUpdateDay={(...arg) => this.onUpdateDay(...arg)}
            onUpdateHeight={(...arg) => this.onUpdateHeight(...arg)}
            columnId='1'
            onTouchStart={() => (this.touching = true)}
            onTouchEnd={() => (this.touching = false)}
          />
          <OsPickerGroup
            type='date'
            customStyle={{
              width: Taro.pxTransform(750 / 3),
            }}
            range={day}
            height={height[2]}
            onUpdateDay={(...arg) => this.onUpdateDay(...arg)}
            onUpdateHeight={(...arg) => this.onUpdateHeight(...arg)}
            columnId='2'
            onTouchStart={() => (this.touching = true)}
            onTouchEnd={() => (this.touching = false)}
          />
        </View>
      );
    } else {
      renderView = null;
    }
    return renderView;
  }

  renderTimeSelector() {
    const hourRange = this.getHourRange("时");
    const minRange = this.getMinuteRange("分");
    const { height } = this.state;
    return (
      <View className='ossa-group-container'>
        <OsPickerGroup
          type='time'
          range={hourRange}
          height={height[0]}
          onUpdateHeight={(...arg) => this.onUpdateHeight(...arg)}
          columnId='0'
          customStyle={{
            width: Taro.pxTransform(750 / 2),
          }}
          onTouchStart={() => (this.touching = true)}
          onTouchEnd={() => (this.touching = false)}
        />
      
        <OsPickerGroup
          type='time'
          range={minRange}
          height={height[1]}
          onUpdateHeight={(...arg) => this.onUpdateHeight(...arg)}
          columnId='1'
          customStyle={{
            width: Taro.pxTransform(750 / 2),
          }}
          onTouchStart={() => (this.touching = true)}
          onTouchEnd={() => (this.touching = false)}
        />
      </View>
    );
  }

  renderCompleteDateSelector() {
    const pickerDate = this.pickerDate;
    if (!pickerDate) {
      return null;
    }
    const { height } = this.state;
    const year = this.getDateRange(
      pickerDate._start.getFullYear(),
      pickerDate._end.getFullYear(),
      "年"
    );
    const month = this.getMonthRange("月");
    const day = this.getDayRange("日");
    const hourRange = this.getHourRange("时");
    const minRange = this.getMinuteRange("分");

    if (!this.touching) {
      if (height[1] < TOP - (month.length - 1) * LINE_HEIGHT) {
        setTimeout(() => {
          this.onUpdateHeight(TOP - (month.length - 1) * LINE_HEIGHT, 1);
        });
      }

      if (height[1] > TOP) {
        setTimeout(() => {
          this.onUpdateHeight(TOP, 1);
        });
      }

      if (height[2] < TOP - (day.length - 1) * LINE_HEIGHT) {
        setTimeout(() => {
          this.onUpdateHeight(TOP - (day.length - 1) * LINE_HEIGHT, 2);
        });
      }

      if (height[2] > TOP) {
        setTimeout(() => {
          this.onUpdateHeight(TOP, 2);
        });
      }
    }
    return (
      <View className='ossa-group-container'>
        <OsPickerGroup
          type='complete'
          customStyle={{
            width: Taro.pxTransform((750 * 3) / 11),
          }}
          range={year}
          height={height[0]}
          onUpdateDay={(...arg) => this.onUpdateDay(...arg)}
          onUpdateHeight={(...arg) => this.onUpdateHeight(...arg)}
          columnId='0'
          onTouchStart={() => (this.touching = true)}
          onTouchEnd={() => (this.touching = false)}
        />
        <OsPickerGroup
          type='complete'
          customStyle={{
            width: Taro.pxTransform((750 * 2) / 11),
          }}
          range={month}
          height={height[1]}
          onUpdateDay={(...arg) => this.onUpdateDay(...arg)}
          onUpdateHeight={(...arg) => this.onUpdateHeight(...arg)}
          columnId='1'
          onTouchStart={() => (this.touching = true)}
          onTouchEnd={() => (this.touching = false)}
        />
        <OsPickerGroup
          type='complete'
          customStyle={{
            width: Taro.pxTransform((750 * 2) / 11),
          }}
          range={day}
          height={height[2]}
          onUpdateDay={(...arg) => this.onUpdateDay(...arg)}
          onUpdateHeight={(...arg) => this.onUpdateHeight(...arg)}
          columnId='2'
          onTouchStart={() => (this.touching = true)}
          onTouchEnd={() => (this.touching = false)}
        />
        <OsPickerGroup
          type='complete'
          customStyle={{
            width: Taro.pxTransform((750 * 2) / 11),
          }}
          range={hourRange}
          height={height[3]}
          onUpdateDay={(...arg) => this.onUpdateDay(...arg)}
          onUpdateHeight={(...arg) => this.onUpdateHeight(...arg)}
          columnId='3'
          onTouchStart={() => (this.touching = true)}
          onTouchEnd={() => (this.touching = false)}
        />
        <OsPickerGroup
          type='complete'
          customStyle={{
            width: Taro.pxTransform((750 * 2) / 11),
          }}
          range={minRange}
          height={height[4]}
          onUpdateDay={(...arg) => this.onUpdateDay(...arg)}
          onUpdateHeight={(...arg) => this.onUpdateHeight(...arg)}
          columnId='4'
          onTouchStart={() => (this.touching = true)}
          onTouchEnd={() => (this.touching = false)}
        />
      </View>
    );
  }

  handlePrpos(nextProps = this.props) {
    let { value, type } = nextProps;

    if (type === "time") {
      // check value...
      if (!this.verifyTime(value)) {
        console.warn("time picker value illegal");
        value = "0:0";
      }
      this.val = value.split(":").map((n) => +n);
    } else if (type === "date") {
      const { start = "", end = "" } = nextProps;
      let _value = dateHandle.verifyDate(value);
      let _start = dateHandle.verifyDate(start);
      let _end = dateHandle.verifyDate(end);

      if (!_value) _value = new Date(new Date().setHours(0, 0, 0, 0)); // 没传值或值的合法性错误默认今天时间
      if (!_start) _start = new Date("1970/01/01");
      if (!_end) _end = new Date("2999/01/01");

      // 时间区间有效性
      if (
        _value.getTime() >= _start.getTime() &&
        _value.getTime() <= _end.getTime()
      ) {
        this.val = [
          _value.getFullYear(),
          _value.getMonth() + 1,
          _value.getDate(),
        ];
        if (
          !this.pickerDate ||
          this.pickerDate._value.getTime() !== _value.getTime() ||
          this.pickerDate._start.getTime() !== _start.getTime() ||
          this.pickerDate._end.getTime() !== _end.getTime()
        ) {
          this.pickerDate = {
            _value,
            _start,
            _end,
            _updateValue: [
              _value.getFullYear(),
              _value.getMonth() + 1,
              _value.getDate(),
            ],
          };
        }
      } else {
        throw new Error("Date Interval Error");
      }
    } else if (type === "complete") {
      const { start = "", end = "" } = nextProps;

      let _value = dateHandle.verifyDate(value);
      let _start = dateHandle.verifyDate(start);
      let _end = dateHandle.verifyDate(end);

      if (!_value) _value = new Date(new Date().setSeconds(0, 0)); // 没传值或值的合法性错误默认今天时间
      if (!_start) _start = new Date("1970/01/01");
      if (!_end) _end = new Date("2999/01/01");

      if (
        _value.getTime() >= _start.getTime() &&
        _value.getTime() <= _end.getTime()
      ) {
        this.val = [
          _value.getFullYear(),
          _value.getMonth() + 1,
          _value.getDate(),
          _value.getHours(),
          _value.getMinutes(),
        ];
        if (
          !this.pickerDate ||
          this.pickerDate._value.getTime() !== _value.getTime() ||
          this.pickerDate._start.getTime() !== _start.getTime() ||
          this.pickerDate._end.getTime() !== _end.getTime()
        ) {
          this.pickerDate = {
            _value,
            _start,
            _end,
            _updateValue: [
              _value.getFullYear(),
              _value.getMonth() + 1,
              _value.getDate(),
              _value.getHours(),
              _value.getMinutes(),
            ],
          };
        }
      } else {
        throw new Error("Date Interval Error");
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.handlePrpos(nextProps);
  }

  // 校验传入的 value 是否合法
  verifyValue(value, range) {
    if (value >= 0 && value < range.length) return true;
    return false;
  }

  // 检验传入的 time value 是否合法
  verifyTime(value) {
    if (!/^\d{1,2}:\d{1,2}$/.test(value)) return false;

    const time = value.split(":").map((num) => +num);

    if (time[0] < 0 || time[0] > 23) return false;
    if (time[1] < 0 || time[1] > 59) return false;

    return true;
  }

  getMonthRange(fields = ""): string[] {
    let _start = 1;
    let _end = 12;
    if (
      this.pickerDate._start.getFullYear() ===
      this.pickerDate._end.getFullYear()
    ) {
      _start = this.pickerDate._start.getMonth() + 1;
      _end = this.pickerDate._end.getMonth() + 1;
    } else if (
      this.pickerDate._start.getFullYear() === this.pickerDate._updateValue[0]
    ) {
      _start = this.pickerDate._start.getMonth() + 1;
      _end = 12;
    } else if (
      this.pickerDate._end.getFullYear() === this.pickerDate._updateValue[0]
    ) {
      _start = 1;
      _end = this.pickerDate._end.getMonth() + 1;
    }
    return this.getDateRange(_start, _end, fields);
  }

  getDayRange(fields = "") {
    let _start = 1;
    let _end = dateHandle.getMaxDay(
      this.pickerDate._updateValue[0],
      this.pickerDate._updateValue[1]
    );
    if (
      this.pickerDate._start.getFullYear() ===
        this.pickerDate._updateValue[0] &&
      this.pickerDate._start.getMonth() + 1 === this.pickerDate._updateValue[1]
    ) {
      _start = this.pickerDate._start.getDate();
    }
    if (
      this.pickerDate._end.getFullYear() === this.pickerDate._updateValue[0] &&
      this.pickerDate._end.getMonth() + 1 === this.pickerDate._updateValue[1]
    ) {
      _end = this.pickerDate._end.getDate();
    }
    return this.getDateRange(_start, _end, fields);
  }

  getHourRange(fields = "") {
    return [
      "21" + fields,
      "22" + fields,
      "23" + fields,
      ...dateHandle.getTimeRange(0, 23, fields),
      "00" + fields,
      "01" + fields,
      "02" + fields,
    ];
  }

  getMinuteRange(fields = "") {
    return [
      `57${fields}`,
      `58${fields}`,
      `59${fields}`,
      ...dateHandle.getTimeRange(0, 59, fields),
      `00${fields}`,
      `01${fields}`,
      `02${fields}`,
    ];
  }

  // 获取年月日下标或者下标对应的数
  getDateArrIndex(value, fields, getIdx = false): number {
    const year = this.getDateRange(
      this.pickerDate._start.getFullYear(),
      this.pickerDate._end.getFullYear()
    );
    const month = this.getMonthRange();
    const day = this.getDayRange();

    if (getIdx) {
      if (fields === 0) {
        return +year[value];
      } else if (fields === 1) {
        return +month[value];
      } else {
        return +day[value];
      }
    } else {
      if (fields === 0) {
        return year.indexOf(value + "");
      } else if (fields === 1) {
        return month.indexOf(value + "");
      } else {
        return day.indexOf(value + "");
      }
    }
  }

  getCompleteDateArrIndex(value, fields, getVal = false) {
    const year = this.getDateRange(
      this.pickerDate._start.getFullYear(),
      this.pickerDate._end.getFullYear()
    );
    const month = this.getMonthRange();
    const day = this.getDayRange();
    const hour = this.getHourRange();
    const minute = this.getMinuteRange();

    if (getVal) {
      if (fields === 0) {
        return +year[value];
      } else if (fields === 1) {
        return +month[value];
      } else if (fields === 2) {
        return +day[value];
      } else if (fields === 3) {
        return +hour[value];
      } else {
        return +minute[value];
      }
    } else {
      if (fields === 0) {
        return year.indexOf(value + "");
      } else if (fields === 1) {
        return month.indexOf(value + "");
      } else if (fields === 2) {
        return day.indexOf(value + "");
      } else if (fields === 3) {
        return hour.indexOf(value + "时");
      } else {
        return minute.indexOf(value + "分");
      }
    }
  }

  // 获取时间数组
  getDateRange(begin, end, fields = ""): string[] {
    const range: string[] = [];
    for (let i = begin; i <= end; i++) {
      range.push(`${i}${fields}`);
    }

    return range;
  }

  // 隐藏 picker
  hidePicker() {
    this.setState({
      popupShow: false,
    });
  }

  componentWillUnmount() {
    this.val = [];
  }

  static options = {
    addGlobalClass: true,
  };

  render() {
    const rootClassName = "ossa-date-picker"; //组件
    const classObject = this.getClassObject(this.props); //组件修饰
    const styleObject = Object.assign(
      this.getStyleObj(this.props),
      this.props.customStyle
    );
    const { popupShow } = this.state;
    const { type } = this.props;

    let pickerGroups: ReactChild | null;
    if (type === "time") {
      pickerGroups = this.renderTimeSelector();
    } else if (type === "date") {
      pickerGroups = this.renderDateSelector();
    } else if (type === "complete") {
      pickerGroups = this.renderCompleteDateSelector();
    } else {
      pickerGroups = null;
    }
    return (
      <View
        className={classNames(rootClassName, classObject, this.props.className)}
        style={styleObject}
      >
        <View
          className='ossa-date-picker__trigger'
          onClick={() => this.showPicker()}
        >
          {this.props.children}
        </View>
        <OsPickerPopup
          isShow={popupShow}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        >
          {pickerGroups}
        </OsPickerPopup>
      </View>
    );
  }
}

interface DatePickerData {
  _value: Date;
  _start: Date;
  _end: Date;
  _updateValue: number[];
}
