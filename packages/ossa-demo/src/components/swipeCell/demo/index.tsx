import { View } from "@tarojs/components";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsSwipeCell, OsList } from "ossaui";
import "./index.scss"

export default function Index() {
  const initialListApi = {
    title: "API",
    head: ["参数", "说明", "类型", "默认值"],
    data: [
      {
        list: ["right", "右侧滑动区域的内容，可选", "React.ReactNode", "-"],
      },
      {
        list: ["disabled", "禁止滑动，可选", "boolean", "false"],
      },
    ],
  };
  
  return (
    <View>
      <DemoHeader title='滑动单元格'></DemoHeader>
      <DemoBlock title='基础用法'>
        <OsSwipeCell
          right={<View className='right'>删除</View>}
        >
          <OsList title='我是标题'></OsList>
        </OsSwipeCell>
      </DemoBlock>
      <DemoBlock title='禁用'>
        <OsSwipeCell
          right={<View className='right'>删除</View>}
          disabled
        >
          <OsList title='我是标题'></OsList>
        </OsSwipeCell>
      </DemoBlock>
      <DemoBlock>
        <DemoTable list={initialListApi}></DemoTable>
      </DemoBlock>
    </View>
  );
}
