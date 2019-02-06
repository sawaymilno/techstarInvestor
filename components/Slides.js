import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Image } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
            <Button
              title="Click here to invest!"
              titleStyle={{ color: 'black' }}
              icon={{ name: 'accessibility' }}
              buttonStyle={styles.buttonStyle}
              onPress={this.props.onComplete}
            />
      );
    }
  }


  renderSlides() {
    return this.props.data.map((slide, index) => (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }, { color: slide.color }]}
        >
        <View>
          <Image
            style={{ width: 175 * 1.58, height: 175 }}
            source={slide.image}
          />
        </View>
          <View >
            <Text style={[styles.textStyle, { color: slide.textColor }]}>{slide.text}</Text>
            {this.renderLastSlide(index)}
          </View>
        </View>
      )
    );
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    marginTop: 50,
    fontSize: 30,
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: 'white',
    marginTop: 20
  }
};

export default Slides;
