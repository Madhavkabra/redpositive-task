import { useSelector, useDispatch } from 'react-redux';
import ContactUsForm from '../../components/ContactUsForm';
import { State } from '../../redux/reducers';
import {
  resetContactFormData,
  resetContactFormErrors,
  setContactFormData,
  setContactFormErrors,
} from '../../redux/actions/contactUs';
import { validateContactUsForm } from './validation';

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

  const handlePressOnSubmitButton = () => {
    console.log({ contactUsFormState });
    const validationRes = validateContactUsForm(contactUsFormState);
    if (Object.keys(validationRes).length) {
      dispatch(setContactFormErrors(validationRes));
    } else {
      dispatch(resetContactFormErrors());
      dispatch(resetContactFormData());
    }
    console.log({ contactUsFormState });
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
