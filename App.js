import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FBScreen from './Screens/fb';
import INScreen from './Screens/in';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {
    screen: FBScreen
  },
  Instagram: {
    screen: INScreen
  }
});

const AppContainer = createAppContainer(TabNavigator);