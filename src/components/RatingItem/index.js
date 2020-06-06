import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {Container, Comment, Username, Row} from './styles';

const RatingItem = ({rating}) => {
  return (
    <Container>
      <Row>
        <Username>{rating.user.username}</Username>
        <Row>
          {new Array(rating.rating).fill(0).map(() => (
            <Icon name="star" color="green" />
          ))}
        </Row>
      </Row>
      <Comment>{rating.comment || ''}</Comment>
    </Container>
  );
};

RatingItem.propTypes = {
  rating: PropTypes.shape({
    comment: PropTypes.string,
    rating: PropTypes.number,
    user: PropTypes.shape({
      username: PropTypes.string,
    }),
  }).isRequired,
};

export default RatingItem;
