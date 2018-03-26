import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }
  
  // pass in all the props from EmployeeCreate component to EmployeeForm
  // < {...this.props} />
  render() { 
    return (
      <Card>
        
        <EmployeeForm {...this.props} />

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

const mapStateToProps = (state) => {
  // REMEMBER: state.employeeForm -> name of a reducer from reducer/index.js
  const { name, phone, shift } = state.employeeForm; 
  // ES6 destructurizing
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
