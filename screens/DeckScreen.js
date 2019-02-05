import React, { Component } from 'react';
import { View, Text, Linking, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Card, Icon } from 'react-native-elements';
import Tags from 'react-native-tags';
import Swipe from '../components/Swipe';
import { Header, Button, CustomCard, CardSection, Result, TagResults } from '../components/common';
import * as actions from '../actions';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Companies',
    tabBarIcon: ({ tintColor }) => <Icon name="description" size={30} color={tintColor} /> 
  }

  clearTheForm = () => {
    console.log('clearTheForm()');
    this.props.clearForm()
    this.props.navigation.navigate('form')
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
          {/* <View >
            <TagResults label="Tags:" tags={company.tags} />
          </View> */}
        </View>

          <View style={styles.logoStyle}>
          {/* <View style={{ marginLeft: 20, flexDirection: 'column', justifyContent: 'center'}}> */}
            {/* <Text style={{justifyContent: 'center'}}>{company.brief_description}</Text> */}
            <Image
              resizeMode="contain"
              style={canvas}
              source={{ uri: company.logo_url }}
            />
          </View>
        {/* </View> */}
      </View>
    </Card>
    );
  }
  

  renderNoMoreCards = () => (
    <View style={{ marginTop: 225 }} >
        <CardSection>
          <Button onPress={
            this.clearTheForm
           
          }>
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
const canvas = {
  position: 'absolute', top: 5, left: 5, bottom: 5, right: 5,
}

const styles = {
  cardStyle: {
    height: SCREEN_HEIGHT*.6,
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
