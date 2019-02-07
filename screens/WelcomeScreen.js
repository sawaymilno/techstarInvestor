import React, { Component } from 'react';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'welcome to techstars investor', color: '#2A3842', image: require('../assets/tsLogo_Primary.png'), textColor: '#6D91A3' },
  { text: 'we provide the company data', color: '#6D91A3', image: require('../assets/tsLogo_Black.png'), textColor: 'black' },
  { text: 'you provide the support!', color: '#0DB14B', image: require('../assets/tsLogo_Green.png'), textColor: 'white' }
];

class WelcomeScreen extends Component {
  
  onSlidesComplete = async () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <Slides 
      data={SLIDE_DATA} 
      onComplete={this.onSlidesComplete} 
      />
    );
  }
}

export default WelcomeScreen;

