import React from 'react';
import { Text, View, Image } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
       <Image
            style={{ width: 160, height: 35, marginTop: 15 }}
            source={require('../../assets/tsLogo_Green_Horiz.png')}
       />
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
        );
};

const styles = {
    viewStyle: {
        backgroundColor: '#0DB14B',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 25,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
    }
};

export { Header };
