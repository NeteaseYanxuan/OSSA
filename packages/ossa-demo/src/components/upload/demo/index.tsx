import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsUpload } from "ossaui";
// import './index.scss'
import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo-upload"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["files", "初始图片列表，可选", "ImageFile[]", ""],
    },
    {
      list: ["max", "最大数量，可选", "number", "99"],
    },
    {
      list: ["multiple", "开始多张传输，可选，`multiple`属性在未来版本中将被删除，请使用`max`代替", "boolean", "true"],
    },
    {
      list: ["customStyle", "自定义样式，可选", "object", "-"],
    },
    {
      list: ["className", "自定义类名，可选", "string", "-"],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: [
        "onChange",
        "上传成功回调(此时可自行将图片上传至服务器)",
        "(files: FileItem[], operationType: 'add' | 'remove', index: number) => void(注：1.index在operationType为remove时有效；）",
      ],
    },
    {
      list: [
        "onImageClick",
        "图片列表点击回调",
        "(index: number, file: ImageFile) => void",
      ],
    },
    {
      list: ["onFail", "上传失败触发", "(err: TaroGeneral.CallbackResult) => void"],
    },
  ],
};

const listFile = {
  title: "API-ImageFile",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: [
        "path",
        "资源路径，可选",
        "string",
        ""
      ],
    }
  ],
}

function onChange(file, operationType, index) {
  console.log("图片文件:");
  console.log(file);
  console.log("操作类型:" + operationType);
  console.log("图片索引:" + index);
}

function onFail(data) {
  console.log("上传失败，失败信息：" + JSON.stringify(data));
}

function onClick(index, file) {
  console.log("图片文件:");
  console.log(file);
  console.log("图片索引:" + index);
}

const demoTitle = "Upload 图片上传";
export default function Index(_props: Props) {
  const [listApi] = useState(initialListApi);

  const [listEvent] = useState(initialListEvent);
  const classObject = getClassObject(); //组件修饰
  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: demoTitle,
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title={demoTitle}></DemoHeader>
      <DemoBlock title='普通' fullScreen>
        <View style={{ paddingLeft: Taro.pxTransform(20) }}>
          <OsUpload
            onChange={(file, operationType, index) =>
              onChange(file, operationType, index)
            }
            onImageClick={(index, file) => onClick(index, file)}
            onFail={(data) => onFail(data)}
          ></OsUpload>
        </View>
      </DemoBlock>
      <DemoBlock title='限制上传数量(2张)' fullScreen>
        <View style={{ paddingLeft: Taro.pxTransform(20) }}>
          <OsUpload
            max={2}
            onChange={(file, operationType, index) =>
              onChange(file, operationType, index)
            }
            onImageClick={(index, file) => onClick(index, file)}
            onFail={(data) => onFail(data)}
          ></OsUpload>
        </View>
      </DemoBlock>
      <DemoBlock title='限制上传数量(1张)' fullScreen>
        <View style={{ paddingLeft: Taro.pxTransform(20) }}>
          <OsUpload
            max={1}
            onChange={(file, operationType, index) =>
              onChange(file, operationType, index)
            }
            onImageClick={(index, file) => onClick(index, file)}
            onFail={(data) => onFail(data)}
          ></OsUpload>
        </View>
      </DemoBlock>
      <DemoBlock>
        <DemoTable list={listApi}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listFile}></DemoTable>
      </DemoBlock>

      <DemoBlock>
        <DemoTable list={listEvent}></DemoTable>
      </DemoBlock>
    </View>
  );
}

interface Props {}
