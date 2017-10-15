import firebase from 'firebase';

import { EMAIL_CHANGED, PASS_CHANGED, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_USER } from './types';


//AUTH ACTIONS
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passChanged = (text) => {
    return {
        type: PASS_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, pass }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error);
                firebase.auth().createUserWithEmailAndPassword(email, pass)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch((err) => {
                        console.log(err);
                        loginUserFail(dispatch);
                    });
            });
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user
    });
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_FAIL
    });
};