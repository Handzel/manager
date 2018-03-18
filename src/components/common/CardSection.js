import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    // If we use an array of styles, first one is default but if any other style
    // is passed in as prop then it's going to be used instead of default
    // Style OVERRIDE
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
