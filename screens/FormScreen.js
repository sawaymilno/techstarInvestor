import React, { Component } from 'react';
// import axios from 'axios';
import { View, Platform } from 'react-native';
import { Icon } from 'react-native-elements';
// import { MapView, Permissions } from 'expo';
import { connect } from 'react-redux';

import { Header, Card, CardSection, Input, Button, Spinner } from '../components/common';
import * as actions from '../actions';
 
class FormScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'form',
    tabBarIcon: ({ tintColor }) => <Icon name="my-location" size={30} color={tintColor} />, 
    headerRight: 
          <Button
            title="Settings"
            onPress={() => navigation.navigate('settings')}
            backgroundColor="rgba(0,0,0,0)"
            color="rgba(0, 122, 255, 1)"
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
    
  onButtonPress = () => this.props.buildCustomList(this.props);
  onCityChange = (text) => this.props.cityChanged(text);

  // onPasswordChange = (text) => {
  //   this.props.passwordChanged(text);
  // }


  renderButton = () => {
    if (this.props.loading) {
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
      <Card>
        <CardSection>
          <Input
            label="City"
            placeholder="city"
            onChangeText={this.onCityChange}
            value={this.props.city}
          />
        </CardSection>

        {/* <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection> */}

        <CardSection>
        {this.renderButton()}
        </CardSection>
      </Card>
      </View>
          // <View style={{ flex: 1 }}>
          // <Header />
          //   <MapView
          //     region={this.state.region}
          //     style={{ flex: 1 }}
          //     onRegionChangeComplete={this.onRegionChangeComplete}
          //   />
            
          // </View>
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

const mapStateToProps = ({ form }) => {
  const { city, companies } = form;
  return { city, companies };
};
 
export default connect(mapStateToProps, actions)(FormScreen);
