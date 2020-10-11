import React, { Component } from 'react';
import {  Text, View, Link, TextInput,StyleSheet, TouchableOpacity ,FlatList ,SearchBar ,Button } from 'react-native';
import PackageDetail from "./PackageDetail"

export default class PackageScreen extends Component {

  constructor(props) {
     super(props);
     this.state = {
       data:"",
     };
  }
  

  componentDidMount = () => {
    fetch('http://172.16.29.145/forest-tour/DB/FT_API/package.php',{
       method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
       console.log(responseJson);
       this.setState({data: responseJson})

    })
    .catch((error) => {
       console.error(error);
    });
 }

 render() {
    return (
        
      <View style={styles.container}>
      <Text style={styles.text2}>           PACKAGE</Text>
{/*         
      <FlatList
        data={this.state.data}
        keyExtractor= {(item,index) => index.toString()}
        renderItem={({item})=>
        <View style={{backgroundColor:'#EEB4B4',padding:10,margin:10,borderRadius:10}}>
            <Button onPress={() =>{this.props.navigation.navigate('PackageDetail',{
                id : this.state.PLink
            }
            )}} title={item.PName}/>
        
        </View>
        } 
      /> */}

      <Button onPress={() =>{this.props.navigation.navigate('PackageDetail2')}} title="Tourism of Nakhon Si Thammarat's mangrove forests"/>
        <Text></Text>
        <Button onPress={() =>{this.props.navigation.navigate('PackageDetail1')}} title="Foods of Nakhon Si Thammarat's "/>


           
  </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text2: {
    marginTop:50,
    marginBottom:40,

    // alignItems: 'center',  
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',

  },
});

