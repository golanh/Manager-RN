import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EDIT_EMPLOYEE, EMPLOYEE_SAVED, EMPLOYEE_DELETED, BACK } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            //action.payload === {prop: 'name, value: 'jane'}
            return { ...state, [action.payload.prop]: action.payload.value };

        case EMPLOYEE_CREATE:
        case EMPLOYEE_DELETED:
        case EMPLOYEE_SAVED:
        case BACK:
            return INITIAL_STATE;

        case EDIT_EMPLOYEE:
            return { ...state, employee: action.payload };

        default:
            return state;

    }
};