import { NavigationActions } from 'react-navigation';

import {
    LOGIN_SUCCESS, 
    BACK, 
    ADD_EMPLOYEE, 
    EMPLOYEE_CREATE, 
    EDIT_EMPLOYEE, 
    EMPLOYEE_SAVED, 
    EMPLOYEE_DELETED } from '../actions/types';
import { StackConfig } from '../components/router/StackConfig';

export default (state, action) => {
    //  console.log(`nav reducer--- ${action.type}`);
    switch (action.type) {
        case LOGIN_SUCCESS:
        case EMPLOYEE_CREATE:
        case EMPLOYEE_DELETED:
        case EMPLOYEE_SAVED: {           
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'EmployeeList' })
                ]
            });

            return StackConfig.router.getStateForAction(resetAction);
        }

        case BACK: {
            const navAction = NavigationActions.back({});
            return StackConfig.router.getStateForAction(navAction, state);
        }

        case ADD_EMPLOYEE: {
            const navAction = NavigationActions.navigate({
                routeName: 'EmployeeCreate'
            });
            return StackConfig.router.getStateForAction(navAction, state);
        }

        case EDIT_EMPLOYEE: {
            const navAction = NavigationActions.navigate({
                routeName: 'EmployeeEdit'
            });
            return StackConfig.router.getStateForAction(navAction, state);
        }

        default:
            return StackConfig.router.getStateForAction(action, state);
    }
};