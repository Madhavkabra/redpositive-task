import { useSelector, useDispatch } from 'react-redux';
import ContactUsForm from '../../components/ContactUsForm';
import { State } from '../../redux/reducers';
import {
  resetContactFormData,
  setContactFormData,
} from '../../redux/actions/contactUs';

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
    dispatch(resetContactFormData());
    console.log({ contactUsFormState });
  };

  return (
    <ContactUsForm
      email={contactUsFormState.email}
      message={contactUsFormState.message}
      name={contactUsFormState.name}
      phone={contactUsFormState.phone}
      onChangeText={handleChangeText}
      onPressSubmitButton={handlePressOnSubmitButton}
    />
  );
}
