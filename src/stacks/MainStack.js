// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={
            ({ navigation, route }) => ({
              headerShown: true,
              title: "Home"
            })
          } />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={
            ({ navigation, route }) => ({
              headerShown: true,
              title: route.params.title
            })
          } />
      </Stack.Navigator>
  );
}

export default App;