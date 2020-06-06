import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const Map = ({locations}) => {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => {
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        });
      },
      () => {},
      {
        timeout: 30000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      },
    );
  }, []);

  return (
    <MapView style={{flex: 1}} region={region} showsUserLocation loadingEnabled>
      {locations.map((location) => (
        <Marker
          key={location.id}
          title={location.name}
          coordinate={{
            latitude: location.lat,
            longitude: location.lng,
          }}
        />
      ))}
    </MapView>
  );
};

export default Map;
