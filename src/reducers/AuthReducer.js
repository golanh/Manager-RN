import { EMAIL_CHANGED, PASS_CHANGED, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_USER } from '../actions/types';

const INITIAL_STATE = {
    // email: '',
    // pass: '',
    email: 'test@test.com',
    pass: '123456',
    
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    // console.log(action);  // for debugging
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };

        case PASS_CHANGED:
            return { ...state, pass: action.payload };

        case LOGIN_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };

        case LOGIN_FAIL:
            return { ...state, error: 'failed to login...', pass: '', loading: false };

        case LOGIN_USER:
            return { ...state, loading: true };

        default:
            return state;
    }
};