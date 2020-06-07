import React, {useEffect, useState, useMemo} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActivityIndicator, FlatList} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useRoute} from '@react-navigation/native';
import PropTypes from 'prop-types';

import RatingItem from '../../components/RatingItem';
import RatingRuler from '../../components/RatingRuler';

import {Creators as LocationActions} from '../../store/ducks/location';

import {
  Container,
  Content,
  InfoContainer,
  InfoBackground,
  InfoText,
  InfoLabel,
  TextField,
  Button,
  ButtonText,
  Row,
  Separator,
} from './styles';

const LocationScreen = ({
  location,
  loading,
  getLocationRequest,
  rateLocationRequest,
  signedUser,
  navigation,
}) => {
  const {params} = useRoute();

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (location) {
      navigation.setOptions({title: location.name});
    }
  }, [location, navigation]);

  useEffect(() => {
    if (params.locationId) {
      getLocationRequest(params.locationId);
    }
  }, [params.locationId, getLocationRequest]);

  const isAbleToRate = useMemo(
    () =>
      location && location.ratings.every((r) => r.user.id !== signedUser.id),
    [location, signedUser.id],
  );

  const sendRating = () => {
    rateLocationRequest({
      location_id: params.locationId,
      rating,
      comment,
    });
  };

  if (!location) {
    return (
      <Container>
        <ActivityIndicator style={{marginTop: 30}} />
      </Container>
    );
  }

  return (
    <Container keyboardShouldPersistTaps="handled">
      <Content>
        <MapView
          style={{flex: 1}}
          region={{
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          }}
          loadingEnabled>
          <Marker
            title={location.name}
            coordinate={{
              latitude: location.lat,
              longitude: location.lng,
            }}
          />
        </MapView>
      </Content>
      <InfoContainer>
        <InfoBackground>
          <Row>
            <InfoLabel>Endereco: </InfoLabel>
            <InfoText>{location.street}</InfoText>
          </Row>
          <Row>
            <InfoLabel>Numero: </InfoLabel>
            <InfoText>{location.street_number}</InfoText>
          </Row>
          <Row>
            <InfoLabel>Bairro: </InfoLabel>
            <InfoText>{location.district}</InfoText>
          </Row>
          <Row>
            <InfoLabel>Cidade: </InfoLabel>
            <InfoText>{location.city}</InfoText>
          </Row>
          <Row>
            <InfoLabel>Estado: </InfoLabel>
            <InfoText>{location.state}</InfoText>
          </Row>
          <Row>
            <InfoLabel>Pais: </InfoLabel>
            <InfoText>{location.country}</InfoText>
          </Row>
          <Row>
            <InfoLabel>Codigo postal: </InfoLabel>
            <InfoText>{location.zipcode}</InfoText>
          </Row>
        </InfoBackground>
        {isAbleToRate && (
          <InfoBackground>
            <RatingRuler selectedRate={rating} onChange={setRating} />
            <TextField
              autoCorrect
              autoCapitalize="sentences"
              underlineColorAndroid="transparent"
              value={comment}
              onChangeText={setComment}
              placeholder="Sua avaliacao aqui"
            />
            <Button onPress={sendRating}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <ButtonText>AVALIAR</ButtonText>
              )}
            </Button>
          </InfoBackground>
        )}
        <InfoBackground>
          <FlatList
            data={location.ratings}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <RatingItem rating={item} />}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <Separator />}
            ListHeaderComponent={() => <InfoLabel>Avaliações</InfoLabel>}
            ListEmptyComponent={() => (
              <InfoText>Seja o primeiro a avaliar...</InfoText>
            )}
          />
        </InfoBackground>
      </InfoContainer>
    </Container>
  );
};

LocationScreen.propTypes = {
  rateLocationRequest: PropTypes.func.isRequired,
  getLocationRequest: PropTypes.func.isRequired,
  location: PropTypes.shape({}),
  loading: PropTypes.bool.isRequired,
  signedUser: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

LocationScreen.defaultProps = {
  location: null,
  loading: false,
};

const mapStateToProps = (state) => ({
  location: state.location.selectedLocation,
  loading: state.location.loading,
  signedUser: state.auth.user,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(LocationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LocationScreen);
