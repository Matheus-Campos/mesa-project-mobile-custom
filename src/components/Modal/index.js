import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Platform, Modal as RNModal, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import {Creators as LocationActions} from '../../store/ducks/location';

import GooglePlacesInput from '../GooglePlacesInput';

import {
  Container,
  Content,
  Title,
  TextField,
  Label,
  Button,
  ButtonText,
  Row,
} from './styles';

function findComponentByType(components, type, fallback) {
  const foundElement = components.find((component) =>
    component.types.includes(type),
  );
  return foundElement ? foundElement.long_name : fallback;
}

const Modal = ({visible, onRequestClose, loading, createLocationRequest}) => {
  const [newLocation, setNewLocation] = useState(null);
  const [name, setName] = useState('');

  const selectLocation = (_, details) => {
    const {
      address_components,
      geometry: {location},
    } = details;

    const zipcode = findComponentByType(address_components, 'postal_code', '');
    const country = findComponentByType(address_components, 'country', '');
    const state = findComponentByType(
      address_components,
      'administrative_area_level_1',
      '',
    );
    const city = findComponentByType(
      address_components,
      'administrative_area_level_2',
      '',
    );
    const district = findComponentByType(address_components, 'sublocality', '');
    const street = findComponentByType(address_components, 'route', '');
    const streetNumber = findComponentByType(
      address_components,
      'street_number',
      'S/N',
    );

    const data = {
      lat: location.lat,
      lng: location.lng,
      zipcode,
      country,
      state,
      city,
      district,
      street,
      streetNumber,
    };

    setNewLocation(data);
  };

  const quitModal = () => {
    setNewLocation(null);
    setName('');
    onRequestClose();
  };

  const createLocation = () => {
    if (!newLocation || !name) {
      alert(
        'É necessário preencher todos os campos para cadastrar um novo local.',
      );
    }

    createLocationRequest(
      {
        name,
        lat: newLocation.lat,
        lng: newLocation.lng,
      },
      quitModal,
    );
  };

  return (
    <RNModal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onRequestClose}>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <Content>
          <Title>CADASTRAR NOVO LOCAL</Title>
          <Label>NOME DO LOCAL</Label>
          <TextField
            autoFocus
            autoCorrect={false}
            autoCapitalize="words"
            underlineColorAndroid="transparent"
            value={name}
            onChangeText={setName}
          />
          <Label>ENDEREÇO DO LOCAL</Label>
          <GooglePlacesInput onPress={selectLocation} />
          <Row>
            <Button onPress={quitModal}>
              <ButtonText>CANCELAR</ButtonText>
            </Button>
            <Button color="green" onPress={createLocation}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <ButtonText>CADASTRAR</ButtonText>
              )}
            </Button>
          </Row>
        </Content>
      </Container>
    </RNModal>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  createLocationRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.location.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(LocationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
