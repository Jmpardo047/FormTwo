import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { SurveyProcessor } from '../screens/home/forms/post/SurveysList';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false,
      headerStyle:{
        elevation: 0,
        shadowColor: 'transparent',
      },
    }}>

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="surveysPage" component={SurveyProcessor} />
    </Stack.Navigator>
  );
}