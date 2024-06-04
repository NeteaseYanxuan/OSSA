import React, { CSSProperties, useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import classNames from "classnames";
import OsIcon from "../icon";
//引入组件对应的 类型文件 .d.ts
import { OsUploadProps } from "../../../types/index";
import { ImageFile } from "../../../types/upload";
import { warnDeprecatedProp } from "../../utils";

function getStyleObj(props: OsUploadProps): CSSProperties {
  const _styleObj: CSSProperties = {};
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
  files: ImageFile[],
  setFiles: Function,
) {
  if (ENV === Taro.ENV_TYPE.WEB) {
    window.URL.revokeObjectURL(files[index].path);
  }
  const newFiles = files.filter((file, i) => i !== index);
  setFiles(newFiles);
  props.onChange?.(newFiles, "remove", index);
}

const initialUploads = true;

function onClick(
  props: OsUploadProps,
  files: ImageFile[],
  setFiles: Function,
) {
  const { multiple, max = 99 } = props;

  const params = {};

  if (multiple) {
    warnDeprecatedProp('Upload', 'max', 'multiple');
    params["count"] = 99;
  }
  if (max) {
    params["count"] = max;
  }

  Taro.chooseImage(params)
    .then((res) => {
      const targetFiles = res.tempFiles

      setNewFiles(props, files, max, targetFiles, setFiles);
    })
    .catch(props.onFail);
}

function setNewFiles(
  props: OsUploadProps,
  files: ImageFile[],
  max: number,
  targetFiles: ImageFile[],
  setFiles: Function,
) {
  const newFiles = [...files, ...targetFiles];
  setFiles(newFiles);
  props.onChange?.(newFiles.slice(0, max), "add", 0);
}

function onImageClick(props: OsUploadProps, index: number, file: ImageFile) {
  props.onImageClick?.(index, file)
}

export default function Upload(props: OsUploadProps) {
  const { max = 99 } = props;
  const rootClassName = "ossa-upload"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = Object.assign(getStyleObj(props), props.customStyle);
  const [upload, setUpload] = useState(initialUploads);
  const [files = [], setFiles] = useState(props.files);

  useEffect(() => {
    setUpload(files.length < max);
  }, [files, max])

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
          files.map((item: ImageFile, index: number) => (
            <View className='ossa-upload__item' key={item.path}>
              <Image className='ossa-upload__item__img' src={item.path} onClick={() => onImageClick(props, index, item)}></Image>
              <OsIcon
                size={36}
                type='upload-delete'
                customStyle={_deleteIconStyle}
                onClick={() =>
                  onRemoveImg(props, index, files, setFiles)
                }
              ></OsIcon>
            </View>
          ))}
        {upload && (
          <View
            className='ossa-upload__btn'
            onClick={() => {
              onClick(props, files, setFiles);
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
