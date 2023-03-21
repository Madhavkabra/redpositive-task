import { StyleSheet, Text, View, Button } from 'react-native';
import Input from '../Input';
import { colors } from '../../constants/colors';

export default function ContactUsForm() {
  return (
    <View style={styles.container}>
      <Text style={styles.contactUsText}>Contact Us</Text>
      <Text style={styles.descriptionText}>
        Please fill the below form and submit it.
      </Text>

      <View style={styles.formContainer}>
        <Input placeholder='Name' />
        <Input
          placeholder='Mobile Number'
          keyboardType='phone-pad'
        />
        <Input
          placeholder='Email'
          keyboardType='email-address'
        />
        <Input
          placeholder='Type a message...'
          multiline
          numberOfLines={10}
        />

        <Button
          title='Submit'
          color={colors.backgroundPrimary}
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
