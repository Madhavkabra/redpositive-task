import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { colors } from '../../constants/colors';

interface InputProps {
  placeholder: string;
  value: string;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  numberOfLines?: number;
  multiline?: boolean;
  onChangeText?: ((text: string) => void) | undefined;
}

export default function Input({
  placeholder,
  keyboardType = 'default',
  onChangeText,
  multiline,
  numberOfLines,
  value,
  error,
}: InputProps) {
  return (
    <View>
      <TextInput
        style={[
          styles.input,
          multiline && styles.textarea,
          {
            borderColor: error
              ? colors.borderCritical
              : colors.borderNeutralFaded,
          },
        ]}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        selectionColor={colors.black}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  textarea: {
    height: 120,
    textAlignVertical: 'top',
  },
  errorText: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
    color: colors.foregroundCritical,
  },
});
