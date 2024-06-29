// src/navigations/HomeStackNavigation.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';

const Stack = createNativeStackNavigator();

const HomeStackNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{ 
          title: 'Movie Detail', // Title of the navbar
          headerStyle: {
            backgroundColor: '#fff', // Navbar background color
          },
          headerTintColor: '#000000', // Navbar text color
          headerTitleStyle: {
            fontWeight: 'bold', // Navbar text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
