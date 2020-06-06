import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container} from './styles';

const RatingRuler = ({selectedRate, onChange}) => {
  const [stars, setStars] = useState([true, true, true, true, true]);

  useEffect(() => {
    setStars((strs) => strs.map((_, index) => index < selectedRate));
  }, [selectedRate]);

  return (
    <Container>
      {stars.map((active, index) => (
        <Icon
          key={index}
          name="star"
          size={30}
          color={active ? 'green' : 'gray'}
          onPress={() => onChange(index + 1)}
        />
      ))}
    </Container>
  );
};

export default RatingRuler;
