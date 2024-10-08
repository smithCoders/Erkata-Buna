import Button from "@/components/UI/Button";
import Header from "@/components/UI/Header";
import Input from "@/components/UI/Input";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "@/constants/image";
import { Link } from "expo-router";

const Login = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="w-full min-h-[90vh]">
          <Header title="Login" />
          <Text className="text-center text-base  text-primary-100 font-pmedium mt-4">
            Please Enter Your Login credential
          </Text>
          <View className="flex  gap-4  mx-4 my-2">
            <Input
              title="Email or Phone Number"
              placeholder="Enter Email or Phone Number"
            />
            <Input title="Password" placeholder="Enter Your Password" />
            <Button title="Login" onPress={() => {}} />
            <View className="flex  items-center  gap-3">
              <View className="flex flex-row gap-2">
                <Text className="text-primary-100 text-[14px] font-pregular">
                  Dont have an account?
                </Text>
                <Link
                  href={"/(auth)/signUp"}
                  className="text-primary-100 text-[14px] font-pregular underline"
                >
                  Sign up
                </Link>
              </View>
              {/* forgot password */}
              <TouchableOpacity className="">
                <Text className="text-primary-100 text-[14px] font-pregular ">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
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
export default Login;
