import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Text } from 'react-native'
import { OnBoardingStackParamList } from './type';
import WelcomScreen from '../screens/WelcomScreen';

const Stack = createNativeStackNavigator<OnBoardingStackParamList>();


const OnboardingStack = () => {
  return (
   <Stack.Navigator 
   screenOptions={{headerShown: false}}
   >
    <Stack.Screen name="welcome" component={WelcomScreen} />
   </Stack.Navigator>
  )
}

export default OnboardingStack
