import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const night = require('./../assets/lottie/night_time.json');
const dayNight = require('./../assets/lottie/day_night.json');
const day = require('./../assets/lottie/day.json');
/**
 *
 * @param {{
 * type:('day'|'night'|'day night')
 * }} props
 * @returns
 */
const Background = props => {
  const getAnimation = () => {
    switch (props.type) {
      case 'day':
        return day;
        break;
      case 'day night':
        return dayNight;
        break;
      case 'night':
        return night;
        break;

      default:
        return night;
        break;
    }
  };
  return (
    <Animated.View
      style={styles.container}
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}>
      <LottieView
        resizeMode="cover"
        style={styles.animationStyle}
        speed={0.5}
        source={getAnimation()}
        autoPlay
        loop
      />
    </Animated.View>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  animationStyle: {
    height: height,
    width: width,
    resizeMode: 'stretch',
  },
});
