import React, { Component } from 'react';
// import axios from 'axios';
import {View,Text, Alert,ImageBackground} from 'react-native';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inDollars: '',
      inEuro: '',
      inPounds: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
        this.props.navigation.navigate('HomeStack')
      }, 5000);
  }
 

  render() {
    return (
        <ImageBackground source={require('../img/back.jpg')}  style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}></ImageBackground>

    );
  }
}

export default Splash;