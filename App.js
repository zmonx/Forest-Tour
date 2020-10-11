//This is an example code for Bottom Navigation//
import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//import React Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import CustomerScreen from './pages/CustomerScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import StaffScreen from './pages/StaffScreen';
import PackageScreen from './pages/PackageScreen';
import PackageDetail from './pages/PackageDetail';
import PackageDetail2 from './pages/PackageDetail2';
import PackageDetail1 from './pages/PackageDetail1';
import BookingScreen from './pages/BookingScreen';
import AddBookingScreen from './pages/AddBookingScreen';
import Search from './pages/Search';



const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
   
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
    PackageDetail1: { screen: PackageDetail1 },
    PackageDetail2: { screen: PackageDetail2 },


  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#59A65B',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  }
);
const CustomerStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Customer: { screen: CustomerScreen },
    Details: { screen: DetailsScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#59A65B',
      },
      headerTintColor: '#FFFFFF',
      title: 'Customer',
      //Header title
    },
  }
);

const Staff = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    StaffScreen: { screen: StaffScreen },
   
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#59A65B',
      },
      headerTintColor: '#FFFFFF',
      title: 'STAFF',
      //Header title
    },
  }
);


const Package = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    PackageScreen: { screen: PackageScreen },
    PackageDetail: { screen: PackageDetail },
   
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#59A65B',
      },
      headerTintColor: '#FFFFFF',
      title: 'Package',
      //Header title
    },
  }
);
const Booking = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    BookingScreen: { screen: BookingScreen },
    AddBookingScreen: { screen: AddBookingScreen }

    // PackageDetail: { screen: PackageDetail },
   
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#59A65B',
      },
      headerTintColor: '#FFFFFF',
      title: 'Booking',
      //Header title
    },
  }
);

const Searching = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Search: { screen: Search },
    // AddBookingScreen: { screen: AddBookingScreen }

    // PackageDetail: { screen: PackageDetail },
   
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#59A65B',
      },
      headerTintColor: '#FFFFFF',
      title: 'Search',
      //Header title
    },
  }
);


const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Customer: { screen: CustomerStack },
    Staff: { screen: Staff },
    Package: { screen: Package },
    Booking: { screen: Booking },
    Searching: { screen: Searching },




  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ?
            '' : '-outline'
          }`;
        } else if (routeName === 'Customer') {
          iconName = `ios-people-circle${focused ?
            '' : '-outline'
          }`;
        }else if (routeName === 'Staff') {
          iconName = `ios-people${focused ?
            '' : '-outline'
          }`;
        }else if (routeName === 'Package') {
          iconName = `ios-pricetags${focused ?
            '' : '-outline'
          }`;
        }else if (routeName === 'Booking') {
          iconName = `ios-book${focused ?
            '' : '-outline'
          }`;
        }else if (routeName === 'Searching') {
          iconName = `ios-search${focused ?
            '' : '-outline'
          }`;
        }
        
        // <ion-icon name="people-outline"></ion-icon>
        return <IconComponent
                 name={iconName}
                 size={25}
                 color={tintColor}
               />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#59A65B',
      inactiveTintColor: 'gray',
    },
  }
);
export default createAppContainer(App);
