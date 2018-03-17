import React from 'react';
import { Text, View, TextInput } from 'react-native';

// TextInput is tricky
// By default it has no dimensions set so its not visible
// when we call setState method component rerenders
// Flow
// TextInput -> User types text -> onChangeText event called -> setState with new text -> component rerenders
// When TextInput rerenders, we tell it that its value is this.state.text

// In JSX if prop is boolean nad true no need to set it to true ie. secureTextEntry

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput 
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        underlineColorAndroid="transparent"
      />
    </View>
  );
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export { Input };