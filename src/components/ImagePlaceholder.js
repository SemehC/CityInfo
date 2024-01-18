import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

const loading_animation = require('./../assets/lottie/images_placeholde.json');
const ImagePlaceholder = () => {
  return (
    <Animated.View
      style={styles.container}
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}>
      <LottieView
        style={styles.animationStyle}
        source={loading_animation}
        autoPlay
        loop
        speed={0.7}
      />
    </Animated.View>
  );
};

export default ImagePlaceholder;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  animationStyle: {
    height: 200,
    width: 200,
  },
});
