import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Card, Icon } from 'react-native-elements';
import Swipe from '../components/Swipe';
import { Header, Button, CustomCard, CardSection, Result } from '../components/common';
import * as actions from '../actions';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Companies',
    tabBarIcon: ({ tintColor }) => <Icon name="description" size={30} color={tintColor} /> 
  }

  clearTheForm = () => {
    this.props.clearForm();
    this.props.navigation.navigate('form');
  }

  renderCard(company) {
    return (
      <Card title={company.name} >
        <View style={styles.cardStyle} >
          <View style={styles.rowOneStyle}>
            <View style={styles.imageStyle}>
              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: company.logo_url }}
              />
            </View>
            <View style={styles.locationStyle}>
              <Text>{`${company.location.city_name} ${company.location.state_province_code}. ${company.location.country_code}`}</Text>
            </View>
          </View>
          
          <View>
            <View>
              <Result label="Decription:" value={company.brief_description} />
            </View>
              <Result label="Status:" value={company.status} />
          </View>

            <View style={styles.logoStyle}>
              <Image
                resizeMode="contain"
                style={styles.canvas}
                source={{ uri: company.logo_url }}
              />
            </View>
        </View>
      </Card>
    );
  }
  

  renderNoMoreCards = () => (
    <View style={{ marginTop: 225 }} >
      <CustomCard style={{ backgroundColor: '#6D91A3' }}>
        <CardSection style={{ backgroundColor: '#6D91A3' }}>
          <Button onPress={this.clearTheForm}>
          End Of List Return To Search
          </Button>
        </CardSection>
      </CustomCard>
    </View>
  );
  

  render() {
    return (
      <View style={{ backgroundColor: '#6D91A3', height: SCREEN_HEIGHT }}>
        <Header />
        <View style={{ marginTop: 10 }}>
          <Swipe
            data={this.props.newList}
            renderCard={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards}
            onSwipeRight={company => this.props.likeCompany(company)}
            keyProp="companykey"
          />
        </View>
      </View>
    );
  }

}

const styles = {
  canvas: {
    position: 'absolute', top: 5, left: 5, bottom: 5, right: 5
  },
  cardStyle: {
    height: SCREEN_HEIGHT * 0.6,
  },
  rowOneStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#d6d7da',
    backgroundColor: 'white'
  },
  imageStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
},
  locationStyle: {
    marginLeft: 5,
    marginRight: 5,
    flex: 3,
    alignItems: 'flex-start'
  },
  logoStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#d6d7da',
  }
};

function mapStateToProps({ form }) {
  const { newList, formLoading } = form;
  return { newList, formLoading };
}

export default connect(mapStateToProps, actions)(DeckScreen);
