import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import PropTypes from 'prop-types';

const GooglePlacesInput = ({onPress}) => {
  return (
    <GooglePlacesAutocomplete
      currentLocation
      currentLocationLabel="Minha localização"
      debounce={350}
      placeholder="Procurar localidade"
      query={{
        key: 'AIzaSyBotnVKTte7Mc_AWIoPZyXlmrpnfWepDJM',
        language: 'pt-BR',
      }}
      fetchDetails
      enablePoweredByContainer={false}
      onPress={onPress}
      styles={{
        container: {
          height: 40,
          width: '100%',
        },
        textInputContainer: {
          height: 40,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          backgroundColor: 'transparent',
        },
        textInput: {
          height: 40,
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 0,
          marginBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
        },
        listView: {
          borderWidth: 1,
          borderColor: 'black',
          backgroundColor: 'white',
          maxHeight: 200,
        },
        row: {
          paddingLeft: 15,
          paddingRight: 15,
        }
      }}
    />
  );
};

GooglePlacesInput.propTypes = {
  onPress: PropTypes.func,
};

GooglePlacesInput.defaultProps = {
  onPress: () => {},
};

export default GooglePlacesInput;
