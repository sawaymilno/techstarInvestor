import React, { Component } from 'react';
// import axios from 'axios';
import { View, Platform, Modal, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import Tags from 'react-native-tags';

import { Header, CustomCard, CardSection, Input, Button, Spinner } from '../components/common';
import * as actions from '../actions';

class FormScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'form',
    tabBarIcon: ({ tintColor }) => <Icon name="my-location" size={30} color={tintColor} />, 
    headerRight: 
    <Button
    title="Settings"
    onPress={() => navigation.navigate('settings')}
    backgroundColor="rgba(109, 145, 163)"
    color="rgba(13, 177, 75)"
    />,
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    } 
  });
  
  
  state = {
    visible: false
  }
  // async componentDidMount() {
      // await Permissions.askAsync(Permissions.LOCATION);
  // }
  
  // onRegionChangeComplete = (region) => {
    //   this.setState({ region });
    // }
    
  onButtonPress = () => this.props.buildCustomList(this.props);
  onModalPress = () => this.setState({visible: !this.state.visible});

  onNameChange = (text) => this.props.nameChanged(text);
  onCityChange = (text) => this.props.cityChanged(text);
  onStatusChange = (text) => this.props.statusChanged(text);
  onStateChange = (text) => this.props.stateChanged(text);
  onCountryChange = (text) => this.props.countryChanged(text);

  onTagChange = (i,tag) => {
    console.log(i, tag, 'tag in modal');
    this.props.tagChanged(tag); 
  }

  onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
  }

  renderButton = () => {
   if (this.props.formLoading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress}>
        Search
      </Button>
    );
  }
 
  render() {
    const tags = []
    let tagResults = []
    this.props.companies.forEach(company => {
      tags.push(...company.tags)
    }) 
    const unique = tags.filter(this.onlyUnique);
    for (let i = 0; i < 100; i++) {
      tagResults.push(unique[i])
    }

    tagResults = tagResults.sort()

    return (
      <View>
        <Header />
        <CustomCard>
          <CardSection>
            <Input
              label="Name"
              placeholder="name"
              onChangeText={this.onNameChange}
              value={this.props.name}
            />
          </CardSection>
          <CardSection>
            <Input
              label="City"
              placeholder="city"
              onChangeText={this.onCityChange}
              value={this.props.city}
            />
          </CardSection>
          <CardSection>
            <Input
              label="State/Prov"
              placeholder="state/prov"
              onChangeText={this.onStateChange}
              value={this.props.state}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Country"
              placeholder="country"
              onChangeText={this.onCountryChange}
              value={this.props.country}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Status"
              placeholder="status"
              onChangeText={this.onStatusChange}
              value={this.props.status}
            />
          </CardSection>

          <CardSection>
            <Tags
              readonly={true}
              initialTags={this.props.tags}
            />
          </CardSection>

          

            <Modal visible={this.state.visible}>
              <ScrollView>
                <Card containerStyle={{backgroundColor: '#0DB14B'}}>

                  <CardSection>
                    <Tags
                        initialTags={tagResults}
                        onTagPress={(i, label) => this.onTagChange(i, label)}
                      />
                  </CardSection>

                  <CardSection>
                      <Button onPress={this.onModalPress}>Select Industry Tags</Button>
                  </CardSection>

                </Card>
              </ScrollView>
            </Modal>


          <CardSection>
          <Button onPress={this.onModalPress}>Open Industry Tags Options</Button>
          </CardSection>
          <CardSection>
          {this.renderButton()}
          </CardSection>

         </CustomCard>
      </View>
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

const mapStateToProps = ({ form, }) => {
  const { city, state, country, companies, status, formLoading, tags, name } = form;
  return { city, state, country, companies, status, formLoading, tags, name };
};
 
export default connect(mapStateToProps, actions)(FormScreen);
