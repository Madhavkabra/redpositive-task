import {
  ContactUsFormErrors,
  ContactUsFormFields,
} from '../../redux/interfaces/contactUs';

const validateName = (name: string): boolean => /^[^-\s][a-zA-Z ]*$/.test(name);
const validatePhone = (phone: string): boolean => /^[0-9]{10}$/.test(phone);
const validateEmail = (email: string): boolean =>
  /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);

export const validateContactUsForm = (
  inputValue: ContactUsFormFields
): ContactUsFormErrors => {
  const errors: ContactUsFormErrors = {};
  if (!validateName(inputValue.name)) {
    errors.name = 'Invalid name';
  }
  if (!validateEmail(inputValue.email)) {
    errors.email = 'Invalid email';
  }
  if (!validatePhone(inputValue.phone)) {
    errors.phone = 'Mobile number should be of 10 digits';
  }

  return errors;
};
