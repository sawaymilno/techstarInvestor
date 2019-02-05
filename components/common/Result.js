import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Result = ({ label, value }) => {
const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <View style={labelStyle}>
                <Text>{label}</Text>
            </View>
            <Text style={inputStyle}>{value}</Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        flexDirection: 'row',
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: '#d6d7da',
        backgroundColor: 'white',
        paddingTop: 5,
        paddingBottom: 5
        
    },
    labelStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5
    },
    inputStyle: {
        flex: 3,
        marginLeft: 5,
        marginRight: 5
    }
};

export { Result };
