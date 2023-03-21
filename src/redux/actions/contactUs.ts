import {
  RESET_CONTACT_FORM_DATA,
  RESET_CONTACT_FORM_ERRORS,
  SET_CONTACT_FORM_DATA,
  SET_CONTACT_FORM_ERRORS,
} from '../types/contactUs';
import {
  ContactUsFormErrors,
  ContactUsFormFields,
} from '../interfaces/contactUs';

export const setContactFormData = (payload: ContactUsFormFields) => ({
  type: SET_CONTACT_FORM_DATA,
  payload,
});

export const resetContactFormData = () => ({
  type: RESET_CONTACT_FORM_DATA,
});

export const setContactFormErrors = (payload: ContactUsFormErrors) => ({
  type: SET_CONTACT_FORM_ERRORS,
  payload,
});

export const resetContactFormErrors = () => ({
  type: RESET_CONTACT_FORM_ERRORS,
});
