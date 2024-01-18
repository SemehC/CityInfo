import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import moment from 'moment';

import ClockText from './ClockText';

const Divider = () => {
  return (
    <View>
      <Text style={styles.divider}>:</Text>
    </View>
  );
};

/**
 *
 * @param {{
 * currentTime:string
 * }} props
 * @returns
 */
const Clock = props => {
  const [currentTime, setCurrentTime] = useState(null);

  const updateTime = () => {
    const now = moment();
    const elapsedSeconds = now.diff(currentTime, 'seconds'); // Calculate elapsed seconds
    let updatedTime = moment(props.currentTime).add(elapsedSeconds, 'seconds');
    setCurrentTime(updatedTime);
  };

  const formatTime = time => {
    return `0${time}`.slice(-2); // Extract the last two characters
  };

  useEffect(() => {
    // Call updateTime every second, starting immediately
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [props]);

  if (!currentTime) return null;
  return (
    <View style={styles.container}>
      <ClockText text={formatTime(currentTime.hours())} />
      <Divider />
      <ClockText text={formatTime(currentTime.minutes())} />
      <Divider />
      <ClockText text={formatTime(currentTime.seconds())} />
    </View>
  );
};

export default Clock;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  divider: {
    fontSize: 20,
    color: '#184351',
    fontWeight: 'bold',
  },
});
