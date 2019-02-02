import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedJobs } from '../actions';

class SettingsScreen extends Component {

  static navigationOptions = {
    headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    
  }

  returnToSettings = () => {
  // console.log(this.props, 'in Form_actions: this.props');

  this.props.navigation.navigate('review');
  this.props.clearLikedJobs();
  }

  render() {
    return (
      <View>
        <Button
          title="Delete All Saved Jobs"
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F44336"
          onPress={this.returnToSettings}
        />
      </View>
    );
  }
}

export default connect(null, { clearLikedJobs })(SettingsScreen);
