import { StyleSheet, View, StatusBar } from 'react-native';
import ContactUs from './pages/ContactUs';
import { colors } from './constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated
        barStyle='light-content'
      />
      <ContactUs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
