import React from 'react'
import { StyleSheet, Text, View,  TouchableWithoutFeedback } from 'react-native'


import Colors from '../config/colors'
import defaultStyles from '../config/defaultStyles'


export default function MainButton(props) {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={{...styles.button,...props.style}}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 120,
        backgroundColor:Colors.lightBlue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize:22,
        marginVertical:10,
        fontFamily:'open-sans-bold',
    }

})
