import { Action } from 'redux';
import {
  ContactUsFormErrors,
  ContactUsFormFields,
  ContactUsInitialState,
} from '../interfaces/contactUs';
import {
  RESET_CONTACT_FORM_DATA,
  RESET_CONTACT_FORM_ERRORS,
  SET_CONTACT_FORM_DATA,
  SET_CONTACT_FORM_ERRORS,
} from '../types/contactUs';

const initialFormFields: ContactUsFormFields = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

const initialFormErrors: ContactUsFormErrors = {
  email: '',
  name: '',
  phone: '',
};

const initialState: ContactUsInitialState = {
  ...initialFormFields,
  errors: initialFormErrors,
};

export const contactUsReducer = (
  state: ContactUsInitialState = initialState,
  action: Action
) => {
  const { type } = action;

  switch (type) {
    case SET_CONTACT_FORM_DATA:
      if ('payload' in action) {
        state = {
          errors: { ...state.errors },
          ...(action.payload as ContactUsFormFields),
        };
      }
      return state;

    case RESET_CONTACT_FORM_DATA:
      state = {
        ...initialFormFields,
        errors: state.errors,
      };
      return state;

    case SET_CONTACT_FORM_ERRORS:
      if ('payload' in action) {
        state = {
          ...state,
          errors: { ...(action.payload as ContactUsFormErrors) },
        };
      }
      return state;

    case RESET_CONTACT_FORM_ERRORS:
      state = { ...state, errors: initialFormErrors };
      return state;

    default:
      return state;
  }
};
