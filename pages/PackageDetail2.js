import React, { Component } from 'react';
import { Text,Search, View, TextInput,StyleSheet, TouchableOpacity ,FlatList ,SearchBar,Image, ImageBackground   } from 'react-native';





class PackageDetail2 extends Component {


    

  render() {
    return (
      <ImageBackground source={require('../img/1122.jpg')}  style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}></ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  img: {
    // flex: 1, 
    // resizeMode: 'cover',
    width:50,
    height:50,
    marginBottom:30
  },
});

export default PackageDetail2;