// import { Notifications } from 'expo';
import React from 'react';
import { /*StyleSheet, Alert*/ Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { 
  createBottomTabNavigator, 
  createAppContainer, 
  createStackNavigator 
} from 'react-navigation';
import { Provider } from 'react-redux';

import firebase from 'firebase';
// import registerForNotifications from './services/push_notifications';
import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import FormScreen from './screens/FormScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

export default class App extends React.Component {
  // componentDidMount() {
  //   registerForNotifications();
  //   Notifications.addListener(notification => {
  //     const { data: { text }, origin } = notification;

  //     if (origin === 'received' && text) {
  //       Alert.alert(
  //         'New Push Notification',
  //         text,
  //         [{ text: 'Ok' }]
  //       );
  //     }
  //   });
  // }

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyAFN50pZDzZdo4pw561Q_ZCeO7M_q9P2w4',
      authDomain: 'techstarinvestors-a26a9.firebaseapp.com',
      databaseURL: 'https://techstarinvestors-a26a9.firebaseio.com',
      projectId: 'techstarinvestors-a26a9',
      storageBucket: 'techstarinvestors-a26a9.appspot.com',
      messagingSenderId: '474773388634'
    };
    firebase.initializeApp(config);
  }

  
  render() {
    console.log('In App');

    const mainOptions = {
      tabBarOptions: {
        activeTintColor: '#2A3842',
        inactiveTintColor: 'white',
        activeBackgroundColor: '#0B9841',
        // inactiveBackgroundColor: ''
        style: {
          backgroundColor: '#0DB14B'
        }
      }
    };

    const Options = { 
      tabBarVisible: false, 
      tabBarPosition: 'bottom',
      tabBarOptions: {
        labelStyle: { fontSize: 12 }
      } 
    };

    const stackStyles = {
      headerTitle: (
        < Image style={{ width: 160, height: 35, marginBottom: 15 }} source={require('./assets/tsLogo_Green_Horiz.png')} />
        ),
      headerStyle: {
        backgroundColor: '#0DB14B',
        headerTintColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
        height: 46,
        // paddingTop: 25,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 2,
        // position: 'relative',
      }
    };
    
    const ReviewNavigator = createStackNavigator(
      {
        review: {
          screen: ReviewScreen,
          navigationOptions: stackStyles
        },
        settings: {
          screen: SettingsScreen,
          navigationOptions: stackStyles
        } 
      },
      {
        navigationOptions: {
          headerStyle: styles.container,
          // title: 'Review Jobs',
          tabBarIcon: ({ tintColor }) => <Icon name="favorite" size={30} color={tintColor} />
        }
      }
    ); 

    const MainNavigator = createBottomTabNavigator(
      {
      form: {
        screen: FormScreen,
        navigationOptions: mainOptions
      },
      deck: {
        screen: DeckScreen,
        navigationOptions: mainOptions
      }, 
      Review: {
        screen: ReviewNavigator,
        navigationOptions: mainOptions
      } 
      }, {
        navigationOptions: Options 
      }
    );
  
    const Navigator = createAppContainer(createBottomTabNavigator({
      //change welcome to WelcomeScreen after testing
      // welcome: FormScreen,
      // welcome: {
      //   screen: WelcomeScreen,
      //   navigationOptions: Options
      // },
      // auth: {
      //   screen: AuthScreen,
      //   navigationOptions: Options
      // },
      welcome: MainNavigator
    }));
 
    return (
      <Provider store={store}>
          <Navigator />
      </Provider>
      );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0DB14B',
    alignItems: 'center',
    justifyContent: 'center',
  },
}; 
