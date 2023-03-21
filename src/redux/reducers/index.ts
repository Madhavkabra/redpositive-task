import { combineReducers } from 'redux';
import { contactUsReducer } from './contactUs';

export const rootReducer = combineReducers({
  contactUsReducer,
});

export type State = ReturnType<typeof rootReducer>;
