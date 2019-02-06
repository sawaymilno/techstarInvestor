import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, Platform, ScrollView, Linking, Button, Image } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import Tags from 'react-native-tags';
import { Result } from '../components/common';


class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Company',
    tabBarIcon: ({ tintColor }) => <Icon name="favorite" size={30} color={tintColor} />,
    headerRight: 
          <Button
            title="Settings"
            onPress={() => navigation.navigate('settings')}
            color="white"
          />,
        style: {
          marginTop: Platform.OS === 'android' ? 24 : 0
        } 
  })
  

  renderLikedJobs() {
    const newList = this.props.results.map(company => {
      const { name, location, status, logo_url, id, url, description, tags, crunchbase_url } = company;
      const { city_name, state_province_code, country_code } = location;
      const sortedTags = tags.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      
      return (
        <Card title={name} key={id}>
          <View style={styles.cardStyle}>

            <View style={styles.rowOneStyle}>
              <View style={styles.imageStyle}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{ uri: logo_url }}
                />
              </View>
              <View style={styles.locationStyle}>
                <Text>{`${city_name} ${state_province_code}. ${country_code}`}</Text>
              </View>
            </View>

            <View style={styles.rowOneStyle}>
              <View style={styles.urlTextStyle}>
                <Text>{`Website:`}</Text>
              </View>
              <View style={styles.urlStyle} >
                <Text style={{color: '#03A9F4'}} onPress={() => Linking.openURL(url)}>{url}</Text>
              </View>
            </View>

            <View style={styles.rowOneStyle}>
              <View style={styles.urlTextStyle}>
                <Text>{`Crunchbase:`}</Text>
              </View>
              <View style={styles.urlStyle} >
                <Text style={{color: '#03A9F4'}} onPress={() => Linking.openURL(crunchbase_url)}>{crunchbase_url}</Text>
              </View>
            </View>

            <View>
              <Result label="Status:" value={status} />
              <View style={styles.tabRowStyle}>
                <Tags
                    initialTags={sortedTags}
                    readonly={true}
                  />
              </View>
              <View style={styles.descriptionStyle}>
                <Text style={{marginLeft: 5, marginRight: 5}}>{description}</Text> 
              </View>
            </View>

            <View style={styles.logoStyle}>
              <Image
                style={{
                  height: 300, width: 300,  
                  marginTop: 5,
                  marginBottom: 5}}
                source={{ uri: company.logo_url }}
              />
            </View>
          </View>
        </Card>
      );
    });

    return _.uniqBy(newList, 'key');
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#6D91A3'}}>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }

}

const styles = {
  canvas: {
    position: 'absolute', 
    top: 5, left: 5, 
    bottom: 5, right: 5
  },
  cardStyle: {
    flex: 1
  },
  descriptionStyle: {
    flexDirection: 'row',
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: '#d6d7da',
        backgroundColor: 'white',
        paddingTop: 5,
        paddingBottom: 5
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#d6d7da',
  },
  tabRowStyle: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#d6d7da',
    backgroundColor: 'white'
  },
  urlStyle: {
    color: '#03A9F4',
    flex: 3,
    alignItems: 'flex-start'
  },
  urlTextStyle: {
    marginLeft: 5,
    marginRight: 5,
  }
};

function mapStateToProps({ likedCompanies }) {
  const { results } = likedCompanies;
  return { results };
}

export default connect(mapStateToProps)(ReviewScreen);
