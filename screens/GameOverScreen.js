import React, { useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View, Button, Image, ImageBackground } from 'react-native'

import AnimationNewGame from '../components/AnimationNewGame'
import BodyText from '../components/BodyText'
import MainButton from '../components/MainButton'



export default function GameOverScreen(props) {
    const [animationVisible, setAnimationVisible] = useState(false)

    const animationHandler = () => {
        setAnimationVisible(true)
    }
    const newGame = () => {
        animationHandler()
        setTimeout(() => {
            props.cancelGame(null)
        }, 3000);
    }

    const image ='https://wallpapercave.com/wp/2ZkCESu.jpg'


    return (
        // <TouchableWithoutFeedback onPress={() => props.cancelGame()}>
            <View style={styles.container}>
                {!animationVisible &&
                    <View style={styles.screen}>

                        <View style={styles.imageContainer}>
                            <Image
                                // source={require('../assets/success.png')}
                                source={{uri:image}}
                                style={styles.image}
                                fadeDuration={1500}
                            />
                        </View>

                        <BodyText>GAME OVER !</BodyText>
                        <BodyText style={styles.info}>Liczba prób: {props.numberOfGuesess}</BodyText>
                        <MainButton 
                        style={{width:230}}
                        onPress={newGame}>
                            Zagraj Ponownie
                        </MainButton>
                      

                    </View>
                }
                <AnimationNewGame
                    visible={animationVisible}

                />

            </View>
        // </TouchableWithoutFeedback>

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
        marginTop: -150,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        flex: 1
    },
 
    info: {
        marginBottom: 22
    },

    imageContainer: {
        borderRadius: 120,
        elevation: 33,
        width: 240,
        height: 240,
        overflow: 'hidden',
        marginBottom: 22,
        borderWidth:2,
        borderColor:'grey'
        
    },
    image: {
        width: '100%',
        height: '100%',
        marginBottom: 22,
    },
})
