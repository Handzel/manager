import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class EmployeeCreate extends Component {
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

        <CardSection>
        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>

        
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  // REMEMBER: state.employeeForm -> name of a reducer from reducer/index.js
  const { name, phone, shift } = state.employeeForm; 
  // ES6 destructurizing
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
