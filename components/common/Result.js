import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Result = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <View style={labelStyle}><Text>{label}</Text></View>
            <Text style={inputStyle}>{value}</Text>
        </View>
    );
};

const styles = {
    containerStyle: {
    // height: 40,
    // flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: '#ddd',
    // borderBottomWidth: 0,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 1,
    // marginLeft: 5,
    // marginRight: 5,
    // marginTop: 10,
    borderWidth: 2,
    borderColor: '#d6d7da',
    },

    labelStyle: {
    // fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingLeft: 20,
    flex: 1,
    borderWidth: 2,
    borderColor: '#d6d7da',
    },

    inputStyle: {
    // color: '#000',
    // paddingRight: 5,
    // paddingLeft: 5,
    // fontSize: 18,
    // lineHeight: 23,
    // alignItems: 'center',
    flex: 3,
    borderWidth: 2,
    borderColor: '#d6d7da',
    }
};

export { Result };
