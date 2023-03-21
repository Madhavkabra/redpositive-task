import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native';
import { colors } from '../../constants/colors';

interface InputProps {
  placeholder: string;
  value: string;
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
}: InputProps) {
  return (
    <TextInput
      style={[styles.input, multiline && styles.textarea]}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      selectionColor={colors.black}
      multiline={multiline}
      numberOfLines={numberOfLines}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    borderColor: colors.borderNeutralFaded,
  },
  textarea: {
    height: 120,
    textAlignVertical: 'top',
  },
});
