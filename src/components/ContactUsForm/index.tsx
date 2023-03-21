import {
  StyleSheet,
  Text,
  View,
  Button,
  GestureResponderEvent,
} from 'react-native';
import Input from '../Input';
import { colors } from '../../constants/colors';

interface ContactUsFormProps {
  name: string;
  phone: string;
  email: string;
  message: string;
  onChangeText: (inputName: string, value: string) => void;
  onPressSubmitButton?: ((event: GestureResponderEvent) => void) | undefined;
}

export default function ContactUsForm({
  name,
  phone,
  email,
  message,
  onChangeText,
  onPressSubmitButton,
}: ContactUsFormProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.contactUsText}>Contact Us</Text>
      <Text style={styles.descriptionText}>
        Please fill the below form and submit it.
      </Text>

      <View style={styles.formContainer}>
        <Input
          placeholder='Name'
          value={name}
          onChangeText={(value) => onChangeText('name', value)}
        />
        <Input
          placeholder='Mobile Number'
          value={phone}
          keyboardType='phone-pad'
          onChangeText={(value) => onChangeText('phone', value)}
        />
        <Input
          placeholder='Email'
          value={email}
          keyboardType='email-address'
          onChangeText={(value) => onChangeText('email', value)}
        />
        <Input
          placeholder='Type a message...'
          value={message}
          multiline
          numberOfLines={10}
          onChangeText={(value) => onChangeText('message', value)}
        />

        <Button
          title='Submit'
          color={colors.backgroundPrimary}
          onPress={onPressSubmitButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    paddingTop: 50,
  },
  contactUsText: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '500',
  },
  descriptionText: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '400',
  },
  formContainer: {
    flex: 1,
    gap: 15,
  },
});
