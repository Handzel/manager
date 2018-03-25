import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    // this is async, may take some time, thats why we use another lifecycle 
    // method below. 
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextPropos -> are the next set of props that this component 
    // will be rendered with
    // this.props is still the old set of props
    // Method to reacting to any change in props object

    this.createDataSource(nextProps);
  }

  // helper method for ds
  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    // cloneWithRows works with arrays not Objects -> Object is being returned 
    // from firebase by default. Solution -> lodash
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    <ListItem employee={employee} />;
  }

  render() { 
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow} 
      />
    );
  }
}

// will need to solve array vs object problem for ds -> lodash
const mapStateToProps = state => {
  // state.employees is an object with many key:value pairs
  // _.map -> for each key:value pair in state.employees run 
  // (val, uid) => {} function
  // uid -> key
  // val -> userModel has name, phone, shift property
  // return { ...val, uid } -> then create new object, push in all the values 
  // (...val) from userModel and add on top uid
  // output -> name: Name, phone: Phone, shift: Shift, id: ididid
  // map turns that into array and array is signed to employees const

  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
