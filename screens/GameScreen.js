import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Alert, TouchableHighlight, TouchableWithoutFeedback, Keyboard } from 'react-native'

import Card from '../components/Card'
import YourNumber from '../components/YourNumber'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

export default function GameScreen(props) {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))
    const [guesses, setGuesses] = useState(0)

    const { gameOver, userChoice } = props

    console.log("Guesses from Game:  " + guesses + " lIbza komputera to " + currentGuess + "userChoice to :  " + userChoice)

    // super - useRef przeżywa po zrenderowaniu funkcji :). Możemy go wykorzystać.

    const currentLow = useRef(1)
    const currentHigh = useRef(100)


    

    useEffect(() => {
        if (currentGuess == userChoice) {
            gameOver(guesses)
        }
    }, [currentGuess, userChoice, gameOver])

    // Ta funckja musi być w środku
    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert('Nie kłam Maciuś', 'Wiesz, że nie ładnie kłamać',
                [
                    { text: "Przepraszam", style: 'cancel' }
                ])
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setGuesses(currentGuessestegoNieZmieniasz => currentGuessestegoNieZmieniasz + 1)
    }


    return (
        <View style={styles.screen}>
            <Text style={styles.titleNumber}>Liczba wybrana przez komputer:</Text>
            <YourNumber>{currentGuess}</YourNumber>
            <Card style={styles.card}>
                <View style={styles.button}>
                    <Button
                        title="mniej"
                        onPress={nextGuessHandler.bind(this, 'lower')}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="więcej"
                        onPress={nextGuessHandler.bind(this, 'greater')}


                    />
                </View>
            </Card>
            <View style={styles.restOfScreen}>
                <Card style={styles.cardCancel}
                    onPress={() => props.cancelGame(false)}
                >

                    <Text>Nowa Gra</Text>

                </Card>
            </View>


        </View >
    )
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 99,
        justifyContent: 'center',


    },
    card: {

        width: 280,
        maxWidth: "80%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 100,

    },
    cardCancel: {

        width: 180,
        maxWidth: "80%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        marginTop: -250

    },
    restOfScreen: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',


    },
    titleNumber: {
        fontSize: 26,
    },
    tekst: {
        fontSize: 22,
    }
})
