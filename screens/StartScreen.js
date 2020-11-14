import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import Card from '../components/Card'
import colors from '../config/colors'
import Input from '../components/Input'
import YourNumber from '../components/YourNumber'

export default function StartScreen(props) {

    const [enteredValue, setEnteredValue] = useState()
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const handleEnteredValue = inputText => {
        setEnteredValue(inputText)
        // setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const handleClearInput = () => {
        console.log(enteredValue)

        setEnteredValue('')

    }
    const handleConfirmHandler = () => {
        const chosenNumber = enteredValue
        if (chosenNumber === NaN || 
            chosenNumber <= 0 || 
            chosenNumber >99  ||
            chosenNumber===undefined) {
            Alert.alert('Niedobra liczba', 'Liczba musi byćw zakresie od 0 do 99', [{ text: 'oki', style: 'desctructive', onPress: handleClearInput }])
            return
        }
        console.log(chosenNumber)
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }

    let confirmedValue

    if (confirmed) {
        confirmedValue = (
            <Card style={styles.numberCard}>
                <Text style={styles.titleNumber}>Twój numer to:</Text>

                <YourNumber
                >{selectedNumber}</YourNumber>
                <View style={styles.button}>
                    <Button
                        title="Graj"
                        onPress={() => props.startGame(selectedNumber)}
                    />
                </View>
               
            </Card>
        )
    }




    return (
        <>
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss()
                }}>
                <View style={styles.container}>
                    <Text style={styles.title}>Nowa gra</Text>

                    <Card style={styles.inputContainer}>
                        <Input
                            style={styles.input}
                            placeholder="podaj liczbę"
                            onChangeText={handleEnteredValue}
                            value={enteredValue}
                            keyboardType='numeric'

                        />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>

                                <Button
                                    title="Wyczyść"
                                    color={colors.primary}
                                    onPress={handleClearInput}
                                >
                                </Button>

                            </View>
                            <View style={styles.button}>

                                <Button

                                    title="zatwierdź"
                                    onPress={handleConfirmHandler}
                                >
                                </Button>

                            </View>
                        </View>
                    </Card>
                    {confirmedValue}


                </View >
            </TouchableWithoutFeedback>

        </>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 120,
        justifyContent: 'center',


    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        // justifyContent:'center',
        marginBottom: 10,
    },
    container: {
        flex: 1,
        // backgroundColor: 'green',
        width: '100%',
        alignItems: 'center',
        paddingTop: 20,
    },
    numberCard: {
        width: "50%",
        marginVertical: 22,
    },
    title: {
        fontSize: 26,
        marginBottom: 12,

    },
    titleNumber: {
        fontSize: 26,

    },
    input: {
        width: '90%',

    },
    inputContainer: {
        width: '80%',
      
    }

})
