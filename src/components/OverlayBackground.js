import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const rain = require('./../assets/lottie/rain.json');
const snow = require('./../assets/lottie/snow.json');
const sun = require('./../assets/lottie/sun.json');

/**
 *
 * @param {{
 * type:('rainy'|'snowy'|'sunny')
 * }} props
 * @returns
 */
const OverlayBackground = props => {
  const getAnimation = () => {
    switch (props.type) {
      case 'rainy':
        return rain;
        break;
      case 'snowy':
        return snow;
        break;
      case 'sunny':
        return sun;
        break;
      default:
        return rain;
        break;
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          top: props.type == 'sunny' ? 0 : 0,
          height: props.type == 'sunny' ? 50 : height,
        },
      ]}>
      <LottieView
        style={[
          styles.animationStyle,
          {
            height: props.type == 'sunny' ? width * 0.6 : height,
          },
        ]}
        source={getAnimation()}
        autoPlay
        loop
      />
    </View>
  );
};

export default OverlayBackground;

const styles = StyleSheet.create({
  container: {
    width: width,
    position: 'absolute',
    zIndex: 1,
  },
  animationStyle: {
    width: width,
  },
});
