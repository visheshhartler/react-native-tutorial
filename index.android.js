/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//Import a library to create component
import React from 'react';
import {
   AppRegistry,
   View
} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
  <View>
    <Header headerText={'Heading Here'} />
    <AlbumList />
  </View>
);

//Render it to device
AppRegistry.registerComponent('albums', () => App);
