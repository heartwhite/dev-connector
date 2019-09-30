import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './action-types';

export const setAlert = (msg, alertType, timeOut) => dispatch => {
  const id = uuid.v4();
  dispatch({ type: SET_ALERT, payload: { msg, alertType, id } });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeOut);
};
