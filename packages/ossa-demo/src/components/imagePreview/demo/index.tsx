import React, { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import classNames from "classnames";
import DemoBlock from "../../demoBlock";
import DemoHeader from "../../demoHeader";
import DemoTable from "../../demoTable";
import { OsImagePreview, PreviewItem } from "ossaui";
// import './index.scss'
import "./index.scss";

function getClassObject() {
  const classObject = {
    page: true,
    ["demo-image-preview"]: true,
  };
  return classObject;
}

const initialListApi = {
  title: "API",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["imagesArr", "图片链接，必选", "<Array><API-ImagesArr>", "-"],
    },
    {
      list: ["value", "预览图片位置，可选", "number", "0"],
    },
    {
      list: [
        "touchable",
        "点击图片or空白区域是否返回缩略图，可选",
        "boolean",
        "true",
      ],
    },
    {
      list: ["loop", "是否可以循环，可选", "boolean", "true"],
    },
    {
      list: ["showPagination", "展示页码，可选", "boolean", "true"],
    },
    {
      list: [
        "showBack",
        "展示后退按钮（touchable为false的时候强制为true），可选",
        "boolean",
        "true",
      ],
    },
    {
      list: ["className", "自定义类名，可选", "string", "-"],
    },
    {
      list: ["customStyle", "自定义样式，可选", "object", "-"],
    },
    {
      list: ["customHeaderStyle", "预览时Header自定义样式，可选", "object", "-"],
    },
    {
      list: ["imagesBgColor", "图片背景色，可选", "string", "2.1.0开始支持"],
    },
  ],
};

const initialimagesArrApi = {
  title: "API-ImagesArr",
  head: ["参数", "说明", "类型", "默认值"],
  data: [
    {
      list: ["img", "图片链接，必选", "string", "-"],
    },
    {
      list: ["width", "图片宽度，计算宽高比，可选", "number", "-"],
    },
    {
      list: ["height", "图片高度，计算宽高比，可选", "number ", "-"],
    },
  ],
};
const initialListEvent = {
  title: "Event",
  head: ["函数名", "说明", "参数"],
  data: [
    {
      list: [
        "onClose",
        "关闭预览时触发，必选",
        "(url,index)当前图片url，当前预览位置索引",
      ],
    },
    {
      list: [
        "onChange",
        "切换时触发",
        "(url,index)当前图片url，当前预览位置索引",
      ],
    },
  ],
};

const imagesArr1 = [
  {
    img: "https://yanxuan-item.nosdn.127.net/eece32d0e43fdc7a81bc5f71a2569607.png?imageView&quality=65&thumbnail=750x0",
    width: 750,
    height: 750,
  },
  {
    img: "https://yanxuan.nosdn.127.net/308ec58bc467f79a81d4b6885f877d87.jpg?imageView&quality=65&thumbnail=750x0",
    width: 750,
    height: 750,
  },
  {
    img: "https://yanxuan.nosdn.127.net/3e3dc7bc8d0d5cec06353c5808ccd703.jpg?imageView&quality=75&thumbnail=750x0",
    width: 750,
    height: 750,
  },
  {
    img: "https://yanxuan.nosdn.127.net/966959dccd170732edabedd3fed0106e.jpg?imageView&quality=75&thumbnail=750x0",
    width: 750,
    height: 750,
  },
  {
    img: "https://yanxuan.nosdn.127.net/ab6cde5d374b3f5399c170a31149ce25.jpg?imageView&quality=75&thumbnail=750x0",
    width: 750,
    height: 750,
  },
];
// const imagesArr = [
//   '//yanxuan.nosdn.127.net/10471967f5046ae50c8788de1fb82845.png?imageView&quality=65&thumbnail=750x0',
//   '//yanxuan.nosdn.127.net/308ec58bc467f79a81d4b6885f877d87.jpg?imageView&quality=65&thumbnail=750x0',
//   '//yanxuan.nosdn.127.net/3e3dc7bc8d0d5cec06353c5808ccd703.jpg?imageView&quality=75&thumbnail=750x0',
//   '//yanxuan.nosdn.127.net/966959dccd170732edabedd3fed0106e.jpg?imageView&quality=75&thumbnail=750x0',
//   '//yanxuan.nosdn.127.net/ab6cde5d374b3f5399c170a31149ce25.jpg?imageView&quality=75&thumbnail=750x0'
// ]
function onClick(setShow: Function) {
  setShow(true);
  // Taro.previewImage(
  //   {
  //     urls: imagesArr,
  //     current: imagesArr[0]
  //   }
  // )
}

function onClose(item: PreviewItem, setShow: Function) {
  console.log(item);
  setShow(false);
}

function onChange(item: object) {
  console.log(item);
}

const demoTitle = "imagePreview 图片预览";
export default function Index(props: Props) {
  const [listApi] = useState(initialListApi);
  const [listEvent] = useState(initialListEvent);
  const [listImages] = useState(initialimagesArrApi);
  const [show, setShow] = useState(false);
  const classObject = getClassObject(); //组件修饰

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: demoTitle,
    });
  }, []);

  return (
    <View className={classNames(classObject)}>
      <DemoHeader title={demoTitle}></DemoHeader>
      <DemoBlock title='基础'>
        <View className='image-preview--img' onClick={() => onClick(setShow)}>
          <Image
            className='img'
            src='https://yanxuan-item.nosdn.127.net/eece32d0e43fdc7a81bc5f71a2569607.png?imageView&quality=65&thumbnail=152x152'
          ></Image>
        </View>
        <OsImagePreview
          show={show}
          onClose={(item) => {
            onClose(item, setShow);
          }}
          onChange={(item) => {
            onChange(item);
          }}
          imagesArr={imagesArr1}
        ></OsImagePreview>
      </DemoBlock>
      <DemoBlock>
        <DemoTable list={listApi}></DemoTable>
      </DemoBlock>
      <DemoBlock>
        <DemoTable list={listImages}></DemoTable>
      </DemoBlock>
      <DemoBlock>
        <DemoTable list={listEvent}></DemoTable>
      </DemoBlock>
    </View>
  );
}

interface Props {}
