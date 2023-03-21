import { useSelector } from 'react-redux';
import ContactUsForm from '../../components/ContactUsForm';
import { State } from '../../redux/reducers';

export default function ContactUs() {
  const { email, message, name, phone } = useSelector(
    (state: State) => state.contactUsReducer
  );

  console.log({ email, message, name, phone });

  return <ContactUsForm />;
}
