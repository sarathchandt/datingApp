import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type OnBoardingStackParamList = {
    welcome:undefined;
}

export type OnboardingStackNavigationProp<
  T extends keyof OnBoardingStackParamList
> = NativeStackScreenProps<OnBoardingStackParamList, T>;