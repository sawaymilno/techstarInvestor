import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner, Header } from '../components/common';
import * as actions from '../actions';
// import { emailChanged, passwordChanged, loginUser } from '../actions';


class AuthScreen extends Component {
  // componentDidMount() {
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

  // componentWillReceiveProps(nextProps) {
  //   this.onAuthComplete(nextProps);
  // }

  // onAuthComplete(props) {
  //   if (props.token) {
  //     this.props.navigation.navigate('form');
  //   }
  // }

  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  }

  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password }, this.props.navigation.navigate);
  }

  renderButton = () => {
    if (this.props.loading) {
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
      <View>
        <Header />
      <Card>
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
      </Card>
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

// function mapStateToProps({ auth }) {
//   return { token: auth.token };
// }
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, actions)(AuthScreen);


// export default connect(mapStateToProps, {
//   emailChanged, passwordChanged, loginUser
// })(LoginForm);
