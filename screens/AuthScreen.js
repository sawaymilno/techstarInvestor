import React, { Component } from 'react';
import axios from 'axios';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { CustomCard, CardSection, Input, Button, Spinner, Header } from '../components/common';
import * as actions from '../actions';

const SCREEN_HEIGHT = Dimensions.get('window').height;


class AuthScreen extends Component {

  onEmailChange = (text) => this.props.emailChanged(text);
  onPasswordChange = (text) => this.props.passwordChanged(text);
  onButtonPress = async () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password }, this.props.navigation.navigate);
    const { data } = await axios.get('https://data.techstars.com/v2/companies');
    this.props.loadCompanyDatabase(data.items);
  }

  renderButton = () => {
    if (this.props.authLoading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress}>
        Login
      </Button>
    );
  }
  
  render() {
    return (
      <View style={{ backgroundColor: '#6D91A3', height: SCREEN_HEIGHT }}>
        <Header />
        <View style={{ marginTop: 225 }}>
          <CustomCard>
            <CardSection>
              <Input
                label="Email"
                placeholder="email@gmail.com"
                onChangeText={this.onEmailChange}
                value={this.props.email}
              />
            </CardSection>

            <CardSection>
              <Input
                secureTextEntry
                label="Password"
                placeholder="password"
                onChangeText={this.onPasswordChange}
                value={this.props.password}
              />
            </CardSection>

            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>

            <CardSection>
              {this.renderButton()}
            </CardSection>
          </CustomCard>
        </View>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth, form }) => {
  const { email, password, error, authLoading } = auth;
  const { formLoading } = form;
  return { email, password, error, authLoading, formLoading };
};

export default connect(mapStateToProps, actions)(AuthScreen);
