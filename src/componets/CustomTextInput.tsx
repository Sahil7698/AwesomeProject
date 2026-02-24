import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { Color } from '../assets/styles/colors';
import useCustomWindowDimensions from '../hooks/useCustomWindowDimensions';
import { RFValue } from 'react-native-responsive-fontsize';

interface TextInputType {
  title?: string;
  rightButtonComponent?: React.ReactNode;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
  textInputStyle?: ViewStyle;
  ref?: any;
}

const CustomTextInput = (props: TextInputType & TextInputProps) => {
  const styles = useStyle();
  const handleTextSubmit = () => {
    Keyboard.dismiss();
  };
  return (
    <View>
      <Text style={[styles.titleText, props?.textStyle]}>{props?.title}</Text>
      <TouchableOpacity
        activeOpacity={1}
        onPress={props?.onPress}
        style={[
          {
            ...styles.textInput,
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          props.viewStyle,
        ]}
      >
        <TextInput
          ref={props.ref}
          {...props}
          style={[styles.inputText, props.textInputStyle]}
          autoCapitalize="sentences"
          autoCorrect={true}
          placeholderTextColor={Color.PLACEHOLDER_COLOR}
          onSubmitEditing={handleTextSubmit}
        />
        {props.rightButtonComponent && props.rightButtonComponent}
      </TouchableOpacity>
    </View>
  );
};

export default CustomTextInput;

const useStyle = () => {
  const { hp } = useCustomWindowDimensions();
  return StyleSheet.create({
    textInput: {
      height: hp(6),
      borderRadius: RFValue(10),
      marginTop: RFValue(8),
      marginBottom: RFValue(10),
      paddingHorizontal: RFValue(10),
      backgroundColor:Color.TEXT_INPUT_COLOR
    },
    container: {
      flexDirection: 'row',
    },
    inputText: {
      flex: 1,
      //   color: Color.TEXT_INPUT_TEXT_COLOR,
      fontWeight: '400',
      fontSize: RFValue(14),
    },
    titleText: {
      fontSize: RFValue(16),
      //   color: Color.TEXT_INPUT_TEXT_COLOR,
      fontWeight: '500',
    },
  });
};
