import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlobalCountryDetails from '../components/GlobalCountryDetails';
import OpenInMapsButton from '../components/inputs/OpenInMapsButton';
import DetailsHeader from '../components/DetailsHeader';
import {getCityDetails} from '../services/CitiesService';
import Animated from 'react-native-reanimated';
import {fetchWeatherData} from '../services/WeatherService';

const DetailsPage = props => {
  const [country, setCountry] = useState(null);
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    try {
      let name = props.route.params.country.title;
      getCityDetails(name).then(res => {
        setCountry(res);
        checkWeather(res.latlng);
      });
    } catch (error) {
      setCountry(null);
    }
  }, []);

  const checkWeather = latlng => {
    fetchWeatherData(latlng).then(res => {
      let data = res.current;
      let wtype = 'sunny';
      if (data.rain > 0) wtype = 'rainy';
      if (data.snowfall > 0) wtype = 'snowy';
      setWeather({
        type: wtype,
        temp: data.apparent_temperature,
      });
    });
  };

  const onGoBack = () => {
    props.navigation.goBack();
  };

  return (
    <>
      <DetailsHeader
        title={country && country.name.common}
        temp={weather ? weather.temp : ''}
        weather={weather ? weather.type : 'sunny'}
        onGoBack={onGoBack}
      />
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.Image
          sharedTransitionTag="shared_transition_flag"
          source={{
            uri: props.route.params.country.flag,
          }}
          resizeMode={'contain'}
          style={styles.headerImage}
        />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.countryName}>
              {country ? country.name.official : ''}
            </Text>
          </View>
          {country ? (
            <>
              <GlobalCountryDetails
                capital={country.capital}
                commonName={country.name.common}
                officialName={country.name.official}
                population={country.population}
                region={country.region}
                subregion={country.subregion}
              />
              <View style={styles.currenciesContainer}>
                <Text style={styles.currenciesTitle}>Devises</Text>
                {Object.keys(country.currencies).map(val => {
                  return (
                    <View style={styles.currencyItem}>
                      <Text style={styles.currencyText}>
                        -{country.currencies[val].name}{' '}
                        {country.currencies[val].symbol}
                      </Text>
                    </View>
                  );
                })}
              </View>
              <OpenInMapsButton mapsLink={country.maps.googleMaps} />
            </>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default DetailsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    width: '90%',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  countryName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#184351',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  headerImage: {
    height: Dimensions.get('screen').width * 0.5,
    width: Dimensions.get('screen').width * 0.5,
    borderRadius: 10,
  },
  currenciesContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    elevation: 5,
    marginBottom: 10,
  },
  currenciesTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#184351',
  },
  currencyText: {
    fontSize: 23,
    color: '#184351',
  },
});
