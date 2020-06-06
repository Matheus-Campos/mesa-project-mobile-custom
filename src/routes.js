import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {navigationRef} from './services/navigation';

import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import MainScreen from './screens/MainScreen';
import ProfileScreen from './screens/ProfileScreen';
import LocationScreen from './screens/LocationScreen';

const OuterStack = createStackNavigator();
const InnerStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const InnerStackRoot = () => (
  <InnerStack.Navigator>
    <InnerStack.Screen
      name="Main"
      component={MainScreen}
      options={{headerShown: false}}
    />
    <InnerStack.Screen name="Location" component={LocationScreen} />
  </InnerStack.Navigator>
);

const Tabs = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: 'rgba(0, 0, 0, 0.5)',
      labelStyle: {fontSize: 14},
    }}>
    <Tab.Screen
      name="Main"
      component={InnerStackRoot}
      options={{
        title: 'Locais',
        tabBarIcon: ({color}) => <Icon name="map" size={28} color={color} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: 'Perfil',
        tabBarIcon: ({color}) => <Icon name="person" size={28} color={color} />,
      }}
    />
  </Tab.Navigator>
);

const Routes = ({auth}) => {
  if (!auth.authChecked) {
    return null;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <OuterStack.Navigator>
        {auth.isSignedIn ? (
          <OuterStack.Screen
            name="Main"
            component={Tabs}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <OuterStack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{headerShown: false}}
            />
            <OuterStack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{title: 'Cadastro'}}
            />
          </>
        )}
      </OuterStack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Routes);
