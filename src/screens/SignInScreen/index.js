import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

import {Creators as AuthActions} from '../../store/ducks/auth';

const SignInScreen = ({signInRequest, loading, errorMsg}) => {
  const [email, setEmail] = useState('marli@test.com');
  const [password, setPassword] = useState('12345678');

  const signIn = () => {
    signInRequest({email, password});
  };

  return (
    <View>
      <Text>Hello world!</Text>
      {errorMsg && <Text>{errorMsg}</Text>}
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
          {loading ? <ActivityIndicator /> : <Text>ENTRAR</Text>}
        </View>
      </TouchableOpacity>
    </View>
  );
};

SignInScreen.propTypes = {
  signInRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  errorMsg: state.auth.errorMsg,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
