import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

/**
 *
 * @param {{
 * commonName:string,
 * officialName:string,
 * capital:string,
 * region:string,
 * subregion:string,
 * population:number
 * }} props
 * @returns
 */
const GlobalCountryDetails = props => {
  const parsePopulation = () => {
    const numberString = props.population.toString();

    return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Text style={styles.textStyle}>Nom commun</Text>
        <Text style={styles.textStyle}>Nom officiel</Text>
        <Text style={styles.textStyle}>Capital</Text>
        <Text style={styles.textStyle}>région</Text>
        <Text style={styles.textStyle}>sous-région</Text>
        <Text style={styles.textStyle}>population</Text>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.textStyle}>{props.commonName}</Text>
        <Text style={styles.textStyle}>{props.officialName}</Text>
        <Text style={styles.textStyle}>{props.capital}</Text>
        <Text style={styles.textStyle}>{props.region}</Text>
        <Text style={styles.textStyle}>{props.subregion}</Text>
        <Text style={styles.textStyle}>{parsePopulation()}</Text>
      </View>
    </View>
  );
};

export default GlobalCountryDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 5,
    padding: 5,
    elevation: 5,
  },
  textStyle: {
    fontSize: 20,
    color: '#184351',
  },
  leftSide: {
    flex: 1,
    borderRightWidth: 0.5,
  },
  rightSide: {
    flex: 1,
    marginLeft: 5,
  },
});
