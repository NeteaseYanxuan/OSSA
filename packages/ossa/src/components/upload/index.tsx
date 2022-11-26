import React, { CSSProperties, useState } from "react";
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../icon";
//引入组件对应的 类型文件 .d.ts
import { OsUploadProps } from "../../../types/index";

function getStyleObj(props: OsUploadProps) {
  const _styleObj = {};
  return _styleObj;
}

function getClassObject(props: OsUploadProps) {
  const _classObject = {};
  return _classObject;
}

const ENV = Taro.getEnv();

function onRemoveImg(
  props: OsUploadProps,
  index: number,
  files: any,
  setFiles: Function,
  setUpload: Function
) {
  const { max = 99 } = props;
  if (ENV === Taro.ENV_TYPE.WEB) {
    window.URL.revokeObjectURL(files[index].url);
  }
  const newFiles = files.filter((file, i) => i !== index);
  setFiles(newFiles);
  if (newFiles.length >= max) {
    setUpload(false);
  } else {
    setUpload(true);
  }
  props.onChange?.(newFiles, "remove", index);
}

const initialUploads = true;

function onClick(
  props: OsUploadProps,
  files: any,
  setFiles: Function,
  setUpload: Function
) {
  const { multiple, max = 99 } = props;
  const filePathName = "tempFiles";
  const params = {};

  if (multiple) {
    params["max"] = 99;
  }
  if (max) {
    params["max"] = max;
  }

  Taro.chooseImage(params)
    .then((res) => {
      const targetFiles = res.tempFilePaths.map((path, i) => ({
        url: path,
        file: res[filePathName][i],
      }));

      setNewFiles(props, files, max, targetFiles, setFiles, setUpload);
    })
    .catch(props.onFail);
}

function setNewFiles(
  props,
  files,
  max,
  targetFiles,
  setFiles: Function,
  setUpload: Function
) {
  const newFiles = files.concat(targetFiles);
  setFiles(newFiles);
  if (newFiles.length >= max) {
    setUpload(false);
  }
  props.onChange?.(newFiles, "add", 0);
}

export default function Upload(props: OsUploadProps) {
  const rootClassName = "ossa-upload"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = Object.assign(getStyleObj(props), props.customStyle);
  const [upload, setUpload] = useState(initialUploads);
  const [files = [], setFiles] = useState(props.files);
  const _deleteIconStyle: CSSProperties = {
    position: "absolute",
    right: Taro.pxTransform(-18),
    top: Taro.pxTransform(-18),
    zIndex: 1,
  };

  return (
    <View
      className={classNames(rootClassName, classObject, props.className)}
      style={styleObject}
    >
      <View className='ossa-upload__list'>
        {files &&
          files.length > 0 &&
          files.map((item: any, index: number) => (
            <View className='ossa-upload__item' key={item.url}>
              <Image className='ossa-upload__item__img' src={item.url}></Image>
              <OsIcon
                size={36}
                type='upload-delete'
                customStyle={_deleteIconStyle}
                onClick={() =>
                  onRemoveImg(props, index, files, setFiles, setUpload)
                }
              ></OsIcon>
            </View>
          ))}
        {upload && (
          <View
            className='ossa-upload__btn'
            onClick={() => {
              onClick(props, files, setFiles, setUpload);
            }}
          >
            <OsIcon
              type='photo'
              size={48}
              color='#d8d8d8'
              customStyle={{
                margin: `${Taro.pxTransform(25)} auto ${Taro.pxTransform(8)}`,
              }}
            ></OsIcon>
            <View className='ossa-upload__input'></View>
          </View>
        )}
      </View>
    </View>
  );
}

Upload.defaultProps = {
  max: 99,
  multiple: true,
  length: 4,
  file: [],
};

Upload.options = {
  addGlobalClass: true,
};
