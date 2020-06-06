import React, {useState, useRef} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Platform, View, Text, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import * as navigation from '../../services/navigation';
import {Creators as AuthActions} from '../../store/ducks/auth';
import {
  Container,
  Title,
  Label,
  TextField,
  Button,
  ButtonText,
  SignUpText,
  ErrorText,
} from './styles';

const SignInScreen = ({signInRequest, loading, errorMsg}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordInputRef = useRef();

  const goToSignUpScreen = () => {
    navigation.navigate('SignUp');
  };

  const signIn = () => {
    signInRequest({email, password});
  };

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <View>
        <Title>MESA</Title>
        {errorMsg && <ErrorText>{errorMsg}</ErrorText>}

        <Label>E-MAIL</Label>
        <TextField
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={email}
          onChangeText={setEmail}
          placeholder="exemplo@email.com"
          autoFocus
          returnKeyType="next"
          onSubmitEditing={() => passwordInputRef.current.focus()}
          blurOnSubmit={false}
        />
        <Label>SENHA</Label>
        <TextField
          ref={passwordInputRef}
          autoCorrect={false}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          value={password}
          onChangeText={setPassword}
          placeholder="sua senha favorita"
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={signIn}
        />
        <Button onPress={signIn}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <ButtonText>ENTRAR</ButtonText>
          )}
        </Button>

        <SignUpText onPress={goToSignUpScreen}>Cadastre-se aqui</SignUpText>
      </View>
    </Container>
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
