import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift });
  }
  
  render() { 
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Chris"
            value={this.props.name}
            // this is a call to Action Creator (EmployeeActions) with its specified input signature
            // thanks to its design we only call ONE single Action Creator
            // I use ({ ... , value }) -> ES6 syntax shorthand if key=value like here value: value, 
            // use just value
            onChangeText={(value) => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="XXX-XXX-XXX"
            value={this.props.phone}
            // this is a call to Action Creator (EmployeeActions) with its specified input signature
            // thanks to its design we only call ONE single Action Creator
            // I use ({ ... , value }) -> ES6 syntax shorthand if key=value like here value: value, 
            // use just value
            onChangeText={(value) => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            // By default Picker width is set to 0, need to expand all area -> flex: 1
            //style={{ flex: 1 }} 
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
          >
            Create
          </Button>
        </CardSection>

        
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  // REMEMBER: state.employeeForm -> name of a reducer from reducer/index.js
  const { name, phone, shift } = state.employeeForm; 
  // ES6 destructurizing
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
