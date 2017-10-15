import { ADD_EMPLOYEE, EDIT_EMPLOYEE, BACK } from './types';

export const addEmp = () => { return { type: ADD_EMPLOYEE }; };

export const editEmp = (employee) => { return { type: EDIT_EMPLOYEE, payload: employee }; };

export const goBack = () => { return { type: BACK }; };