import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsButton } from "ossaui";
// import './index.scss'
import "./index.scss";

const initialAPI = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: [
        "type",
        "default | primary | special1 | special2，可选",
        "string",
        "default,特殊按钮用于sku",
      ],
    },
    {
      list: [
        "shape",
        "round | square，可选",
        "string",
        "square(默认有4px圆角)",
      ],
    },
    {
      list: ["icon", "icon名称，参考OsIcon，可选", "string", "-"],
    },
    {
      list: [
        "size",
        "min | small | normal | large | block，可选",
        "string",
        "normal,特殊按钮不生效",
      ],
    },
    {
      list: ["color", "文字颜色，可选", "string", "-"],
    },
    {
      list: ["bgColor", "背景色，可选", "string", "-"],
    },
    {
      list: ["bdColor", "描边色，可选", "string", "-"],
    },
    {
      list: [
        "startBgColor",
        "填充渐变开始色，可选",
        "string",
        "-（仅对primary按钮生效且与endBgColor配合使用）",
      ],
    },
    {
      list: [
        "endBgColor",
        "填充渐变结束色，可选",
        "string",
        "-（仅对primary按钮生效且与startBgColor配合使用）",
      ],
    },
    {
      list: ["isDisabled", "是否禁用，可选", "boolean", "false"],
    },
    {
      list: ["customStyle", "自定义样式，可选", "object", "-"],
    },
    {
      list: ["className", "自定义类名，可选", "string", "-"],
    },
    // ,
    // {
    //   list: ['button-custom', '自定义按钮类名', 'string', '-']
    // },
    // {
    //   list: ['button-text-custom', '自定义按钮文案类名', 'string', '-']
    // }
  ],
};
const initialEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: ["onClick", "点击时触发", "event对象"],
    },
  ],
};
function onClick(event: any) {
  console.log(event);
  console.log("你点击了线框按钮！");
}

function onClick2() {
  console.log("你点击了色块按钮!");
}

const demoTitle = "Button 按钮";
export default function Index(props: Props) {
  const [api] = useState(initialAPI);
  const [eventApi] = useState(initialEvent);

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: demoTitle,
    });
  }, []);

  return (
    <View className='demo-button'>
      <DemoHeader title={demoTitle}></DemoHeader>

      <DemoBlock title='类型' hideMb>
        <View className='button-item'>
          <OsButton
            onClick={(event) => {
              onClick(event);
            }}
            type='default'
          >
            线框按钮
          </OsButton>
        </View>
        <View className='button-item'>
          <OsButton type='primary' onClick={() => onClick2()}>
            色块按钮
          </OsButton>
        </View>
      </DemoBlock>
      <DemoBlock hideMb>
        <View className='button-item'>
          <OsButton type='special1'>特殊按钮1</OsButton>
        </View>
        <View className='button-item'>
          <OsButton type='special2'>特殊按钮2</OsButton>
        </View>
      </DemoBlock>

      <DemoBlock title='禁用态' hideMb>
        <View className='button-item'>
          <OsButton type='default' disabled>
            线框按钮
          </OsButton>
        </View>
        <View className='button-item'>
          <OsButton type='primary' disabled>
            色块按钮
          </OsButton>
        </View>
      </DemoBlock>

      <DemoBlock title='按钮形状' hideMb>
        <View className='button-item'>
          <OsButton type='default' shape='square'>
            线框默认
          </OsButton>
        </View>
        <View className='button-item'>
          <OsButton type='default' shape='round'>
            线框腰圆
          </OsButton>
        </View>
      </DemoBlock>

      <DemoBlock hideMb>
        <View className='button-item'>
          <OsButton type='primary' shape='square'>
            色块默认
          </OsButton>
        </View>
        <View className='button-item'>
          <OsButton type='primary' shape='round'>
            色块腰圆
          </OsButton>
        </View>
      </DemoBlock>

      <DemoBlock title='按钮尺寸' hideMb>
        <View className='button-item--block'>
          <OsButton size='normal'>线框normal</OsButton>
        </View>
        <View className='button-item--block'>
          <OsButton size='small'>线框small</OsButton>
        </View>
        <View className='button-item--block'>
          <OsButton size='min'>线框min</OsButton>
        </View>
      </DemoBlock>
      <DemoBlock hideMb>
        <View className='button-item--block'>
          <OsButton type='primary' size='block'>
            色块block，界面长按钮
          </OsButton>
        </View>
        <View className='button-item--block'>
          <OsButton type='primary' size='large'>
            色块large，弹框按钮
          </OsButton>
        </View>
        <View className='button-item--block'>
          <OsButton type='primary' size='normal'>
            色块normal
          </OsButton>
        </View>
        <View className='button-item--block'>
          <OsButton type='primary' size='small'>
            色块small
          </OsButton>
        </View>
        <View className='button-item--block'>
          <OsButton type='primary' size='min'>
            色块min
          </OsButton>
        </View>
      </DemoBlock>

      <DemoBlock title='带Icon' hideMb>
        <View className='button-item'>
          <OsButton type='default' icon='collect'>
            普通按钮
          </OsButton>
        </View>
        <View className='button-item'>
          <OsButton type='primary' icon='collect'>
            色块按钮
          </OsButton>
        </View>
        <View className='button-item'>
          <OsButton type='special1' icon='collect'>
            特殊按钮1
          </OsButton>
        </View>
        <View className='button-item'>
          <OsButton type='special2' icon='collect'>
            特殊按钮2
          </OsButton>
        </View>
        <View className='button-item--block'>
          <OsButton type='primary' size='block' icon='collect'>
            色块按钮
          </OsButton>
        </View>
      </DemoBlock>

      <DemoBlock title='自定义颜色' hideMb>
        <View className='button-item'>
          <OsButton type='default' color='#DD1A21'>
            自定义字体颜色
          </OsButton>
        </View>
        <View className='button-item'>
          <OsButton type='default' bdColor='#DD1A21'>
            自定义边框颜色
          </OsButton>
        </View>
        <View className='button-item'>
          <OsButton type='primary' bgColor='#DD1A21'>
            自定义背景颜色
          </OsButton>
        </View>
        <View className='button-item'>
          <OsButton
            type='primary'
            bdColor='transparent'
            startBgColor='#EB767A'
            endBgColor='#DD1A21'
          >
            自定义渐变色
          </OsButton>
        </View>
      </DemoBlock>

      {/* <DemoBlock title='自定义类名' hideMb>
        <View className='button-item button-item--group'>
          <OsButton button-custom='button-custom' type='primary'>线框按钮</OsButton>
          <OsButton button-custom='button-custom' type='primary'>线框按钮</OsButton>
        </View>
      </DemoBlock>

      <DemoBlock title='开发全局样式测试' hideMb>
        <View className='button-item button-item--group'>
          <OsButton className='test' type='primary'>线框按钮</OsButton>
          <OsButton className='test' type='primary'>线框按钮</OsButton>
        </View>
      </DemoBlock> */}

      <DemoBlock>
        <DemoTable list={api}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={eventApi}></DemoTable>
      </DemoBlock>
    </View>
  );
}

interface Props {}
