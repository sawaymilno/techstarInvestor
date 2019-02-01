import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, Platform, ScrollView, Linking, Button } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';

class ReviewScreen extends Component {
  // static navigationOptions = {
  //   title: 'Review Jobs',
  //   tabBarIcon: ({ tintColor }) => <Icon name="favorite" size={30} color={tintColor} /> 
  // }

  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    tabBarIcon: ({ tintColor }) => <Icon name="favorite" size={30} color={tintColor} />,
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
  })
  

  renderLikedJobs() {

    console.log(this.props.likedJobs.results, 'this.props.likedJobs.results');
    
    const newList = this.props.likedJobs.results.map(job => {
      const { company, title, apply_url, id, post_date } = job;
      
      return (
        <Card title={title} key={id}>
          <View style={{ height: 200 }}>
            <MapView
              style={{ flex: 1 }}
              cacheEnabled={Platform.OS === 'android'}
              scrollEnabled={false}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{company.name}</Text>
              <Text style={styles.italics}>{post_date}</Text>
            </View>
            <Button
              title="Apply Now!"
              backgroundColor="#03A9F4"
              onPress={() => Linking.openURL(apply_url)}
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
  }
};

function mapStateToProps(state) {
  return { likedJobs: state.likedJobs };
}

export default connect(mapStateToProps)(ReviewScreen);
