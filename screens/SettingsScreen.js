import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedCompanies } from '../actions';

class SettingsScreen extends Component {

  static navigationOptions = {
    headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    
  }

  returnToSettings = () => {
  this.props.navigation.navigate('review');
  this.props.clearLikedCompanies();
  }

  render() {
    return (
      <View>
        <Button
          title="Delete All Saved Companies"
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F44336"
          onPress={this.returnToSettings}
        />
      </View>
    );
  }
}

export default connect(null, { clearLikedCompanies })(SettingsScreen);
