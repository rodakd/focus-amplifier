import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation/RootStack';
import {
  useFonts,
  Jost_400Regular as Jost,
  Jost_600SemiBold as JostBold,
} from '@expo-google-fonts/jost';
import { AppLoading } from 'expo';

export default function App() {
  let fontsLoaded: [boolean, Error | null] = useFonts({
    Jost,
    JostBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
