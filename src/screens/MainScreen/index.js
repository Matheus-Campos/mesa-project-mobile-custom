import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, TouchableOpacity, Text, AsyncStorage} from 'react-native';

import * as navigation from '../../services/navigation';

import {Creators as AuthActions} from '../../store/ducks/auth';

const MainScreen = ({logout}) => {
  const exit = async () => {
    logout();
    await AsyncStorage.removeItem('@user:token');
    navigation.navigate('SignIn');
  };

  return (
    <View>
      <TouchableOpacity onPress={exit}>
        <Text>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(MainScreen);
