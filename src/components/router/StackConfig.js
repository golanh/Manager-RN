import React from 'react';
import { Button } from 'react-native';

import { StackNavigator } from 'react-navigation';
// import { addEmp } from '../../actions/index';

import LoginForm from '../LoginForm';
import EmployeeList from '../EmployeeList';
import EmployeeCreate from '../EmployeeCreate';
import EmployeeEdit from '../EmployeeEdit';


const employeeListNavOp = ({ screenProps }) => ({
    title: 'Employees',
    headerLeft: null,
    headerRight: <Button title="Add" onPress={() => screenProps.addEmp()} />,
});

export const StackConfig = StackNavigator({

    Login: {
        screen: LoginForm,
        navigationOptions: { header: null }
    },
    EmployeeList: {
        screen: EmployeeList,
        navigationOptions: employeeListNavOp
        // {
        //     title: 'Employees',
        //     headerLeft: null,
        //     headerRight: <Button title="Add" onPress={() => console.log(this)} />,
        // }
    },
    EmployeeCreate: { 
        screen: EmployeeCreate,
        navigationOptions: {
            title: 'Add Employee'
        }
     },
    EmployeeEdit: {
         screen: EmployeeEdit,
         navigationOptions: {
             title: 'Edit Employee'
         } },
});

// const add = () => {
//     console.log('add');
//     const navAction = NavigationActions.navigate({
//         routeName: 'EmployeeCreate'
//     });
//     return StackConfig.router.getStateForAction(navAction, null);
// };

// export default Navigation;