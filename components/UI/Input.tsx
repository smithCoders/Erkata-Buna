import { Text, TextInput, View } from "react-native";
interface InputProps {
  title: string;
  placeholder: string;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad";
}
const Input = ({ title, placeholder, keyboardType }: InputProps) => {
  return (
    <View className={"flex items-center gap-2  mt-4"}>
      {/* title */}
      {/* <Text className="text-xl text-secondary-100 mt-1">{title}</Text> */}
      <TextInput
        className="w-full h-[48px]  text-secondary-100 text-lg border-2 border-secondary-100 rounded-lg px-4"
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
};
export default Input;
