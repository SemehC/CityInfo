import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SearchButton from '../components/inputs/SearchButton';
import Animated, {
  FadeInUp,
  FadeOut,
  SlideInLeft,
} from 'react-native-reanimated';
import CityInput from '../components/inputs/CityInput';
import Background from '../components/Background';
import Clock from '../components/Clock';

const HomePage = props => {
  const [selectedCounty, setSelectedCountry] = useState(null);

  return (
    <View style={styles.container}>
      <Background type="day night" />

      <Animated.View
        entering={FadeInUp}
        style={styles.titleContainer}
        needsOffscreenAlphaCompositing={true}>
        <Text style={styles.titleText}>City Info</Text>
      </Animated.View>
      <View>
        <CityInput
          onCountrySelect={setSelectedCountry}
          onClear={() => {
            setSelectedCountry(null);
          }}
        />
      </View>

      <Animated.View entering={SlideInLeft.duration(500)}>
        <SearchButton
          disabled={selectedCounty == null}
          onPress={() => {
            props.navigation.navigate('Details', {
              country: selectedCounty,
              name: selectedCounty.title,
            });
          }}
        />
      </Animated.View>

      {selectedCounty && (
        <Animated.View
          entering={SlideInLeft.duration(500)}
          exiting={FadeOut}
          style={styles.detailsContainer}>
          <Text style={styles.countryName}>{selectedCounty.title}</Text>
          <Animated.Image
            sharedTransitionTag="shared_transition_flag"
            source={{
              uri: selectedCounty.flag,
            }}
            resizeMode={'contain'}
            style={styles.imageStyle}
          />
        </Animated.View>
      )}
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#f0f0f0',
    flex: 1,
  },
  titleContainer: {
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: 'rgba(224, 219, 219, 0.7)',
  },
  titleText: {
    padding: 5,
    borderRadius: 5,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#184351',
  },
  detailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryName: {
    marginTop: 5,
    fontSize: 25,
    color: '#184351',
    backgroundColor: 'rgba(224, 219, 219, 0.7)',
    borderRadius: 5,
    padding: 5,
  },
  imageStyle: {
    height: Dimensions.get('screen').width * 0.6,
    width: Dimensions.get('screen').width * 0.6,
    borderRadius: 10,
  },
});
