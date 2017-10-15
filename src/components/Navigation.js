import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';

const Navigation = StackNavigator({
    Login: { screen: LoginForm },
    EmployeeList: { screen: EmployeeList },
});

export default Navigation;