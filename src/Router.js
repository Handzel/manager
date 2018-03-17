// Defines all the diff routes user can visit
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 0 }}>
      <Scene key="root" hideNavBar="true">
        <Scene key="auth">
          <Scene 
            key="login" 
            component={LoginForm} 
            title="Please Login" 
          />
        </Scene>
        
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            key="employeeList" 
            component={EmployeeList} 
            title="Employees" 
            initial
          />
          <Scene 
            key="employeeCreate" 
            component={EmployeeCreate} 
            title="Create Employee" 
          />
        </Scene>
      </Scene>
    </Router>
  );
};

// const styles = {
//   sceneTextStyle: {
//     fontSize: 20,
//     alignSelf: 'center',
//     color: 'blue'
//   }
// };

export default RouterComponent;
