import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Alert, TouchableHighlight, TouchableWithoutFeedback, Keyboard, ScrollView, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


import Card from '../components/Card'
import YourNumber from '../components/YourNumber'
import TitleText from '../components/TitleText'
import MainButton from '../components/MainButton'
import defaultStyles from '../config/defaultStyles'
import BodyText from '../components/BodyText'

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

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 999, props.userChoice))
    const [guesses, setGuesses] = useState(0)
    const [nextGuess, setNextGuess] = useState([currentGuess.toString()])

    const { gameOver, userChoice } = props

    console.log("Guesses from Game:  " + guesses + " lIbza komputera to " + currentGuess + "userChoice to :  " + userChoice)


    // super - useRef przeżywa po zrenderowaniu funkcji :). Możemy go wykorzystać.

    const currentLow = useRef(1)
    const currentHigh = useRef(999)


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
            currentLow.current = currentGuess + 1
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setGuesses(currentGuessestegoNieZmieniasz => currentGuessestegoNieZmieniasz + 1)
        setNextGuess(currGuess => [...currGuess, nextNumber.toString()])
    }

    const ListOfGuesses = (guesses, itemData) => (

        <View
            style={styles.list}>
            <BodyText># {guesses +1 - itemData.index}</BodyText>
            <BodyText>{itemData.item}</BodyText>
        </View>
    )



    return (
        <View style={styles.screen}>
            <Text style={[defaultStyles.bodyText, { marginTop: 22 }]}>Liczba wybrana przez komputer to:</Text>
            <YourNumber>{currentGuess}</YourNumber>
            <Card style={styles.card}>
                <MainButton
                    onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name="md-remove" size={29} color="white" />
                </MainButton>
                <MainButton
                    onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name="md-add" size={29} color="white" />
                </MainButton>

            </Card>
            <View style={styles.listContainer}>
                {/* <ScrollView >
                    {nextGuess.map((value, index) => ListOfGuesses(value, index + 1))}
                </ScrollView> */}
                <FlatList
                    data={nextGuess}
                    keyExtractor={(item)=>item}
                    renderItem={ListOfGuesses.bind(this, guesses)}
                />
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

    screen: {
        justifyContent: 'center',
        alignItems: 'center',
        height:"80%",
        // backgroundColor: 'red',


    },
    list: {
        borderBottomWidth: 2,
        borderColor: 'grey',
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal:4
    },
    listContainer: {
        flex: 1,
        width: 160,
        marginTop: 33,
        padding:10,
        


    },
    titleNumber: {
        fontSize: 26,
    },
    tekst: {
        fontSize: 22,
    }
})
