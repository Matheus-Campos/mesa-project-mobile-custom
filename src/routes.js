import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PropTypes from 'prop-types';

import {setRootNavigation} from './services/navigation';

import SignInScreen from './screens/SignInScreen';
import MainScreen from './screens/MainScreen';

const Stack = createStackNavigator();

function Routes({isSignedIn}) {
  const navigationRef = useRef();

  useEffect(() => {
    setRootNavigation(navigationRef);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={isSignedIn ? 'Main' : 'SignIn'}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
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

const mapStateToProps = (state) => ({
  isSignedIn: !!state.auth.token,
});

export default connect(mapStateToProps)(Routes);
