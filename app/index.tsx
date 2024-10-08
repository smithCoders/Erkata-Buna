import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Redirect } from "expo-router";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Redirect href="/(auth)/login" />
      </ScrollView>
      <StatusBar backgroundColor="#000" style="light" />
    </SafeAreaView>
  );
};

export default HomeScreen;
