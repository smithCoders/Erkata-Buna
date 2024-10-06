import React from "react";
import {
  StyleProp,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  customeStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled,
  loading,
  customeStyle,
}) => {
  return (
    <TouchableOpacity
      className={`w-full h-[54px] bg-primary-100
       text-white mx-auto rounded-xl mt-7 justify-center items-center mb-4 ${customeStyle}`}
      onPress={onPress}
      activeOpacity={1}
      disabled={disabled || loading}
    >
      <Text className="text-white text-lg font-pmedium text-center ">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
