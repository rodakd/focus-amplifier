import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { WelcomeProps } from '../navigation/Types';
import Swiper from 'react-native-swiper';

const WelcomeScreen: React.FC<WelcomeProps> = () => {
  return (
    <Swiper loop={false} activeDotColor="#12AB34" dotColor="#000">
      <View style={styles.container}>
        <Text> What's up </Text>
      </View>
      <View style={styles.container}>
        <Text> How you doin </Text>
      </View>
      <View style={styles.container}>
        <Text> I'm fine </Text>
      </View>
      <View style={styles.container}>
        <Text> And you? </Text>
      </View>
    </Swiper>
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
