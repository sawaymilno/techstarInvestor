import React, { Component } from 'react';
import { View, Text, Linking, Image, Dimensions } from 'react-native';
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

  renderCard(company) {
    return (
      <Card title={company.name} >
      <View style={styles.cardStyle}>

          <View style={styles.imageWrapper}>
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
              <Result label="Details:" value={company.brief_description} />
            </View>

            <View>
              <Result label="Crunch Base:" value={company.crunchbase_url} />
            </View>

            <View>
              <Result label="Tags:" value={company.tags} />
            </View>
        </View>
      </View>
        </Card>
    );
  }
  

  renderNoMoreCards = () => (
    <View style={{ marginTop: 225 }} >
        <CardSection>
          <Button onPress={() => this.props.navigation.navigate('form')}>
          End Of List Return To Search
          </Button>
        </CardSection>
        </View>

    );
  

  render() {
    console.log(this.props, 'in DeckScreen this.props');
    return (
      <View>
        <Header />
        <View style={{ marginTop: 25 }}>
          <Swipe
            // style={styles.cardStyle}
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
  cardStyle: {
    height: SCREEN_HEIGHT/2
  },
  imageWrapper: {
    // paddingLeft: 10,
    // height: 40,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#d6d7da',
  },
  imageStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // height: 300,
    // bottomBorderWidth: 1,
    // padding: 5,
    // backgroundColor: '#fff',
    // justifyContent: 'flex-start',
    // flexDirection: 'row',
    // borderColor: '#ddd',
    // position: 'relative',
    borderWidth: 2,
    borderColor: '#d6d7da',
},
  locationStyle: {
    // color: '#000',
    // paddingRight: 100,
    // paddingLeft: 5,
    // fontSize: 18,
    // lineHeight: 23,
    borderWidth: 2,
    borderColor: '#d6d7da',
    flex: 3,
    alignItems: 'flex-start'
  }
};

function mapStateToProps({ form }) {
  const { newList, formLoading } = form;
  return { newList, formLoading };
}

export default connect(mapStateToProps, actions)(DeckScreen);
