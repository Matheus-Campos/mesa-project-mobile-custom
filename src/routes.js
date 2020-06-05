import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PropTypes from 'prop-types';

import SignInScreen from './screens/SignInScreen';

const Stack = createStackNavigator();

export default function Routes({isSignedIn}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isSignedIn ? 'Main' : 'SignIn'}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

Routes.propTypes = {
  isSignedIn: PropTypes.bool,
};

Routes.defaultProps = {
  isSignedIn: false,
};
