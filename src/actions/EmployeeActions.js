import firebase from 'firebase';
import {
    EMPLOYEE_CREATE,
    EMPLOYEE_UPDATE
} from './types';

export const employeeUpdate = ( { prop, value } ) => {
  return {
      type: EMPLOYEE_UPDATE,
      payload: {prop, value }
  };
};

export const employeeCreate = ({name, phone, shift}) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({name, phone, shift});
    return {
        type: EMPLOYEE_CREATE,
        payload: {name, phone, shift}
    };
}