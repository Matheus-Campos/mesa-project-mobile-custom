import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, FlatList} from 'react-native';

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

const MainScreen = ({getLocationsRequest, locations}) => {
  useEffect(() => {
    getLocationsRequest();
  }, [getLocationsRequest]);

  const goToLocationScreen = (locationId) => {
    console.tron.log(locationId);
    // navigation.navigate('Location', {locationId});
  };

  return (
    <Container>
      <Map locations={locations} />
      <FlatList
        data={locations}
        keyExtractor={(item) => String(item.id)}
        style={{flex: 1}}
        contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 10}}
        renderItem={({item}) => (
          <LocationItem
            location={item}
            onPress={() => goToLocationScreen(item.id)}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
        ListEmptyComponent={() => (
          <View>
            <CentralizedText>Ainda nao ha nada aqui...</CentralizedText>
            <CentralizedText bold>Que tal cadastrar um local?</CentralizedText>
            <Button onPress={() => {}}>
              <ButtonText>CADASTRAR</ButtonText>
            </Button>
          </View>
        )}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  locations: state.location.locations,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(LocationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
