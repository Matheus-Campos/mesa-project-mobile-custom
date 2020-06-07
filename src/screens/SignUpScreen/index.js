import React, {useRef, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {Creators as AuthActions} from '../../store/ducks/auth';
import {
  Container,
  Label,
  TextField,
  Button,
  ButtonText,
  ErrorText,
} from './styles';

const SignUpScreen = ({errorMsg, loading, signUpRequest}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfirmationInputRef = useRef();

  const signUp = () => {
    signUpRequest({
      username,
      email,
      password,
      password_confirmation: passwordConfirmation,
    });
  };

  return (
    <Container>
      <View>
        {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
        <Label>NOME</Label>
        <TextField
          autoCapitalize="words"
          underlineColorAndroid="transparent"
          value={username}
          onChangeText={setUsername}
          autoFocus
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => emailInputRef.current.focus()}
          placeholder="José Maria"
          maxLength={60}
        />
        <Label>E-MAIL</Label>
        <TextField
          ref={emailInputRef}
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          autoCorrect={false}
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordInputRef.current.focus()}
          placeholder="exemplo@email.com"
        />
        <Label>SENHA</Label>
        <TextField
          ref={passwordInputRef}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordConfirmationInputRef.current.focus()}
          placeholder="sua melhor senha"
        />
        <Label>CONFIRMAÇÃO DE SENHA</Label>
        <TextField
          ref={passwordConfirmationInputRef}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          autoCapitalize="none"
          value={passwordConfirmation}
          onChangeText={setPasswordConfirmation}
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={signUp}
          placeholder="confirmação da sua melhor senha"
        />

        <Button onPress={signUp} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <ButtonText>CADASTRAR</ButtonText>
          )}
        </Button>
      </View>
    </Container>
  );
};

SignUpScreen.propTypes = {
  errorMsg: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  signUpRequest: PropTypes.func.isRequired,
};

SignUpScreen.defaultProps = {
  errorMsg: null,
};

const mapStateToProps = (state) => ({
  errorMsg: state.auth.signUpErrorMsg,
  loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
