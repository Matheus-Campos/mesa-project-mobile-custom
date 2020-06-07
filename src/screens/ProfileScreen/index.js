import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActivityIndicator, View} from 'react-native';
import PropTypes from 'prop-types';

import {Creators as AuthActions} from '../../store/ducks/auth';
import {Creators as UserActions} from '../../store/ducks/user';

import {
  Container,
  TextField,
  Label,
  Button,
  ButtonText,
  ErrorText,
} from './styles';

const ProfileScreen = ({
  user,
  loading,
  errorMsg,
  updateUserRequest,
  logout,
}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const updateUser = () => {
    updateUserRequest({
      username,
      email,
      password,
      new_password: newPassword,
    });
  };

  return (
    <Container>
      <View>
        {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
        <Label>NOME</Label>
        <TextField
          autoCorrect={false}
          autoCapitalize="words"
          underlineColorAndroid="transparent"
          value={username}
          onChangeText={setUsername}
          placeholder={user ? user.username : ''}
          maxLength={60}
        />
        <Label>E-MAIL</Label>
        <TextField
          autoCorrect={false}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholder={user ? user.email : ''}
        />
        <Label>SENHA ATUAL</Label>
        <TextField
          autoCorrect={false}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          value={password}
          onChangeText={setPassword}
          placeholder="••••••"
          secureTextEntry
        />
        <Label>NOVA SENHA</Label>
        <TextField
          autoCorrect={false}
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
          placeholder="••••••"
        />
        <Button onPress={updateUser} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <ButtonText>ATUALIZAR INFORMACOES</ButtonText>
          )}
        </Button>
      </View>
      <Button bgColor="red" onPress={logout} disabled={loading}>
        <ButtonText>SAIR</ButtonText>
      </Button>
    </Container>
  );
};

ProfileScreen.propTypes = {
  logout: PropTypes.func.isRequired,
  updateUserRequest: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
  }),
  errorMsg: PropTypes.string,
};

ProfileScreen.defaultProps = {
  user: null,
  errorMsg: null,
};

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  user: state.auth.user,
  errorMsg: state.user.errorMsg,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({...UserActions, ...AuthActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
