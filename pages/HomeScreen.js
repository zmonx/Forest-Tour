

import React, { Component } from 'react'
import { Text, View, Image, Dimensions,ImageBackground,FlatList,Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  container: {
    marginBottom:30,
    flex: 1,
    alignItems: 'center',

  },

  wrapper: {},

  slide: {
    marginTop:-50,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  text2: {
    marginTop:50,
    marginBottom:40,

    alignItems: 'center',
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',

  },
  image: {
    flex: 1,
    width: 500,
    height: 500,
    resizeMode: 'contain'
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: 'white',
    fontSize: 20
  }
}


export default class extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../img/c.jpg')}
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>

    <ScrollView>  
      <View style={styles.container}>
      <Text style={styles.text2}>FOREST TOUR</Text>

        <Swiper          
        style={styles.wrapper}          
        height={240}
        autoplay={true}
        onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }
          dot={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#000',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          paginationStyle={{
            bottom: -23,
            left: null,
            right: 10
          }}
          loop
        >
          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../img/1.jpg')}
            />
          </View>
          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../img/2.jpg')}
            />
          </View>
          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../img/3.jpg')}
            />
          </View>
          <View
            style={styles.slide}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('../img/4.jpg')}
            />
          </View>
        </Swiper>
        
        <Text></Text>
        <Text></Text>

            <Button onPress={() =>{this.props.navigation.navigate('PackageDetail2')}} title="Tourism of Nakhon Si Thammarat's mangrove forests"/>
        <Text></Text>
            <Button onPress={() =>{this.props.navigation.navigate('PackageDetail1')}} title="Foods of Nakhon Si Thammarat's "/>

        
          

      </View>
      </ScrollView>   
      </ImageBackground>
    )
  }
}