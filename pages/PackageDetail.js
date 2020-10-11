import React, { Component } from 'react';
import { WebView } from 'react-native';




class PackageDetail extends Component {


    constructor(props) {
        super(props);
        const {navigation} =this.props;
        this.state = {
          data:"",
          url : navigation.getParam('url',''),
        };
     }





  render() {
    return (
      <WebView
      source={{ uri: 'https://www.google.com/' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default PackageDetail;