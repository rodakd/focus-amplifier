import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';

export type RootStackParamList = {
  Welcome: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const RootStackNavigator: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Welcome" component={WelcomeScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
