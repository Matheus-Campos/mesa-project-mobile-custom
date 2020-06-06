import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, TouchableOpacity, Text} from 'react-native';

import {Creators as AuthActions} from '../../store/ducks/auth';
import {Creators as LocationActions} from '../../store/ducks/location';

const MainScreen = ({getLocationsRequest, logout, locations}) => {
  useEffect(() => {
    getLocationsRequest();
  }, [getLocationsRequest]);

  const exit = () => logout();

  return (
    <View>
      <TouchableOpacity onPress={exit}>
        <Text>SAIR</Text>
      </TouchableOpacity>
      {locations.map((location) => (
        <View key={location.id}>
          <Text>{location.name}</Text>
        </View>
      ))}
    </View>
  );
};

const mapStateToProps = (state) => ({
  locations: state.location.locations,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({...AuthActions, ...LocationActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
