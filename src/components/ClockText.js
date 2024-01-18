import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const ClockText = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ClockText;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 20,
    color: '#184351',
  },
});
