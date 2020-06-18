import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { WelcomeProps } from '../navigation/Types';

const WelcomeScreen: React.FC<WelcomeProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
