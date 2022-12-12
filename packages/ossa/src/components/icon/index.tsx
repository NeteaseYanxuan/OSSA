import React from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";
import { OsIconProps } from "../../../types/index";

function getStyleObj(props: OsIconProps) {
  const _styleObj = {};
  const { color, size, type } = props;

  if (color) {
    _styleObj["color"] = color;
  }

  if (size) {
    _styleObj["fontSize"] = Taro.pxTransform(size);
  }

  //set 特殊颜色，不在css写死
  if (
    type === "home" ||
    type === "subject" ||
    type === "classify" ||
    type === "cart" ||
    type === "user"
  ) {
    _styleObj["color"] = "#666";
  } else if (type === "grade" || type === "add-photo" || type === "check") {
    _styleObj["color"] = "#ccc";
  } else if (type === "collect-selected") {
    _styleObj["color"] = "#f48f18";
  } else if (type === "grade-selected") {
    _styleObj["color"] = "#fab646";
  } else if (type === "record") {
    _styleObj["color"] = "#ff8462";
  }

  return _styleObj;
}

function getClassObject(props: OsIconProps) {
  const { type } = props;

  const classObject = {
    [`ossa-icon--${type}`]: type,
  };

  return classObject;
}

function onClick(e: any, props: OsIconProps) {
  props.onClick?.(e);
}

export default function Icon(props: OsIconProps) {
  const rootClassName = "ossa-icon"; //组件
  const classObject = getClassObject(props); //组件修饰
  const styleObject = Object.assign(getStyleObj(props), props.customStyle);
  const { type, className } = props;

  return (
    <View
      className={classNames(rootClassName, classObject, className)}
      style={styleObject}
      onClick={(e) => onClick(e, props)}
    >
      {/* 复杂icon */}
      {type === "avatar" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
        </View>
      )}
      {type === "delete-input" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
        </View>
      )}
      {type === "cart" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
          <Text className='path5'></Text>
        </View>
      )}
      {type === "cart-pressed" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
          <Text className='path5'></Text>
        </View>
      )}
      {type === "check-irrevocable" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
        </View>
      )}
      {type === "check-selected" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
        </View>
      )}
      {type === "close-h5" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
        </View>
      )}
      {type === "close-native-pressed" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
          <Text className='path5'></Text>
        </View>
      )}
      {type === "close-native" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
          <Text className='path5'></Text>
        </View>
      )}

      {type === "invisible" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
          <Text className='path5'></Text>
        </View>
      )}
      {type === "like-selected" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
        </View>
      )}
      {type === "sort-high" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
        </View>
      )}
      {type === "sort-low" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
        </View>
      )}
      {type === "subject-pressed" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
        </View>
      )}
      {type === "subject" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
        </View>
      )}
      {type === "voice" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
        </View>
      )}
      {type === "voice-close" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
        </View>
      )}
      {type === "upload-delete" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
        </View>
      )}
      {type === "classify" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
        </View>
      )}
      {type === "classify-pressed" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
        </View>
      )}
      {type === "share-circle" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
          <Text className='path5'></Text>
          <Text className='path6'></Text>
        </View>
      )}
      {type === "share-circle-pressed" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
          <Text className='path5'></Text>
          <Text className='path6'></Text>
        </View>
      )}
      {type === "detail-cart-pressed" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
          <Text className='path5'></Text>
        </View>
      )}
      {type === "detail-cart" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
          <Text className='path5'></Text>
        </View>
      )}
      {type === "my-group-buying-select" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
        </View>
      )}
      {type === "shopping-mall-select" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
          <Text className='path5'></Text>
          <Text className='path6'></Text>
          <Text className='path7'></Text>
        </View>
      )}
      {type === "shopping-mall" && (
        <View>
          <Text className='path1'></Text>
          <Text className='path2'></Text>
          <Text className='path3'></Text>
          <Text className='path4'></Text>
          <Text className='path5'></Text>
          <Text className='path6'></Text>
          <Text className='path7'></Text>
        </View>
      )}
    </View>
  );
}

Icon.defaultProps = {
  type: "",
  size: 40,
};

Icon.options = {
  addGlobalClass: true,
};
