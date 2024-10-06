import { useRef, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import onBoardingData from "../../data/onBoarding";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "@/components/UI/Button";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { styled } from "nativewind";

interface OnBoadingScreenProps {
  title: string;
  image: ImageSourcePropType;
  description: string;
}

// styled function to integrate NativeWind
const StyledLinearGradient = styled(LinearGradient);

const OnBoadingScreen = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onBoardingData.length - 1;

  return (
    <StyledLinearGradient
      // Set the gradient colors and direction
      colors={["#a8a29e", "#171717", "#000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
    >
      <SafeAreaView className="flex-1">
        {!isLastSlide && (
          <View className="absolute top-[60px] right-5 z-20">
            <TouchableOpacity
              onPress={() => {
                router.replace("/(auth)/signUp");
              }}
              activeOpacity={1}
            >
              <Text className="text-white font-bold">Skip</Text>
            </TouchableOpacity>
          </View>
        )}

        <Swiper
          ref={swiperRef}
          loop={false}
          dot={
            <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
          }
          activeDot={
            <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
          }
          onIndexChanged={(index) => setActiveIndex(index)}
        >
          {onBoardingData.map((data: OnBoadingScreenProps, index: number) => (
            <View
              key={index}
              className="flex py-8 items-center justify-center mt-20"
            >
              <Image
                source={data.image}
                className="w-full h-[300px] rounded-lg"
                resizeMode="contain"
              />
              <View className="flex-col items-center justify-center mt-10">
                <Text className="font-psemibold text-[24px] text-center text-white">
                  {data.title}
                </Text>
                <Text className="text-center mt-2 mx-10 text-lg text-white">
                  {data.description}
                </Text>
              </View>
            </View>
          ))}
        </Swiper>
        <View className="mx-6 mb-2">
          <Button
            title={isLastSlide ? "Get started" : "Next"}
            onPress={() => {
              if (isLastSlide) {
                router.replace("/(auth)/signUp");
              } else {
                swiperRef.current?.scrollBy(1);
              }
            }}
          />
        </View>
      </SafeAreaView>
    </StyledLinearGradient>
  );
};

export default OnBoadingScreen;
