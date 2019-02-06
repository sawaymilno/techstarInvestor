import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle} >
            {children} 
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#2A3842',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#2BB05D',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#2A3842',
        marginLeft: 5,
        marginRight: 5,
    },

};

// grey #2A3842
// green #0DB14B
// blue #6D91A3

export { Button };
