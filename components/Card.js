import React from 'react';
import {View, StyleSheet} from 'react-native';


const Card = props => {
    return(
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height:2},
        shadowOpacity: 0.26,
        shadowRadius: 10,
        // for android we use elevation to set Shadow
        elevation: 8,
        padding: 20,
        marginTop: 15 
    }
});

export default Card;