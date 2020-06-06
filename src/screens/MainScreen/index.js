import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, FlatList} from 'react-native';
import PropTypes from 'prop-types';

import Map from '../../components/Map';
import LocationItem from '../../components/LocationItem';

// import * as navigation from '../../services/navigation';

import {Creators as LocationActions} from '../../store/ducks/location';

import {
  Container,
  Separator,
  Button,
  ButtonText,
  CentralizedText,
} from './styles';

const MainScreen = ({getLocationsRequest, locations, loading}) => {
  useEffect(() => {
    getLocationsRequest();
  }, [getLocationsRequest]);

  const goToLocationScreen = (locationId) => {
    console.tron.log(locationId);
    // navigation.navigate('Location', {locationId});
  };

  const goToNewLocationScreen = () => {
    console.tron.log('Novo local');
  };

  return (
    <Container>
      <Map locations={locations} />
      <FlatList
        data={locations}
        keyExtractor={(item) => String(item.id)}
        style={{flex: 1}}
        contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 10}}
        showsVerticalScrollIndicator={false}
        refreshing={loading}
        onRefresh={getLocationsRequest}
        renderItem={({item}) => (
          <LocationItem
            location={item}
            onPress={() => goToLocationScreen(item.id)}
          />
        )}
        ListHeaderComponent={() => {
          if (!locations.length) {
            return null;
          }

          return (
            <Button onPress={goToNewLocationScreen}>
              <ButtonText>CADASTRAR LOCAL</ButtonText>
            </Button>
          );
        }}
        ItemSeparatorComponent={() => <Separator />}
        ListEmptyComponent={() => (
          <View>
            <CentralizedText>Ainda nao ha nada aqui...</CentralizedText>
            <CentralizedText bold>Que tal cadastrar um local?</CentralizedText>
            <Button onPress={goToNewLocationScreen}>
              <ButtonText>CADASTRAR</ButtonText>
            </Button>
          </View>
        )}
      />
    </Container>
  );
};

MainScreen.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  locations: state.location.locations,
  loading: state.location.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(LocationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
