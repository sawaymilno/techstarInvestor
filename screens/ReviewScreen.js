import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, Platform, ScrollView, Linking, Button, Image } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

class ReviewScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Company',
    tabBarIcon: ({ tintColor }) => <Icon name="favorite" size={30} color={tintColor} />,
    headerRight: 
          <Button
            title="Settings"
            onPress={() => navigation.navigate('settings')}
            style={styles.buttonStyle}
            color="white"
          />,
        style: {
          marginTop: Platform.OS === 'android' ? 24 : 0
        } 
  })
  

  renderLikedJobs() {
    const newList = this.props.results.map(item => {
      const { name, status, logo_url, id, url } = item;
      
      return (
        <Card title={name} key={id}>
          <View style={{ height: 300 }}>
          <View>
            <Image
            style={{ width: 175, height: 175 }}
            // cacheEnabled={Platform.OS === 'android'}
            source={{ uri: logo_url }}
              // scrollEnabled={false}
            />
          </View>
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{name}</Text>
              <Text style={styles.italics}>{status}</Text>
            </View>
            <Button
              title="Invest!"
              backgroundColor="#03A9F4"
              onPress={() => Linking.openURL(url)}
            />
          </View>
        </Card>
      );
    });

    return _.uniqBy(newList, 'key');
  }

  render() {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }

}

const styles = {
  italics: {
    fontStyle: 'italic'
  },
  detailWrapper: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonStyle: {
    // marginBottom: 40
  }
};

function mapStateToProps({ likedCompanies }) {
  const { results } = likedCompanies;
  return { results };
}

export default connect(mapStateToProps)(ReviewScreen);
