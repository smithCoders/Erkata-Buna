import Button from "@/components/UI/Button";
import Header from "@/components/UI/Header";
import Input from "@/components/UI/Input";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "@/constants/image";

const SignUp = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full min-h-[90vh] ">
          <Header title="Sign Up" />
          {/* fields */}
          <View className="flex  flex-col gap-4  m-3">
            <Input title="Full Name" placeholder="Enter Full Name" />
            <Input
              title="Email Address"
              placeholder="Enter Email Address"
              keyboardType="email-address"
            />
            <Input title="Password" placeholder="Enter Your Password" />
            <Input
              title="Confirm Password"
              placeholder="Confirm Your Password"
            />
            <Button title="Sign Up" onPress={() => {}} />
          </View>
          {/* or */}
          <View className="flex-row items-center justify-center my-4">
            {/* Left Dash */}
            <View className="h-[1px] w-16 bg-primary-100" />

            {/* OR Text */}
            <Text className="mx-2 text-center text-primary-100 uppercase text-lg">
              Or
            </Text>

            {/* Right Dash */}
            <View className="h-[1px] w-16 bg-primary-100" />
          </View>
          {/* oAuth */}
          <View className="flex items-center gap-6  mx-5 my-1">
            <TouchableOpacity className=" flex-row items-center   px-4 gap-3  border  w-full py-1  rounded-xl  border-secondary-100">
              <Image source={image.google} className="w-7 h-7 mr-4" />
              <Text className="text-secondary-100">Continue With Google</Text>
            </TouchableOpacity>
            <TouchableOpacity className=" flex-row items-center   px-4 gap-3  border  w-full py-1  rounded-xl  border-secondary-100">
              <Image source={image.facebook} className="w-7 h-7 mr-4" />
              <Text className="text-secondary-100  font-pmedium">
                Continue With Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUp;
