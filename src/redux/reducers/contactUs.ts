import { Action } from 'redux';
import { ContactUsInitialState } from '../interfaces/contactUs';
import {
  RESET_CONTACT_FORM_DATA,
  SET_CONTACT_FORM_DATA,
} from '../types/contactUs';

const initialState: ContactUsInitialState = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

export const contactUsReducer = (
  state: ContactUsInitialState = initialState,
  action: Action
) => {
  const { type } = action;

  switch (type) {
    case SET_CONTACT_FORM_DATA:
      if ('payload' in action) {
        state = action.payload as ContactUsInitialState;
      }
      return state;

    case RESET_CONTACT_FORM_DATA:
      state = initialState;
      return state;

    default:
      return state;
  }
};
