import React from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {Container, Title, DescriptionText} from './styles';

const LocationItem = ({location, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Title>{location.name}</Title>
        <DescriptionText>{`${location.street}, ${location.street_number}`}</DescriptionText>
        <DescriptionText>{`${location.district}, ${location.city}`}</DescriptionText>
        <DescriptionText>{`Adicionado por: ${location.user.username}`}</DescriptionText>
      </Container>
    </TouchableOpacity>
  );
};

LocationItem.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string,
    street: PropTypes.string,
    street_number: PropTypes.string,
    district: PropTypes.string,
    city: PropTypes.string,
    user: PropTypes.shape({
      username: PropTypes.string,
    }),
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default LocationItem;
