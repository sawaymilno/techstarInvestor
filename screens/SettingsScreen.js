import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { clearLikedCompanies } from '../actions';
import { Button, CardSection, CustomCard } from '../components/common';

class SettingsScreen extends Component {

  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0,
        color: 'white',
      }
    
  }

  returnToSettings = () => {
  this.props.navigation.navigate('deck');
  this.props.clearLikedCompanies();
  }

  render() {
    return (
      <View style={{ marginTop: 250 }}>
        <CardSection>
          <Button
            // ButtonStyle={styles}
            title="Delete All Saved Companies"
            large
            icon={{ name: 'delete-forever' }}
            
            onPress={this.returnToSettings}
          >Delete All Saved Companies</Button>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  backgroundColor: '#0DB14B'
};

export default connect(null, { clearLikedCompanies })(SettingsScreen);
