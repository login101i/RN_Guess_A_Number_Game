import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

export default function GameOverScreen(props) {
    return (
        <TouchableWithoutFeedback onPress={()=>props.cancelGame()}>
            <View style={styles.screen}>
                <Text>GAME OVER</Text>
                <Text>Liczba prób: {props.numberOfGuesess}</Text>
            </View>
            
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    screen: {

        justifyContent: 'center',
        alignItems: 'center',
        width:"100%",


        flex: 1
    }
})
