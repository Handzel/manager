// Import library to help create component
import React from 'react';
import { Text, View } from 'react-native';

// Create a component
// Functional Components -> used for presenting static data
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', // flexbox vertical direction -> default, center, flex-end, flex-start
    alignItems: 'center', //flexbox horizontal direction -> flex-start, center, flex-end
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

// Make it available to other parts of the app
// Header is a child component of App component
// For every child component we use export statements
export { Header };

