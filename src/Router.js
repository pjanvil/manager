import React from 'react';
import { Scene, Router, } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="login" sceneStyle={styles.formStyle} component={LoginForm} title="Please Login" initial></Scene>
                <Scene key="employeeList" sceneStyle={styles.formStyle} component={EmployeeList} title="Employee List" />
            </Scene>
        </Router>
    );
};

const styles = {
    formStyle: {
        flex: 1,
        paddingTop: 52
    }
}

export default RouterComponent;