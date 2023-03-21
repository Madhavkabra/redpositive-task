import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
} from 'react-native';
import { colors } from '../../constants/colors';

interface InputProps {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  numberOfLines?: number;
  multiline?: boolean;
  onChange?:
    | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
    | undefined;
}

export default function Input({
  placeholder,
  keyboardType = 'default',
  onChange,
  multiline,
  numberOfLines,
}: InputProps) {
  return (
    <TextInput
      style={[styles.input, multiline && styles.textarea]}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChange={onChange}
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
