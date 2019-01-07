import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="auth">
                    <Scene key="login" sceneStyle={styles.formStyle} component={LoginForm} title="Please Login" initial></Scene>
                </Scene>
                <Scene key="main">
                    <Scene
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                        key="employeeList"
                        sceneStyle={styles.formStyle}
                        component={EmployeeList}
                        title="Employee List"
                        initial
                    />
                    <Scene key="employeeCreate" sceneStyle={styles.formStyle} component={EmployeeCreate} title="Create Employee" />
                </Scene>
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