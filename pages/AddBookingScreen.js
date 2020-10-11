import React, { Component } from 'react';
// import { SearchBar } from 'react-native-elements';
import { Text, View, TextInput,StyleSheet, TouchableOpacity ,FlatList ,Button  ,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import CheckBox from 'react-native-check-box';
export default class AddBookingScreen extends Component {

  constructor(props) {
     super(props);
     this.state = {
      TextInputGTour: '',
      TextInputTTour: '',
      TextInputLunch: '',
      TextInputDinner: '',
      TextInputDate: '',
 
     };
  }

  InsertDataToServer = () =>{
 
 
    const { TextInputGTour }  = this.state ;
    const { TextInputTTour }  = this.state ;
    const { TextInputLunch }  = this.state ;
    const { TextInputDinner }  = this.state ;
    const { TextInputDate }  = this.state ;
    const { TextInputname }  = this.state ;
    const { TextInputtel }  = this.state ;
    const { TextInputsex }  = this.state ;

  
    fetch('http://172.16.156.128/forest-tour/DB/FT_API/Customer_Insert.php',{
       method: 'POST',
       body: JSON.stringify({
        name: TextInputname,
        tel: TextInputtel,
        sex: TextInputsex,
        

     
      })
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

 componentDidMount2 = () => {
  fetch('http://172.16.156.128/forest-tour/DB/FT_API/Booking_Reser.php',{
     method: 'POST',
     body: JSON.stringify({

      GTour: TextInputGTour,
        TTour: TextInputTTour,
        Lunch: TextInputLunch,
        Dinner: TextInputDinner,
        Date : TextInputDate
     

   
    })
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
     

    <TextInput
          placeholder="Enter Name"
          onChangeText={TextInputname => this.setState({TextInputname})}
          underlineColorAndroid='transparent'
           style={styles.TextInputStyleClass}
        />
 
        <TextInput
          placeholder="SEX || Male -> Enter M | Female -> Enter F"
          onChangeText={TextInputsex => this.setState({TextInputsex})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
 

        <TextInput
          placeholder="Enter Phone Number"
          onChangeText={TextInputtel => this.setState({TextInputtel})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />
        <CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    leftText={"GTour"}
/>
<CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    leftText={"TTour"}
/>
<CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    leftText={"Lunch"}
/>
<CheckBox
    style={{flex: 1, padding: 10}}
    onClick={()=>{
      this.setState({
          isChecked:!this.state.isChecked
      })
    }}
    isChecked={this.state.isChecked}
    leftText={"Dinner"}
/>
 
        <Button title="Insert Text Input Data to Server" onPress={this.InsertDataToServer} color="#2196F3" />    




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
  TextInputStyleClass: {
   
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    // Set border Hex Color Code Here.
     borderColor: '#FF5722',
     
    // Set border Radius.
     //borderRadius: 10 ,
    }
    
     
});

