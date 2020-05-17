import { combineReducers } from 'redux';
import leads from './leads';
import leads2 from './leads2';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
  leads,
  leads2,
  errors,
  messages,
  auth,
});
