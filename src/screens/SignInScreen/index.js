import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {Creators as AuthActions} from '../../store/ducks/auth';

const SignInScreen = ({signInRequest}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    signInRequest({email, password});
  };

  return (
    <View>
      <Text>Hello world!</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        underlineColorAndroid="transparent"
        value={email}
        onChangeText={setEmail}
        placeholder="Seu e-mail"
      />
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        underlineColorAndroid="transparent"
        value={password}
        onChangeText={setPassword}
        placeholder="Sua senha"
        secureTextEntry
      />
      <TouchableOpacity onPress={signIn}>
        <View style={{backgroundColor: 'blue'}}>
          <Text>ENTRAR</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

SignInScreen.propTypes = {
  signInRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignInScreen);
