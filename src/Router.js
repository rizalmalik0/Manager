import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';
import EmployeeCreate from './component/EmployeeCreate';
import EmployeeEdit from './component/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" component={LoginForm} title="Login App" initial />
                <Scene
                    key="employeeList"
                    component={EmployeeList}
                    title="Employee List"
                    rightTitle="Add"
                    onRight={() => { Actions.employeeCreate(); }}
                />
                <Scene key="employeeCreate" component={EmployeeCreate} title="Employee Create" />
                <Scene key="employeeEdit" component={EmployeeEdit} title="Employee Edit" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
