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
      onPress={onPress}
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
