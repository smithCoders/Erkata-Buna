import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import SearchInput from "./SearchInput";
interface HeaderProps {
  title: string;
  isSeacrhVisible?: boolean;
}
const Header = ({ title, isSeacrhVisible }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <View className="w-full h-[100px] bg-primary-100 px-5 py-8">
      <View className="flex-row items-center gap-10">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          activeOpacity={1}
        >
          <Ionicons
            name="chevron-back-circle-outline"
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-pmedium">{title}</Text>
      </View>

      {isSeacrhVisible && (
        <View className="mt-4">
          <SearchInput placeholder="Search Here" />
        </View>
      )}
    </View>
  );
};
export default Header;
