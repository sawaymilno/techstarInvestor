import React, { Component } from 'react';
// import axios from 'axios';
import { View, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
// import { MapView, Permissions } from 'expo';
import { connect } from 'react-redux';

import { Header, CustomCard, CardSection, Input, Button, Spinner } from '../components/common';
import * as actions from '../actions';
 
class FormScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'form',
    tabBarIcon: ({ tintColor }) => <Icon name="my-location" size={30} color={tintColor} />, 
    headerRight: 
          <Button
            title="Settings"
            onPress={() => navigation.navigate('settings')}
            backgroundColor="rgba(109, 145, 163)"
            color="rgba(13, 177, 75)"
          />,
        style: {
          marginTop: Platform.OS === 'android' ? 24 : 0
        } 
  });

  state = {
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }
  // async componentDidMount() {
      // await Permissions.askAsync(Permissions.LOCATION);
  // }
  
  // onRegionChangeComplete = (region) => {
    //   this.setState({ region });
    // }
    
  onButtonPress = () => {
    // console.log(this.props, 'this.props onButtonPress');
    // store();
    // console.log(item, 'item in button');
    // console.log(this, 'this');
    // if (this.props.companies.length === 0) {
    //     this.props.loadingChanged(true);
    //     console.log('in if statement after this');
    //    (subscribe) => {
    //     console.log('in the subscribe function');
        
    //     subscribe(this.props.buildCustonList(this.props), this.props.loadingChanged(false));
    //   };
    // }
        this.props.buildCustomList(this.props);
    //     this.props.loadingChanged(false);
  };

  onCityChange = (text) => this.props.cityChanged(text);
  onStatusChange = (text) => this.props.statusChanged(text);

  renderButton = () => {
    if (this.props.formLoading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress}>
        Search
      </Button>
    );
  }
 
  render() {
    return (
      <View>
        <Header />
        <CustomCard>
          <CardSection>
            <Input
              label="City"
              placeholder="city"
              onChangeText={this.onCityChange}
              value={this.props.city}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Status"
              placeholder="status"
              onChangeText={this.onStatusChange}
              value={this.props.status}
            />
          </CardSection>

          <CardSection>
          {this.renderButton()}
          </CardSection>

         </CustomCard>
      </View>
    );
  }
}
    
// const styles = {
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 20,
//     left: 0,
//     right: 0
//   }
// };

const mapStateToProps = ({ form, }) => {
  const { city, companies, status, formLoading } = form;
  return { city, companies, status, formLoading };
};
 
export default connect(mapStateToProps, actions)(FormScreen);
