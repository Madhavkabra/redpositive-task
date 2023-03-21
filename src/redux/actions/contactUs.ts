import {
  RESET_CONTACT_FORM_DATA,
  SET_CONTACT_FORM_DATA,
} from '../types/contactUs';
import { ContactUsInitialState } from '../interfaces/contactUs';

export const setContactFormData = (payload: ContactUsInitialState) => ({
  type: SET_CONTACT_FORM_DATA,
  payload,
});

export const resetContactFormData = () => ({
  type: RESET_CONTACT_FORM_DATA,
});
