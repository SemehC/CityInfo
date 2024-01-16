import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SearchButton from '../components/inputs/SearchButton';
import Animated, {
  FadeInUp,
  FadeOut,
  SlideInLeft,
} from 'react-native-reanimated';
import CityInput from '../components/inputs/CityInput';

const HomePage = props => {
  const [selectedCounty, setSelectedCountry] = useState(null);

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInUp} style={styles.titleContainer}>
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
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#184351',
  },
  detailsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryName: {
    marginVertical: 5,
    fontSize: 25,
    color: '#184351',
  },
  imageStyle: {
    height: Dimensions.get('screen').width * 0.6,
    width: Dimensions.get('screen').width * 0.6,
    borderRadius: 10,
  },
});
