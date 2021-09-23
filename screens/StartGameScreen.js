import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';


const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');

    const [confirmed, setConfirmed] = useState(false);

    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = InputValue => {
        setEnteredValue(InputValue.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {

        const chosenNumber = parseInt(enteredValue);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Input!', 'Input Has to be a number between 1 to 99.' [{text: 'Okay', style: 'cancel', onPress: resetInputHandler}] )
            return;
        }
        
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');

        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = 
        <Card style={styles.summaryDisplay}>
            <Text>You Selected:</Text>
            <View>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" />
            </View>
        </Card>
        
    }

    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text>Start A New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.title}>Select a Number</Text>
                    <Input 
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='number-pad'
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttons}>
                            <Button title='Reset' color={colors.secondary} onPress={resetInputHandler} />
                        </View>
                        <View style={styles.buttons}>
                            <Button title='Confirm' color={colors.primary} onPress={confirmInputHandler} />
                        </View> 
                    </View>
                </Card>
                    {confirmedOutput}
                
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    title: {
        fontSize: 15,
        // fontFamily: 'Cochin',
        marginVertical: 10,
    },
    input: {
       width: 100,
       textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
    },
    buttons: {
        borderWidth: 1,
        borderBottomLeftRadius: 10,
        width: '40%',
    },
    summaryDisplay: {
        marginTop: 30,
        alignItems: 'center'
    }

});

export default StartGameScreen;