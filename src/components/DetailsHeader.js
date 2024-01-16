import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import BackArrowIcon from './../assets/back_arrow.svg';
import SunnyIcon from './../assets/sunny.svg';
import SnowyIcon from './../assets/snowy.svg';
import RainyIcon from './../assets/rainy.svg';

/**
 *
 * @param {{
 * title:string,
 * temp:number,
 * weather:('rainy'|'sunny'|'snowy')
 * onGoBack:Function,
 * }} props
 * @returns
 */
const DetailsHeader = props => {
  const getWeatherIcon = () => {
    switch (props.weather) {
      case 'rainy':
        return <RainyIcon height={50} width={50} />;
        break;
      case 'snowy':
        return <SnowyIcon height={50} width={50} />;
        break;
      case 'sunny':
        return <SunnyIcon height={50} width={50} />;
        break;
      default:
        return <SunnyIcon height={50} width={50} />;
        break;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => {
          if (props.onGoBack) props.onGoBack();
        }}
        activeOpacity={0.8}>
        <BackArrowIcon height={50} width={50} />
      </TouchableOpacity>
      <View>
        <Text style={styles.titleText}>{props.title || ''}</Text>
      </View>
      <View>
        <Text style={styles.titleText}>{props.temp}°C</Text>
      </View>
      <View>{getWeatherIcon()}</View>
    </View>
  );
};

export default DetailsHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 99,
  },
  goBackButton: {
    zIndex: 999,
  },

  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#184351',
    marginRight: 10,
  },
});
