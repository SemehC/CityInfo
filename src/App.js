import React from 'react';
import {SafeAreaView} from 'react-native';
import {CityInfoStack} from './navigation';
import {NavigationContainer} from '@react-navigation/native';
import {AutocompleteDropdownContextProvider} from 'react-native-autocomplete-dropdown';

function App() {
  return (
    <NavigationContainer>
      <AutocompleteDropdownContextProvider>
        <CityInfoStack />
      </AutocompleteDropdownContextProvider>
    </NavigationContainer>
  );
}

export default App;
