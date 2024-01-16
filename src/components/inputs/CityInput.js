import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import {searchCities} from '../../services/CitiesService';

/**
 *
 * @param {{
 * onCountrySelect:Function,
 * onClear:Function
 * }} props
 * @returns
 */
const CityInput = props => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  const onSearch = t => {
    if (t.length > 0) {
      setLoading(true);
      searchCities(t).then(res => {
        setLoading(false);
        setCountries(res);
      });
    } else {
      setCountries([]);
    }
  };

  const onCountrySelect = country => {
    if (props.onCountrySelect) props.onCountrySelect(country);
  };

  const onClearCountry = () => {
    if (props.onClear) props.onClear();
  };

  return (
    <View style={styles.container}>
      <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        textInputProps={{
          placeholder: 'Country name',
        }}
        onClear={onClearCountry}
        closeOnSubmit={false}
        onSelectItem={onCountrySelect}
        debounce={600}
        onChangeText={onSearch}
        loading={loading}
        dataSet={countries}
      />
    </View>
  );
};

export default CityInput;

const styles = StyleSheet.create({});
