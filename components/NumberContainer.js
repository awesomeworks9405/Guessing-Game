import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.textInput}>{props.children}</Text>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.secondary,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        padding: 5
    },
    textInput: {
        fontSize:25,
        color: colors.secondary
    }
});

export default NumberContainer