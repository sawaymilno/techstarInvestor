import _ from 'lodash';
import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';
// import tsLogoPrimary from '../assets';

const SLIDE_DATA = [
  { text: 'Welcome to TechStar InVestor', color: '#2A3842', image: require('../assets/tsLogo_Primary.png'), textColor: '#6D91A3' },
  { text: 'We provide the company data', color: '#0DB14B', image: require('../assets/tsLogo_Green.png'), textColor: '#0DB14B' },
  { text: 'You provide the support!', color: '#6D91A3', image: require('../assets/tsLogo_Black.png'), textColor: '#2A3842' }
];


class WelcomeScreen extends Component {
  state = { token: null }

  //uncomment this mount during production

  
  // componentWillMount() {
  //   const config = {
  //     apiKey: 'AIzaSyAFN50pZDzZdo4pw561Q_ZCeO7M_q9P2w4',
  //     authDomain: 'techstarinvestors-a26a9.firebaseapp.com',
  //     databaseURL: 'https://techstarinvestors-a26a9.firebaseio.com',
  //     projectId: 'techstarinvestors-a26a9',
  //     storageBucket: 'techstarinvestors-a26a9.appspot.com',
  //     messagingSenderId: '474773388634'
  //   };
  //   firebase.initializeApp(config);
  // }

  // async componentWillMount() {
  //   let token = await AsyncStorage.getItem('fb_token');

  //   if (token) {
  //     this.props.navigation.navigate('form');
  //     this.setState({ token });
  //   } else {
  //     this.setState({ token: false });
  //   }
  // }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    // if (_.isNull(this.state.token)) {
    //   return <AppLoading />;
    // }

    return (
      <Slides 
      data={SLIDE_DATA} 
      onComplete={this.onSlidesComplete} 
      />
    );
  }
}

export default WelcomeScreen;

