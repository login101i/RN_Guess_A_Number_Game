import React, { useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View, Button } from 'react-native'

import AnimationNewGame from '../components/AnimationNewGame'

export default function GameOverScreen(props) {
    const [animationVisible, setAnimationVisible] = useState(false)

    const animationHandler = () => {
        setAnimationVisible(true)
    }
    const newGame = () => {
        animationHandler()
        setTimeout(() => {
            props.cancelGame(false)
        }, 3000);
    }


    return (
        <TouchableWithoutFeedback onPress={() => props.cancelGame()}>
            <View style={styles.container}>
                {!animationVisible &&
                    <View style={styles.screen}>
                        <Text>GAME OVER !</Text>
                        <Text>Liczba prób: {props.numberOfGuesess}</Text>
                        <Button
                            title="zagraj ponownie :"
                            onPress={newGame}
                            style={styles.buttonNeGame} />

                    </View>
                }
                <AnimationNewGame
                    visible={animationVisible}

                />

            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    screen: {

        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",


        flex: 1
    },
    buttonNeGame: {
        marginVertical: 22,
    }
})
