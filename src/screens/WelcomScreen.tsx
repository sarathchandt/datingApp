import React from "react";
import { Text } from "react-native";
import tw from "../lib/tailwind";
import { OnboardingStackNavigationProp } from "../navigators/type";
import Container from "../components/Container";
import WelcomeScreenCorosal from "../components/WelcomeScreenCorosal";

const WelcomScreen: React.FC<OnboardingStackNavigationProp<"welcome">> = ({
  navigation,
}) => {
  return (
    <Container removeXPading>
        <WelcomeScreenCorosal/>
    </Container>
  );
};

export default WelcomScreen;
