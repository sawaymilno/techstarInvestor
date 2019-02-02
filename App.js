// import { Notifications } from 'expo';
import React from 'react';
// import { StyleSheet, Alert } from 'react-native';
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
    
    const ReviewNavigator = createStackNavigator(
      {
        review: ReviewScreen,
        settings: SettingsScreen
      },
      {
        navigationOptions: {
          headerStyle: styles.container,
          title: 'Review Jobs',
          tabBarIcon: ({ tintColor }) => <Icon name="favorite" size={30} color={tintColor} />
        }
      }
    ); 

    const MainNavigator = createBottomTabNavigator(
      {
      form: FormScreen,
      deck: DeckScreen,
      screen: ReviewNavigator
      }, 
      {
        navigationOptions: { 
          tabBarVisible: false, 
          tabBarPosition: 'bottom',
          tabBarOptions: {
            labelStyle: { fontSize: 12 }
          }
        }
      }
    );
  
    const Navigator = createAppContainer(createBottomTabNavigator({
      //change back to WelcomeScreen after testing
      // welcome: FormScreen,
      welcome: WelcomeScreen,  
      auth: AuthScreen,  
      main: MainNavigator
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
