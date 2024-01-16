import {
  Linking,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

/**
 *
 * @param {{
 * mapsLink:string
 * }} props
 * @returns
 */
const OpenInMapsButton = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonContainer}>
      <TouchableCmp
        onPress={() => {
          try {
            Linking.openURL(props.mapsLink);
          } catch (error) {}
        }}
        background={TouchableNativeFeedback.Ripple('gray')}>
        <View style={styles.buttonElementsContainer}>
          <Text style={styles.textStyle}>Google maps</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

export default OpenInMapsButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 60,
    backgroundColor: '#4E6EDE',
    marginHorizontal: 10,
    elevation: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonElementsContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
  },
  disabledOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(176, 187, 211,0.62)',
    width: '100%',
    height: '100%',
  },
});
