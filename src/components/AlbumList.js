//Import statments for the dependencies
import React, { Component } from 'react';
import { View, Text } from 'react-native';

//View construction of the component
class AlbumList extends Component {
  //Set initial state to the component
 state = { albums: [] };

  componentWillMount() {
  //Do the HTTP request to get the JSON data
  this.getList();
  }

  getList() {
    console.log('component will mount called');
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then((responseData => {
      //Set the response data to the state
      this.setState({ albums: responseData });
    }));
  }

  renderAlbums() { 
    return this.state.albums.map(album => <Text>{album.title}</Text>); 
  }

  render() {
    //Checking the set state call response
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}


//Export so can be used
export default AlbumList;
