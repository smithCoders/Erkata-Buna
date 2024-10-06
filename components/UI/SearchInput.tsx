import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
interface SearchInputProps {
  placeholder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {
  const [text, setText] = useState("");

  const clearText = () => {
    setText("");
  };

  return (
    <View className="w-full h-[48px] rounded-2xl border-2 border-gray-300 flex-row items-center mt-6">
      <View className="px-5">
        <Ionicons name="search-outline" size={25} color={"white"} />
      </View>
      <TextInput
        placeholder={placeholder}
        className="flex-1 text-base px-5 text-white"
        value={text}
        onChangeText={setText}
        placeholderTextColor={"white"}
      />
      {text.length > 0 && (
        <TouchableOpacity onPress={clearText} className="px-5">
          <Ionicons name="close-outline" size={25} color={"white"} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;
