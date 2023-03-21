import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import ContactUs from './src/pages/ContactUs';
import { colors } from './src/constants/colors';
import store from './src/redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar
          animated
          barStyle='light-content'
        />
        <ContactUs />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
