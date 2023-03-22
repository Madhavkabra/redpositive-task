import { useSelector, useDispatch } from 'react-redux';
import { ToastAndroid } from 'react-native';
import ContactUsForm from '../../components/ContactUsForm';
import { State } from '../../redux/reducers';
import {
  resetContactFormData,
  resetContactFormErrors,
  setContactFormData,
  setContactFormErrors,
} from '../../redux/actions/contactUs';
import { validateContactUsForm } from './validation';
import { sendEmail } from '../../services/sendEmail';

export default function ContactUs() {
  const contactUsFormState = useSelector(
    (state: State) => state.contactUsReducer
  );
  const dispatch = useDispatch();

  const handleChangeText = (name: string, value: string) => {
    const formData = {
      ...contactUsFormState,
      [name]: value,
    };

    dispatch(setContactFormData(formData));
  };

  const handlePressOnSubmitButton = async () => {
    const validationRes = validateContactUsForm(contactUsFormState);

    if (Object.keys(validationRes).length) {
      dispatch(setContactFormErrors(validationRes));
    } else {
      try {
        dispatch(resetContactFormErrors());

        const mailRes = await sendEmail(
          contactUsFormState.name,
          contactUsFormState.phone,
          contactUsFormState.email,
          contactUsFormState.message
        );

        if (mailRes) {
          dispatch(resetContactFormData());
        }
      } catch (error) {
        ToastAndroid.show(
          'Failed to send mail, Please try again in sometime',
          2000
        );
      }
    }
  };

  return (
    <ContactUsForm
      email={contactUsFormState.email}
      message={contactUsFormState.message}
      name={contactUsFormState.name}
      phone={contactUsFormState.phone}
      errors={contactUsFormState.errors}
      onChangeText={handleChangeText}
      onPressSubmitButton={handlePressOnSubmitButton}
    />
  );
}
