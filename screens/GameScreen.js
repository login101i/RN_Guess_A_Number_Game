import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

import Card from '../components/Card'
import YourNumber from '../components/YourNumber'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    const rndNum = Math.floor(Math.random() * (max - min)) + min
    console.log(rndNum)
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

export default function GameScreen(props) {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice))

    // super - useRef przeżywa po zrenderowaniu funkcji :). Możemy go wykorzystać.

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    // Ta funckja musi być w środku
    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice)||
            (direction === 'greater' && currentGuess > props.userChoice)){
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
        const nextNumber = generateRandomBetween(currentLow.current,currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
    }


    return (
        <View style={styles.screen}>
            <Text style={styles.titleNumber}>Liczba wybrana przez komputer:</Text>
            <YourNumber>{currentGuess}</YourNumber>
            <Card style={styles.card}>
                <Button
                    title="mniej"
                    onPress={nextGuessHandler.bind(this, 'lower')}
                />
                <Button
                    title="więcej"
                    onPress={nextGuessHandler.bind(this, 'greater') }


                />
            </Card>
          
                <View style={styles.restOfScreen}><Text>tekst</Text></View>
        

        </View>
    )
}

const styles = StyleSheet.create({
    card: {

        width: 300,
        maxWidth: "80%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    restOfScreen: {
        backgroundColor: 'purple',
        height: 200,


    },
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        width: '100%'

    },
    titleNumber: {
        fontSize: 26,
    }
})
