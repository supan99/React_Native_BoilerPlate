import React, {forwardRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from 'react-native';
import { getHeight, opacity, fontFamily, fontSize, getWidth } from 'src/Common/GConstants';
import { color } from '$common/GColor';

const AppTextinput = forwardRef((props: any, ref: any) => {
  return (
    <View>
      <Text
        style={{
          fontSize: fontSize(12),
          marginLeft: getWidth(17),
          marginBottom: getHeight(8),
          fontFamily: fontFamily.regular,
          color: color.inputetitle,
        }}>
        {props?.title}
      </Text>
      <View
        style={[
          {
            flexDirection: 'row',
            borderWidth: 1,
            marginHorizontal: getWidth(16),
            borderRadius: 8,
          },
          {...props?.broderstyle},
        ]}>
        <TextInput
          editable={props?.editable}
          placeholder={props?.placeholder}
          value={props?.value}
          onSubmitEditing={props?.onSubmitEditing}
          onKeyPress={props?.onKeyPress}
          keyboardType={props?.keyboardType}
          maxLength={props?.maxLength}
          ref={ref}
          placeholderTextColor={color.inputetext}
          cursorColor={color.black}
          secureTextEntry={props?.secureTextEntry}
          onChangeText={props?.onChangeText}
          autoCapitalize={props?.autoCapitalize}
          style={{
            fontFamily: fontFamily.regular,
            fontSize: fontSize(14),
            color: color.black,
            marginVertical:
              Platform.OS === 'ios' ? getHeight(15) : getHeight(2),
            marginLeft: getWidth(10),
            flex: 0.95,
          }}
        />
        <TouchableOpacity
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
          style={{
            alignSelf: 'center',
          }}
          onPress={props?.imgpress}
          activeOpacity={opacity}>
          <Image style={{...props?.imgstyle}} source={props?.images} />
        </TouchableOpacity>
      </View>
      <Text
        style={[
          {
            fontFamily: fontFamily.regular,
            fontSize: fontSize(12),
            color: color.errorcolor,
            marginLeft: getWidth(17),
            marginTop: getHeight(8),
          },
          {...props?.errormsgstyle},
        ]}>
        {props?.errormsg}
      </Text>
    </View>
  );
});

export default AppTextinput;
