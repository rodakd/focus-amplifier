import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { WelcomeProps } from '../navigation/Types';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import Colors from '../constants/colors';

const WelcomeScreen: React.FC<WelcomeProps> = () => {
  return (
    <Swiper loop={false} activeDotColor="#12AB34" dotColor="#000">
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.welcomeText}>Focus Amplifier!</Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },

  welcomeText: {
    fontSize: hp(5),
    fontFamily: 'Jost',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
