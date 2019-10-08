import { combineReducers } from 'redux';
import alert from './alert-reducer';
import register from './auth-reducer';
import profile from './profile-reducer';
import post from './post-reducer';

export default combineReducers({ alert, register, profile, post });
