import React, { Component } from 'react';
import { View, Platform, Modal, Text, Dimensions, ScrollView } from 'react-native';
import { Icon, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import Tags from 'react-native-tags';

import { Header, CustomCard, CardSection, Input, Button, Spinner } from '../components/common';
import * as actions from '../actions';

const SCREEN_HEIGHT = Dimensions.get('window').height;

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
    
  onButtonPress = () => this.props.buildCustomList(this.props);
  onModalPress = () => this.setState({ visible: !this.state.visible });

  onNameChange = (text) => this.props.nameChanged(text);
  onCityChange = (text) => this.props.cityChanged(text);
  onStatusChange = (text) => this.props.statusChanged(text);
  onStateChange = (text) => this.props.stateChanged(text);
  onCountryChange = (text) => this.props.countryChanged(text);
  onTagChange = (i, tag) => this.props.tagChanged(tag);

  onlyUnique = (value, index, self) => self.indexOf(value) === index;

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
    const tags = [];
    let tagResults = [];
    this.props.companies.forEach(company => {
      tags.push(...company.tags);
    }); 
    const unique = tags.filter(this.onlyUnique);
    for (let i = 0; i < 100; i++) {
      tagResults.push(unique[i]);
    }

    tagResults = tagResults.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    console.log(tagResults, 'tagresults');

    return (
      <View style={{ backgroundColor: '#6D91A3', height: SCREEN_HEIGHT * 0.95 }}>
        <Header />
        <ScrollView>
          <View>
            <CustomCard>

              <CustomCard>
                <CardSection>
                  <Input
                    label="City"
                    placeholder="city"
                    onChangeText={this.onCityChange}
                    value={this.props.city}
                  />
                </CardSection>
              </CustomCard>

              <CustomCard>
                <CardSection>
                  <Input
                    label="State/Prov"
                    placeholder="state/prov"
                    onChangeText={this.onStateChange}
                    value={this.props.state}
                  />
                </CardSection>
              </CustomCard>

              <CustomCard>
                <CardSection>
                  <Input
                    label="Country"
                    placeholder="country"
                    onChangeText={this.onCountryChange}
                    value={this.props.country}
                  />
                </CardSection>
              </CustomCard>

              <CustomCard>
                <CardSection>
                  <Input
                    label="Status"
                    placeholder="status"
                    onChangeText={this.onStatusChange}
                    value={this.props.status}
                  />
                </CardSection>
              </CustomCard>

              <CustomCard>
                <CardSection>
                  <Input
                    label="Name"
                    placeholder="name"
                    onChangeText={this.onNameChange}
                    value={this.props.name}
                  />
                </CardSection>
              </CustomCard>

              <CustomCard>
                <CardSection>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                      <Text style={{ fontSize: 18, paddingLeft: 20 }}>Tags</Text>
                    </View>
                      <View style={{ flex: 3 }}>
                        <Tags
                          readonly={true}
                          initialTags={this.props.tags}
                        />
                      </View>
                  </View>
                </CardSection>
              </CustomCard>

              <Modal visible={this.state.visible}>
                <ScrollView>
                  <Card containerStyle={{ backgroundColor: '#0DB14B' }}>

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

              <CustomCard>
                <CardSection>
                <Button onPress={this.onModalPress}>Open Industry Tags Options</Button>
                </CardSection>
              </CustomCard>

              <CustomCard>
                <CardSection>
                {this.renderButton()}
                </CardSection>
              </CustomCard>

              <CustomCard />
            
            </CustomCard>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({ form, }) => {
  const { city, state, country, companies, status, formLoading, tags, name } = form;
  return { city, state, country, companies, status, formLoading, tags, name };
};
 
export default connect(mapStateToProps, actions)(FormScreen);
