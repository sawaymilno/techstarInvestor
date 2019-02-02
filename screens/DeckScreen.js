import React, { Component } from 'react';
import { View, Text, Linking, Image } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';
import Swipe from '../components/Swipe';
import * as actions from '../actions';

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Companies',
    tabBarIcon: ({ tintColor }) => <Icon name="description" size={30} color={tintColor} /> 
  }

  renderCard(company) {
    // const initialRegion = {
    //   longitude: company.longitude,
    //   latitude: company.latitude,
    //   latitudeDelta: 0.045,
    //   longitudeDelta: 0.02
    // };
    
    return (
      <Card title={company.name}>
        <View style={{ height: 300 }}>
          <Image
            style={{ width: 175, height: 175 }}
            source={{ uri: company.logo_url }}
          />
          
        </View>
        <View style={{ height: 100 }}>
        <View style={styles.detailWrapper}>
          <Text>Company Name: {company.name}</Text>
          <Text>Company Status: {company.status}</Text>
        </View>
        <Text style={styles.applyWrapper} onPress={() => Linking.openURL(company.url)}>
        Company Website
        </Text>
        </View>
      </Card>
    );
  }
  

  renderNoMoreCards = () => (
      <Card title="No More Companies">
        <Button
          title="Back To form"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03A9F4"
          onPress={() => this.props.navigation.navigate('form')}
        />
      </Card>
    );
  

  render() {
    console.log(this.props, 'in DeckScreen this.props');
    return (
      <View style={{ marginTop: 25 }}>
        <Swipe
          data={this.props.newList}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={company => this.props.likeCompany(company)}
          keyProp="companykey"
        />
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    marginBottom: 10
  },
  applyWrapper: {
    // flexDirection: 'row',
    textAlign: 'center',
    color: 'blue'
  }
};

function mapStateToProps({ form }) {
  const { newList } = form;
  return { newList };
}

export default connect(mapStateToProps, actions)(DeckScreen);
