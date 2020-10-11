import React, { Component } from 'react';
// import { SearchBar } from 'react-native-elements';
import { Text, View, TextInput,StyleSheet, TouchableOpacity ,FlatList ,SearchBar  ,Image } from 'react-native';


export default class CustomerScreen extends Component {

  constructor(props) {
     super(props);
     this.state = {
       data:"",
     };
  }
  componentDidMount = () => {
    fetch('http://172.16.156.128/forest-tour/DB/FT_API/Customer_All.php',{
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
// เอา Source code ที่รุ่นพี่ วิศวะคอม มา ดัดแปลง เรื่อง Sql
  render() {
    return (
        
      <View style={styles.container}>
        
      <FlatList
        data={this.state.data}
        keyExtractor= {(item,index) => index.toString()}
        renderItem={({item})=>
        <View style={{backgroundColor:'#EEB4B4',padding:10,margin:10,borderRadius:10}}>
          <Text style={{color:'#fff', fontWeight:'bold'}} >
         
            <Image style={styles.img} source={require('../DB/Staff/7502.jpg')} ></Image>{'\n'}{'\n'}
            <Text style={{color:'#000000'}}>รหัสลูกค้า: {item.CID}</Text>{'\n'}
            <Text style={{color:'#000000'}}>ชื่อลูกค้า: {item.CName}</Text>{'\n'}
            <Text style={{color:'#000000'}}>เพศ : {item.CSex}</Text>

            </Text>
          <Text style={{color:'#fff'}}>โทร: {item.CTelephone}</Text>
        </View>
        } 
      />
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
  img: {
    // flex: 1, 
    // resizeMode: 'cover',
    width:50,
    height:50,
    marginBottom:30
  },
});

