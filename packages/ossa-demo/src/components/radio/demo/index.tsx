import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsRadio, OsRadioOption } from "ossaui";
// import './index.scss'
import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo"]: true,
  };
  return classObject;
}

const initialRadioListApi = {
  title: "API-OsRadioOption",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["type", "布局类型", "column | row", "column"],
    },
    {
      list: ["value", "选中值，可选", "number | string", "-"],
    },
    {
      list: ["isDisabled", "失效状态，可选", "boolean", "false"],
    },
    {
      list: ["disabled", "失效状态，可选", "boolean", "false"],
    },
    {
      list: ["isReadonly", "不可执行，可选", "boolean", "false"],
    },
    {
      list: ["readonly", "失效状态，可选", "boolean", "false"],
    },
  ],
};

const initialRadioListEvent = {
  title: "Event-OsRadio",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onChange", "value改变时触发，可选", "value"],
    },
  ],
};

const initialListApi = {
  title: "API-OsRadioOption",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["value", "选中值，必选", "number | string", "-"],
    },
    {
      list: ["optionValue", "选项值，必选", "number | string", "-"],
    },
    {
      list: ["isDisabled", "失效状态，可选，`isDisabled`属性在未来版本中将被删除，请使用`disable`代替", "boolean", "false"],
    },
    {
      list: ["disabled", "失效状态，可选", "boolean", "false"],
    },
    {
      list: ["isCustom", "是否自定义，可选", "boolean", "false"],
    },
    {
      list: ["isReadonly", "不可执行，可选，`isReadonly`属性在未来版本中将被删除，请使用`readonly`代替", "boolean", "false"],
    },
    {
      list: ["readonly", "失效状态，可选", "boolean", "false"],
    },
  ],
};
const initialListEvent = {
  title: "Event-OsRadioOption",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onClick", "点击时触发，必选", "value"],
    },
  ],
};

export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);
  const [listEvent] = useState(initialListEvent);
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [v3, setV3] = useState(0);
  const [v4, setV4] = useState(0);
  const [v5, setV5] = useState(0);
  const [v6, setV6] = useState(0);
  const [v7, setV7] = useState(0);
  const [v8, setV8] = useState(0);

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: "Radio 单选框",
    });
  }, []);

  const classObject = getClassObject(); //组件修饰
  return (
    <View className={classNames(classObject)}>
      <DemoHeader title='Radio 单选框'></DemoHeader>
      <DemoBlock title='基础' subTitle='普通' fullScreen>
        <OsRadio>
          <OsRadioOption value={v1} optionValue={0} onClick={setV1}>
            选项A
          </OsRadioOption>
          <OsRadioOption value={v1} optionValue={1} onClick={setV1}>
            选项B
          </OsRadioOption>
        </OsRadio>
      </DemoBlock>

      <DemoBlock subTitle='选项内容自定义' fullScreen>
        <OsRadio>
          <OsRadioOption value={v2} optionValue={0} onClick={setV2} isCustom>
            <View className='custom-option'>
              <Image
                className='custom-option__img'
                src='https://yanxuan-item.nosdn.127.net/8aafd2aa11a023d69ec1dfbc062b28c7.png?quality=95&thumbnail=245x245&imageView'
              />
              <View className='custom-option__content'>
                <View className='custom-option__title'>西装</View>
                <View className='custom-option__sub-title'>
                  帅气的办公室吸睛装扮
                </View>
                <View className='custom-option__price'>&yen;299</View>
              </View>
            </View>
          </OsRadioOption>
          <OsRadioOption value={v2} optionValue={1} onClick={setV2} isCustom>
            <View className='custom-option'>
              <Image
                className='custom-option__img'
                src='https://yanxuan.nosdn.127.net/b3dec0eb768d27301afab1b4a43f30cb.png?quality=95&thumbnail=172x172&imageView'
              />
              <View className='custom-option__content'>
                <View className='custom-option__title'>
                  网易智造四季全屋循环扇
                </View>
                <View className='custom-option__sub-title'>
                  源自日本，全屋空气对流循环
                </View>
                <View className='custom-option__price'>&yen;248.1</View>
              </View>
            </View>
          </OsRadioOption>
        </OsRadio>
      </DemoBlock>

      <DemoBlock title='禁用' subTitle='普通' fullScreen>
        <OsRadio>
          <OsRadioOption value={v3} optionValue={0} onClick={setV3} disabled>
            选项A
          </OsRadioOption>
          <OsRadioOption value={v3} optionValue={1} onClick={setV3} disabled>
            选项B
          </OsRadioOption>
        </OsRadio>
      </DemoBlock>

      <DemoBlock subTitle='选项内容自定义' fullScreen>
        <OsRadio>
          <OsRadioOption
            value={v4}
            optionValue={0}
            onClick={setV4}
            disabled
            isCustom
          >
            <View className='custom-option'>
              <Image
                className='custom-option__img'
                src='https://yanxuan-item.nosdn.127.net/8aafd2aa11a023d69ec1dfbc062b28c7.png?quality=95&thumbnail=245x245&imageView'
              />
              <View className='custom-option__content'>
                <View className='custom-option__title'>西装</View>
                <View className='custom-option__sub-title'>
                  帅气的办公室吸睛装扮
                </View>
                <View className='custom-option__price'>&yen;299</View>
              </View>
            </View>
          </OsRadioOption>
          <OsRadioOption
            value={v4}
            optionValue={1}
            onClick={setV4}
            disabled
            isCustom
          >
            <View className='custom-option'>
              <Image
                className='custom-option__img'
                src='https://yanxuan.nosdn.127.net/b3dec0eb768d27301afab1b4a43f30cb.png?quality=95&thumbnail=172x172&imageView'
              />
              <View className='custom-option__content'>
                <View className='custom-option__title'>
                  网易智造四季全屋循环扇
                </View>
                <View className='custom-option__sub-title'>
                  源自日本，全屋空气对流循环
                </View>
                <View className='custom-option__price'>&yen;248.1</View>
              </View>
            </View>
          </OsRadioOption>
        </OsRadio>
      </DemoBlock>

      <DemoBlock title='不可执行' subTitle='普通' fullScreen>
        <OsRadio>
          <OsRadioOption value={v5} optionValue={0} onClick={setV5} readonly>
            选项A
          </OsRadioOption>
          <OsRadioOption value={v5} optionValue={1} onClick={setV5} readonly>
            选项B
          </OsRadioOption>
        </OsRadio>
      </DemoBlock>

      <DemoBlock subTitle='选项内容自定义' fullScreen>
        <OsRadio>
          <OsRadioOption
            value={v6}
            optionValue={0}
            onClick={setV6}
            readonly
            isCustom
          >
            <View className='custom-option'>
              <Image
                className='custom-option__img'
                src='https://yanxuan-item.nosdn.127.net/8aafd2aa11a023d69ec1dfbc062b28c7.png?quality=95&thumbnail=245x245&imageView'
              />
              <View className='custom-option__content'>
                <View className='custom-option__title'>西装</View>
                <View className='custom-option__sub-title'>
                  帅气的办公室吸睛装扮
                </View>
                <View className='custom-option__price'>&yen;299</View>
              </View>
            </View>
          </OsRadioOption>
          <OsRadioOption
            value={v6}
            optionValue={1}
            onClick={setV6}
            readonly
            isCustom
          >
            <View className='custom-option'>
              <Image
                className='custom-option__img'
                src='https://yanxuan.nosdn.127.net/b3dec0eb768d27301afab1b4a43f30cb.png?quality=95&thumbnail=172x172&imageView'
              />
              <View className='custom-option__content'>
                <View className='custom-option__title'>
                  网易智造四季全屋循环扇
                </View>
                <View className='custom-option__sub-title'>
                  源自日本，全屋空气对流循环
                </View>
                <View className='custom-option__price'>&yen;248.1</View>
              </View>
            </View>
          </OsRadioOption>
        </OsRadio>
      </DemoBlock>

      <DemoBlock title='横向布局' fullScreen>
        <OsRadio type='row'>
          <OsRadioOption value={v7} optionValue={0} onClick={setV7} type='row'>
            选项A
          </OsRadioOption>
          <OsRadioOption value={v7} optionValue={1} onClick={setV7} type='row'>
            选项B
          </OsRadioOption>
        </OsRadio>
      </DemoBlock>

      <DemoBlock title='RadioGroup控制value' fullScreen>
        <OsRadio type='row' value={v8} onChange={setV8}>
          <OsRadioOption optionValue={0} type='row'>
            选项A
          </OsRadioOption>
          <OsRadioOption optionValue={1} type='row'>
            选项B
          </OsRadioOption>
        </OsRadio>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={initialRadioListApi}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={initialRadioListEvent}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listApi}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listEvent}></DemoTable>
      </DemoBlock>
    </View>
  );
}

interface Props {}
