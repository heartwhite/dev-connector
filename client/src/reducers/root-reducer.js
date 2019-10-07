import { combineReducers } from 'redux';
import alert from './alert-reducer';
import register from './auth-reducer';
import profile from './profile-reducer';
export default combineReducers({ alert, register, profile });
