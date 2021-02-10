import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {PT_COLORS} from '../../config';
const PTTextInputS = (props) => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    label,
    style,
    labelWrapperStyle,
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <View style={{...styles.wrapper, ...style}}>
      <View style={{...styles.labelWrapper, ...labelWrapperStyle}}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput
        style={[
          styles.textinput,
          props.multiline && {height: props.numberOfLines * 40},
          hasError && styles.errorInput,
        ]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </View>
  );
};

export default PTTextInputS;

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    marginTop: 15,
  },
  textinput: {
    borderWidth: 1,
    borderColor: PT_COLORS.secondaryDark,
    height: 50,
  },
  label: {
    color: PT_COLORS.primaryDark,
  },
  labelWrapper: {
    zIndex: 10,
    position: 'absolute',
    left: 20,
    top: -10,
    backgroundColor: PT_COLORS.secondaryLight,
    paddingHorizontal: 8,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  errorInput: {
    borderColor: 'red',
  },
});
