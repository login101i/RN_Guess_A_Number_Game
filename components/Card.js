import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

export default function Card(props) {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    card: {
        width: '80%',
        alignItems: 'center',
   
        // shadowColor: "black",
        // shadowOffset: { width: 0, height: 12},
        // shadowRadius: 5,
        // above only for iOS
        elevation: 9,
        shadowOpacity: 0.5,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#f8f8f8",


    }
})
